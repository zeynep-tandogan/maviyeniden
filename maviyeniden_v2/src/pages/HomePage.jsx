import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bizKimizImg from '../assets/biz_kimiz.jpeg';

/* ─── Hero arka plan slaytları ─── */
const heroSlides = [
  {
    // Kütüphane — kitap rafları, sıcak ışık
    url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1800&q=85',
    label: 'Kütüphane',
  },
  {
    // İstanbul — Boğaz manzarası
    url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1800&q=85',
    label: 'İstanbul',
  },
  {
    // Vintage mikrofon — sanatsal, sıcak
    url: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1800&q=85',
    label: 'Ses Arşivi',
  },
  {
    // Eski şehir sokak — kültürel
    url: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee?auto=format&fit=crop&w=1800&q=85',
    label: 'Kültür',
  },
];

/* ─── Haberler Slider verisi ─── */
const slides = [
  {
    id: 1,
    badge: 'Yeni Proje',
    title: 'Mavi Yeniden Podcast Serisi',
    desc: 'Kültür, sanat ve şehir tarihi üzerine derinlikli sohbetler. Hemen dinlemeye başlayın!',
    link: '/podcast',
    linkText: "Podcast'i Dinle",
    color: 'hsl(215, 60%, 16%)',
    img: bizKimizImg,
  },
  {
    id: 2,
    badge: 'Haber',
    title: 'Yeni Sesli E-Kitap Koleksiyonu',
    desc: 'Seçkin eserlerden derlenen sesli kitap arşivimiz yayında. Keşfedin!',
    link: '/sesli-kitap',
    linkText: 'İncele',
    color: 'hsl(225, 45%, 15%)',
    img: null,
  },
  {
    id: 3,
    badge: 'Duyuru',
    title: 'Kültür-Sanat Etkinlikleri 2026',
    desc: 'Bu yılın en özel kültür ve sanat etkinliklerini takip edin, kaçırmayın.',
    link: '/kultur-sanat',
    linkText: 'Etkinlikleri Gör',
    color: 'hsl(220, 50%, 14%)',
    img: bizKimizImg,
  },
  {
    id: 4,
    badge: 'Yeni İçerik',
    title: 'Mavi İçerik: İzmit Özel Bölümü',
    desc: "İzmit'in tarihi dokusu ve kültürel mirasını anlatan özel bölümümüz yayınlandı.",
    link: '/projeler',
    linkText: 'Hemen Oku',
    color: 'hsl(210, 40%, 15%)',
    img: null,
  },
];

/* ─── Hero Bileşeni ─── */
function HeroSection() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    // Fotoğrafların ekranda bekleme süresi 9 saniyeye (9000ms) çıkarıldı
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroSlides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero">
      {/* Tüm slayt resimlerini katman olarak ekleyip CSS cross-fade ile pürüzsüz geçiş sağlıyoruz.
          Bu sayede geçiş anındaki siyah boşluk ve yüklenme gecikmesi (flash) tamamen engellenir. */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`hero-bg-slide ${i === bgIndex ? 'visible' : ''}`}
          style={{ backgroundImage: `url('${slide.url}')` }}
        />
      ))}
      {/* Katman gradyanı */}
      <div className="hero-overlay-gradient" />
      {/* Taneli doku efekti */}
      <div className="hero-grain" />

      {/* İçerik */}
      <div className="hero-content">
        <span className="hero-eyebrow">Dijital Kültür Platformu</span>
        <h1 className="hero-headline">
          <span className="hero-brand-blue">Mavi</span><br />
          <em>Yeniden</em>
        </h1>
        <p className="hero-sub">
          Podcast'ler, sesli kitaplar, şehir tarihi ve kültür&#8209;sanat gündemine dair her şey tek çatı altında.
        </p>
        <div className="hero-actions">
          <Link to="/podcast" className="btn btn-primary">Podcast'i Dinle</Link>
          <Link to="/hakkimizda" className="btn btn-ghost">Bizi Tanı</Link>
        </div>
      </div>

      {/* Slayt göstergesi */}
      <div className="hero-slide-dots">
        {heroSlides.map((_, i) => (
          <span
            key={i}
            className={`hero-slide-dot ${i === bgIndex ? 'active' : ''}`}
            onClick={() => setBgIndex(i)}
          />
        ))}
      </div>

    </header>
  );
}

/* ─── Haberler Slider ─── */
function NewsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="news-slider-section">
      <div className="news-slider-header">
        <h2 className="news-slider-heading">Haberler &amp; Duyurular</h2>
        <div className="news-slider-line" />
      </div>
      <div
        className="news-slider-inner"
        style={{ background: `linear-gradient(135deg, ${slide.color} 0%, hsl(26, 10%, 8%) 100%)` }}
      >
        {slide.img && (
          <div className="news-slider-photo">
            <img src={slide.img} alt={slide.title} className="news-slider-img" />
            <div className="news-slider-photo-overlay" />
          </div>
        )}
        <div className="news-slider-content">
          <span className="news-badge">{slide.badge}</span>
          <h3 className="news-title">{slide.title}</h3>
          <p className="news-desc">{slide.desc}</p>
          {slide.link && (
            <Link to={slide.link} className="news-cta-btn">{slide.linkText}</Link>
          )}
        </div>
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button key={i} className={`slider-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} aria-label={`Slayt ${i + 1}`} />
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

/* ─── Ana Sayfa ─── */
function HomePage() {
  return (
    <>
      <HeroSection />

      <NewsSlider />

      {/* Mavi İçerik & Mavi Proje */}
      <section className="section mavi-icerik-section">
        <div className="container">
          <h2 className="section-title">Mavi İçerik &amp; Mavi Proje</h2>
          <p className="section-subtitle">Dijital dünyaya taşıdığımız kültürel miras ve içerikler</p>
          <div className="mavi-icerik-grid">
            <Link to="/podcast" className="mavi-card mavi-podcast">
              <div className="mavi-card-icon">🎧</div>
              <h3>Mavi Podcast</h3>
              <p>Annelik, kültür, şehir tarihi üzerine derinlikli sohbetler.</p>
              <span className="mavi-card-link">Dinle →</span>
            </Link>
            <Link to="/projeler" className="mavi-card mavi-proje">
              <div className="mavi-card-icon">🚀</div>
              <h3>Mavi Proje</h3>
              <p>Kültürel mirası dijital dünyaya taşıyan özgün projeler.</p>
              <span className="mavi-card-link">Keşfet →</span>
            </Link>
            <Link to="/sesli-kitap" className="mavi-card mavi-ekitap">
              <div className="mavi-card-icon">📖</div>
              <h3>Mavi E-Kitap</h3>
              <p>Seçkin eserlerin sesli arşivi, anında dinlemeye hazır.</p>
              <span className="mavi-card-link">İncele →</span>
            </Link>
            <Link to="/is-birlikcilerimiz" className="mavi-card mavi-isbirligi">
              <div className="mavi-card-icon">🤝</div>
              <h3>Mavi İş Birliği</h3>
              <p>Platformumuzu güçlendiren ortaklar ve iş birlikçiler.</p>
              <span className="mavi-card-link">Gör →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Biz Kimiz Özet */}
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
              <p>Gelecek nesillere kalıcı bir dijital kütüphane bırakmak; dinleyicilerimizi derinlikli podcast'ler, sesli e-kitaplar ve nitelikli içeriklerle buluşturmaktır.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
