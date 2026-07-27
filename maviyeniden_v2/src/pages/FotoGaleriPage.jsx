import React, { useState } from 'react';
import bizKimizImg from '../assets/biz_kimiz.jpeg';

// Galeri fotoğrafları — yeni fotoğraf eklemek için buraya ekleyin
const photos = [
  {
    id: 1,
    src: bizKimizImg,
    alt: 'Mavi Yeniden Ekibi',
    caption: 'Mavi Yeniden Ekibi',
    category: 'Ekip',
  },
  // Buraya yeni fotoğraflar eklenebilir
  // { id: 2, src: import, alt: '...', caption: '...', category: '...' },
];

const categories = ['Tümü', 'Ekip', 'Etkinlik', 'Stüdyo'];

function FotoGaleriPage() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === 'Tümü'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  return (
    <section className="section" style={{ marginTop: '80px', minHeight: 'calc(100vh - 180px)' }}>
      <div className="container">
        <h2 className="section-title">Foto Galeri</h2>
        <p className="section-subtitle">Mavi Yeniden'den kareler</p>

        {/* Kategori Filtreleri */}
        <div className="galeri-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`galeri-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Fotoğraf Grid */}
        {filtered.length > 0 ? (
          <div className="galeri-grid">
            {filtered.map((photo) => (
              <div
                key={photo.id}
                className="galeri-item"
                onClick={() => setLightbox(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox(photo)}
              >
                <img src={photo.src} alt={photo.alt} className="galeri-img" />
                <div className="galeri-overlay">
                  <span className="galeri-caption">{photo.caption}</span>
                  <span className="galeri-category-tag">{photo.category}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="placeholder-box">
            <p>🖼️ Bu kategoride henüz fotoğraf bulunmuyor.</p>
          </div>
        )}

        {/* Lightbox */}
        {lightbox && (
          <div
            className="galeri-lightbox"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Fotoğraf büyütme"
          >
            <div className="galeri-lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <button
                className="galeri-lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Kapat"
              >
                ✕
              </button>
              <img src={lightbox.src} alt={lightbox.alt} className="galeri-lightbox-img" />
              <p className="galeri-lightbox-caption">{lightbox.caption}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FotoGaleriPage;
