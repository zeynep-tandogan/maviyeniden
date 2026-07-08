import React from 'react';

function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <div className="social-links">
                <a href="https://open.spotify.com/show/033h3NmkaNFW9oArqgGalK" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <p className="email-contact">İletişim: <a href="mailto:maviyenidenn@gmail.com">maviyenidenn@gmail.com</a></p>
            <p className="copyright">&copy; 2026 Mavi Yeniden. Tüm Hakları Saklıdır.</p>
        </div>
    </footer>
  );
}

export default Footer;
