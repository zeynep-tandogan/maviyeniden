import React, { useState } from 'react';

// 🎙️ Yeni bölüm eklemek için buraya yeni bir obje ekle:
const episodes = [
  {
    id: 1,
    title: 'bayramlar...',
    description: 'bayram ve yol üstüne kısa bir sohbet',
    date: '31 Mayıs 2026',
    duration: '5 dk',
    spotifyEmbedId: '2JCiE9HOTZcqUWsLuApWOE',
  },
  {
    id: 2,
    title: 'Anne Güncesi',
    description: 'annelik, roller, çay, sohbet...',
    date: '15 Mayıs 2026',
    duration: '7 dk',
    spotifyEmbedId: '4gWZRDHpa1Y9Ez2rIMiyKs',
  },
];

function PodcastPage() {
  const [selectedEp, setSelectedEp] = useState(episodes[0]);

  return (
    <section id="podcastler" className="section podcast-page-section">
      <div className="container">
        <h2 className="section-title">Podcast Arşivi</h2>
        <p className="section-subtitle">
          Bir bölüme tıkla, hemen dinlemeye başla.
        </p>

        <div className="podcast-layout">
          {/* ── ÜST PANEL: Seçili bölüm player ── */}
          <div className="podcast-player-panel">
            <div className="podcast-now-playing-label">
              <span className="now-playing-dot" />
              Şu an oynatılıyor
            </div>
            <h3 className="podcast-now-title">{selectedEp.title}</h3>
            <p className="podcast-now-desc">{selectedEp.description}</p>
            <div className="podcast-player-container">
              <iframe
                key={selectedEp.id}
                style={{ borderRadius: '12px', border: 'none' }}
                src={`https://open.spotify.com/embed/episode/${selectedEp.spotifyEmbedId}?utm_source=generator&theme=0`}
                width="100%"
                height="232"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── ALT PANEL: Bölüm listesi ── */}
          <div className="podcast-list-panel">
            <h4 className="podcast-list-heading">
              Tüm Bölümler ({episodes.length})
            </h4>
            <ul className="podcast-episode-list">
              {episodes.map((ep, idx) => (
                <li
                  key={ep.id}
                  className={`podcast-episode-item ${selectedEp.id === ep.id ? 'active' : ''}`}
                  onClick={() => setSelectedEp(ep)}
                >
                  <span className="ep-number">{String(idx + 1).padStart(2, '0')}</span>
                  <div className="ep-info">
                    <span className="ep-title">{ep.title}</span>
                    <span className="ep-meta">{ep.date} &bull; {ep.duration}</span>
                  </div>
                  <span className="ep-play-icon">
                    {selectedEp.id === ep.id ? '▶' : '›'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PodcastPage;
