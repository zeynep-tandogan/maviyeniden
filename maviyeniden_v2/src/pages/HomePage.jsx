import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    badge: 'YENİ PROJE',
    title: 'Mavi Yeniden Podcast Serisi',
    desc: 'Kültür, sanat ve şehir tarihi üzerine derinlikli sohbetler. Hemen dinlemeye başlayın!',
    link: '/podcast',
    linkText: 'Podcast\'i Dinle',
    color: '#1e3a8a',
  },
  {
    id: 2,
    badge: 'HABER',
    title: 'Yeni Sesli E-Kitap Koleksiyonu',
    desc: 'Seçkin eserlerden derlenen sesli kitap arşivimiz yayında. Keşfedin!',
    link: '/sesli-kitap',
    linkText: 'İncele',
    color: '#0f4c75',
  },
  {
    id: 3,
    badge: 'DUYURU',
    title: 'Kültür Sanat Etkinlikleri 2026',
    desc: 'Bu yılın en özel kültür ve sanat etkinliklerini takip edin, kaçırmayın.',
    link: '/kultur-sanat',
    linkText: 'Etkinlikleri Gör',
    color: '#1a3a5c',
  },
  {
    id: 4,
    badge: 'YENİ İÇERİK',
    title: 'Şehir Tarihi: İzmir Özel Bölümü',
    desc: 'İzmir\'in tarihi dokusu ve kültürel mirasını anlatan özel bölümümüz yayınlandı.',
    linkText: 'Hemen Oku',
    color: '#0d2137',
  },
];

function NewsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="news-slider-section">
      <div className="news-slider-inner" style={{ background: `linear-gradient(135deg, ${slide.color}, #0f172a)` }}>
        <div className="news-slider-content">
          <span className="news-badge">{slide.badge}</span>
          <h2 className="news-title">{slide.title}</h2>
          <p className="news-desc">{slide.desc}</p>
          <Link to={slide.link} className="news-cta-btn">{slide.linkText}</Link>
        </div>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
        <div className="slider-arrows">
          <button className="slider-arrow" onClick={() => setCurrent((current - 1 + slides.length) % slides.length)} aria-label="Önceki">&#8592;</button>
          <button className="slider-arrow" onClick={() => setCurrent((current + 1) % slides.length)} aria-label="Sonraki">&#8594;</button>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <h1>Dijital Kültür ve Ses Arşivi</h1>
          <p>Podcastler, sesli kitaplar, şehir tarihi ve kültür sanat gündemine dair her şey tek bir platformda.</p>
          <Link to="/podcast" className="btn">Dinlemeye Başla</Link>
        </div>
      </header>

      {/* Haber & Yeni Eklenenler Slider */}
      <NewsSlider />

      {/* Biz Kimiz */}
      <section id="biz-kimiz" className="section bg-alt">
        <div className="container">
          <h2 className="section-title">Biz Kimiz &amp; Vizyonumuz</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>Biz Kimiz?</h3>
              <p>Mavi Yeniden, kültürel mirası, şehir tarihini ve sanatsal içerikleri dijital dünyaya taşıyan yenilikçi bir sesli arşiv platformudur.</p>
            </div>
            <div className="about-card">
              <h3>Vizyonumuz</h3>
              <p>Gelecek nesillere kalıcı bir dijital kütüphane bırakmak; dinleyicilerimizi derinlikli podcastler, sesli e-kitaplar ve nitelikli içeriklerle buluşturmaktır.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
