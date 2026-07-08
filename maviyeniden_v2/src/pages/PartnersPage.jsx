import React from 'react';

function PartnersPage() {
  const partners = [
    {
      name: 'Kültür ve Sanat Vakfı',
      type: 'Ana Sponsor',
      description: 'Platformumuzun kültür-sanat etkinlikleri ve arşiv faaliyetlerine destek vermektedir.',
    },
    {
      name: 'Şehir Araştırmaları Merkezi',
      type: 'İçerik Ortağı',
      description: 'Şehir tarihi bölümümüz için veri, araştırma ve görsel arşiv desteği sağlamaktadır.',
    },
    {
      name: 'Sesli Kütüphane Derneği',
      type: 'Sosyal Sorumluluk Ortağı',
      description: 'Görme engelli bireylere yönelik hazırlanan sesli e-kitaplarımızın dağıtımında iş birliği yapmaktayız.',
    },
  ];

  return (
    <section className="section bg-alt" style={{ marginTop: '70px', minHeight: 'calc(100vh - 180px)' }}>
      <div className="container">
        <h2 className="section-title">İş Birlikçilerimiz</h2>
        <p className="section-subtitle">Mavi Yeniden'e katkı sağlayan ve güç katan ortaklarımız</p>

        <div className="about-grid" style={{ marginTop: '40px' }}>
          {partners.map((partner, idx) => (
            <div className="about-card" key={idx}>
              <span className="news-badge" style={{ background: 'var(--accent)' }}>
                {partner.type}
              </span>
              <h3 style={{ marginTop: '10px' }}>{partner.name}</h3>
              <p>{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersPage;
