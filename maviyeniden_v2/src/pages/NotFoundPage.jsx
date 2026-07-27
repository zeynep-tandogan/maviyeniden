import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section not-found-section">
      <div className="container not-found-container">
        <div className="not-found-card">
          <div className="not-found-badge">Hata</div>
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Sayfa Bulunamadı</h2>
          <p className="not-found-desc">
            Aradığınız sayfa kaldırılmış, adı değiştirilmiş veya geçici olarak kullanım dışı bırakılmış olabilir.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
