const SearchEngine = {
  init(articles, inputElement, resultsContainer) {
    inputElement.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      resultsContainer.innerHTML = '';

      if (term.length < 2) {
        resultsContainer.innerHTML = '<p class="text-muted">اكتب حرفين على الأقل للبحث...</p>';
        return;
      }

      const matching = articles.filter(art => 
        art.title.toLowerCase().includes(term) ||
        art.description.toLowerCase().includes(term) ||
        art.category.toLowerCase().includes(term)
      );

      if (matching.length === 0) {
        resultsContainer.innerHTML = '<p class="text-muted">لم يتم العثور على نتائج تطابق بحثك.</p>';
        return;
      }

      matching.forEach(art => {
        resultsContainer.innerHTML += ArticleEngine.createCardHTML(art);
      });
    });
  }
};