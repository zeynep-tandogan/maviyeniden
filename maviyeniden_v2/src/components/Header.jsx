import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo-link" onClick={closeMenu}>
            <img src={logo} alt="Mavi Yeniden Logo" className="logo-img" />
            <span className="site-name">MAVİ YENİDEN</span>
          </Link>

          <div className="nav-right">
            {/* Tema Geçiş Butonu */}
            <button
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'}
              title={theme === 'dark' ? 'Açık Tema' : 'Koyu Tema'}
            >
              <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
              <span className="label">{theme === 'dark' ? 'Açık' : 'Koyu'}</span>
            </button>

            {/* Hamburger Menü */}
            <button
              className={`menu-toggle-btn ${menuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Menüyü Aç"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && <div className="drawer-overlay" onClick={closeMenu} />}

      {/* Side Drawer */}
      <aside className={`side-drawer ${menuOpen ? 'open' : ''}`}>
        <button className="close-drawer-btn" onClick={closeMenu} aria-label="Kapat">✕</button>
        <div className="drawer-logo-area">
          <img src={logo} alt="Logo" className="drawer-logo-img" />
          <span className="drawer-site-name">MAVİ YENİDEN</span>
        </div>
        <nav>
          <ul className="drawer-menu">
            <li><Link to="/" onClick={closeMenu}>Ana Sayfa</Link></li>
            <li><Link to="/hakkimizda" onClick={closeMenu}>Hakkımızda</Link></li>
            <li><Link to="/misyon-vizyon" onClick={closeMenu}>Misyonumuz &amp; Vizyonumuz</Link></li>
            <li><Link to="/podcast" onClick={closeMenu}>Podcast Arşivimiz</Link></li>
            <li><Link to="/projeler" onClick={closeMenu}>Projeler</Link></li>
            <li><Link to="/is-birlikcilerimiz" onClick={closeMenu}>İş Birlikçilerimiz</Link></li>
            <li className="menu-divider" />
            <li><Link to="/sesli-kitap" onClick={closeMenu}>Sesli E-Kitap</Link></li>
            <li><Link to="/kultur-sanat" onClick={closeMenu}>Kültür Sanat</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Header;
