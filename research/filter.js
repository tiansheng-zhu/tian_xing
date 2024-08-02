function filterByTag(tag) {
  var citations = document.querySelectorAll('#citations-list .citation-container');
  citations.forEach(function(citation) {
    var tags = citation.querySelector('.tags');
    if (tags && tags.textContent.includes(tag)) {
      citation.style.display = 'block';
    } else {
      citation.style.display = 'none';
    }
  });
}
