import React from 'react';
import bizKimizImg from '../assets/biz_kimiz.jpeg';

function AboutPage() {
  return (
    <section className="section bg-alt" style={{ marginTop: '70px', minHeight: 'calc(100vh - 180px)' }}>
      <div className="container">
        <h2 className="section-title">Hakkımızda</h2>
        <p className="section-subtitle">Mavi Yeniden'in hikayesi ve kültürel yolculuğu</p>

        {/* ── Biz Kimiz — Fotoğraflı Bölüm ── */}
        <div className="biz-kimiz-block">
          <div className="biz-kimiz-photo-wrap">
            <img src={bizKimizImg} alt="Biz Kimiz — Mavi Yeniden Ekibi" className="biz-kimiz-photo" />
            <div className="biz-kimiz-photo-badge">Mavi Yeniden Ekibi</div>
          </div>
          <div className="biz-kimiz-text">
            <h3 className="biz-kimiz-heading">Biz Kimiz?</h3>
            <p>
              Mavi Yeniden, kültürel mirası, şehir tarihini, edebiyatı ve sanatsal içerikleri dijital dünyaya entegre eden yenilikçi bir ses arşiv platformudur. Amacımız, geçmişin zengin birikimini ve bugünün yaratıcı seslerini modern dijital teknolojiler aracılığıyla geniş kitlelere ulaştırmaktır.
            </p>
            <p>
              Platformumuz bünyesinde yayınlanan derinlikli podcast serileri, özenle hazırlanan sesli e-kitaplar, şehirlerin gizli kalmış tarihi dokularına ışık tutan araştırmalar ve güncel kültür-sanat içerikleriyle dinleyicilerimize zengin bir entelektüel kütüphane sunuyoruz.
            </p>
            <p>
              İçeriklerimizi hazırlarken bilimsel doğruluktan, sanatsal estetikten ve kaliteden ödün vermiyor; geleceğe kalıcı, dinlenebilir ve erişilebilir bir arşiv bırakmayı hedefliyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
