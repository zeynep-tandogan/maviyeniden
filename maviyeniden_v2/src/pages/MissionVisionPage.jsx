import React from 'react';

function MissionVisionPage() {
  return (
    <section className="section bg-alt" style={{ marginTop: '70px', minHeight: 'calc(100vh - 180px)' }}>
      <div className="container">
        <h2 className="section-title">Misyonumuz &amp; Vizyonumuz</h2>
        <p className="section-subtitle">Hedeflerimiz ve geleceğe bakışımız</p>

        <div className="about-grid" style={{ marginTop: '40px' }}>
          <div className="about-card">
            <h3>Misyonumuz</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Kültür, sanat, edebiyat ve tarihi sesin gücüyle buluşturarak herkes için erişilebilir, zengin ve nitelikli bir dijital ses kütüphanesi oluşturmak. Toplumun kültürel hafızasını korumak, gelecek nesillere aktarmak ve dinleyicilerimizin entelektüel dünyalarına katkıda bulunmaktır.
            </p>
          </div>
          
          <div className="about-card">
            <h3>Vizyonumuz</h3>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              Dijital ses yayıncılığı ve kültürel arşivcilik alanında Türkiye'nin ve dünyanın en saygın, güvenilir ve yenilikçi platformlarından biri olmak; ses teknolojilerini en üst düzeyde kullanarak benzersiz bir dinleme deneyimi sunmaktır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionPage;
