import React from 'react';

function ProjectsPage() {
  const projects = [
    {
      title: 'Mavi Yeniden Podcast Serisi',
      category: 'Podcast',
      description: 'Annelik rolleri, toplumsal değişimler ve kültür sanat üzerine keyifli sohbetler.',
      status: 'Devam Ediyor',
    },
    {
      title: 'Kültür Mirası Ses Arşivi',
      category: 'Kültür & Sanat',
      description: 'Kaybolmaya yüz tutmuş kültürel değerlerin ve yerel anlatıların ses kaydı altına alınması projesi.',
      status: 'Yayında',
    },
    {
      title: 'Tarihi Şehir Hikayeleri',
      category: 'Şehir Tarihi',
      description: 'İzmir, İstanbul ve diğer tarihi şehirlerin sokak sokak hikayelerinin seslendirilmesi.',
      status: 'Yakında',
    },
    {
      title: 'Klasik Eserler Sesli Kitap Projesi',
      category: 'Sesli Kitap',
      description: 'Türk ve dünya edebiyatının seçkin klasiklerinin profesyonel seslendirmenler eşliğinde kitaplaştırılması.',
      status: 'Tasarım Aşamasında',
    },
  ];

  return (
    <section className="section bg-alt" style={{ marginTop: '70px', minHeight: 'calc(100vh - 180px)' }}>
      <div className="container">
        <h2 className="section-title">Projelerimiz</h2>
        <p className="section-subtitle">Mavi Yeniden çatısı altında yürütülen çalışmalar</p>

        <div className="about-grid" style={{ marginTop: '40px' }}>
          {projects.map((proj, idx) => (
            <div className="about-card" key={idx}>
              <span className="news-badge" style={{ background: proj.status === 'Yayında' || proj.status === 'Devam Ediyor' ? '#10b981' : '#f59e0b' }}>
                {proj.status}
              </span>
              <h3 style={{ marginTop: '10px' }}>{proj.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 'bold', marginBottom: '10px' }}>{proj.category}</p>
              <p>{proj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
