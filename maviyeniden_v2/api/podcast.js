export default async function handler(req, res) {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  const show_id = process.env.SPOTIFY_SHOW_ID;

  if (!client_id || !client_secret || !show_id) {
    return res.status(500).json({ error: 'Missing Spotify configuration (SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, or SPOTIFY_SHOW_ID).' });
  }

  try {
    // 1. Get Spotify Access Token (Client Credentials Flow)
    const auth = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenResponse.ok) {
      const errText = await tokenResponse.text();
      return res.status(500).json({ error: `Spotify auth failed: ${errText}` });
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. Fetch episodes of the Show from Spotify API
    const episodesResponse = await fetch(`https://api.spotify.com/v1/shows/${show_id}/episodes?limit=50`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!episodesResponse.ok) {
      const errText = await episodesResponse.text();
      return res.status(500).json({ error: `Spotify episodes fetch failed: ${errText}` });
    }

    const episodesData = await episodesResponse.json();

    // 3. Format the episodes list
    const formattedEpisodes = episodesData.items.map((ep, idx) => {
      // Format duration (ms to minutes)
      const durationMin = Math.round(ep.duration_ms / 60000);
      const durationStr = `${durationMin} dk`;

      // Format date (YYYY-MM-DD to Turkish "D Month YYYY")
      let formattedDate = ep.release_date;
      if (ep.release_date) {
        const months = [
          'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
          'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
        ];
        const parts = ep.release_date.split('-');
        if (parts.length === 3) {
          const year = parts[0];
          const monthIndex = parseInt(parts[1], 10) - 1;
          const day = parseInt(parts[2], 10);
          if (monthIndex >= 0 && monthIndex < 12) {
            formattedDate = `${day} ${months[monthIndex]} ${year}`;
          }
        }
      }

      return {
        id: ep.id,
        title: ep.name,
        description: ep.description || '',
        date: formattedDate,
        duration: durationStr,
        spotifyEmbedId: ep.id,
      };
    });

    // 4. Set caching headers for performance (Vercel Edge Caching: 1 hour cache, stale-while-revalidate)
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');

    return res.status(200).json(formattedEpisodes);
  } catch (error) {
    return res.status(500).json({ error: `Server error: ${error.message}` });
  }
}
