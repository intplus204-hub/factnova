const ArticleEngine = {
  async fetchAll() {
    try {
      const response = await fetch('./data/articles.json');
      if (!response.ok) throw new Error('تعذر تحميل قاعدة البيانات المحلية.');
      return await response.json();
    } catch (err) {
      console.error('خطأ في جلب البيانات:', err);
      return [];
    }
  },

  createCardHTML(article) {
    return `
      <article class="article-card fade-in" tabindex="0" onclick="location.href='article.html?id=${article.id}'">
        <div class="card-img-wrapper">
          <img 
            src="${article.image}" 
            alt="${article.title}" 
            loading="lazy" 
            onerror="this.onerror=null; this.src='assets/images/default.webp';"
          >
        </div>
        <div class="card-content">
          <span class="badge">${article.category}</span>
          <h3 class="card-title">${article.title}</h3>
          <p class="card-desc">${article.description}</p>
          <div class="card-meta">
            <span>الكاتب: ${article.author}</span>
            <span>وقت القراءة: ${article.readTime}</span>
          </div>
        </div>
      </article>
    `;
  }
};