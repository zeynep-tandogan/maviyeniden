import React from 'react';

function AboutPage() {
  return (
    <section className="section bg-alt" style={{ marginTop: '70px', minHeight: 'calc(100vh - 180px)' }}>
      <div className="container">
        <h2 className="section-title">Hakkımızda</h2>
        <p className="section-subtitle">Mavi Yeniden'in hikayesi ve kültürel yolculuğu</p>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.1rem', lineHeight: '1.8' }}>
          <p>
            Mavi Yeniden, kültürel mirası, şehir tarihini, edebiyatı ve sanatsal içerikleri dijital dünyaya entegre eden yenilikçi bir ses arşiv platformudur. Amacımız, geçmişin zengin birikimini ve bugünün yaratıcı seslerini modern dijital teknolojiler aracılığıyla geniş kitlelere ulaştırmaktır.
          </p>
          <p>
            Platformumuz bünyesinde yayınlanan derinlikli podcast serileri, özenle hazırlanan sesli e-kitaplar, şehirlerin gizli kalmış tarihi dokularına ışık tutan araştırmalar ve güncel kültür sanat içerikleriyle, dinleyicilerimize zengin bir entelektüel kütüphane sunuyoruz.
          </p>
          <p>
            İçeriklerimizi hazırlarken bilimsel doğruluktan, sanatsal estetikten ve kaliteden ödün vermiyor; geleceğe kalıcı, dinlenebilir ve erişilebilir bir arşiv bırakmayı hedefliyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
