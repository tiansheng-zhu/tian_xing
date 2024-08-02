/**
 * Filters citations by the given tag.
 * 
 * @param {string} tag - The tag to filter citations by.
 */
function filterByTag(tag) {
  // 获取所有引用容器
  var citations = document.querySelectorAll('#citations-list .citation-container');
  citations.forEach(function(citation) {
    var tags = citation.querySelector('.tags');
    // 如果标签存在且包含所选标签，则显示该引用，否则隐藏
    if (tags && tags.textContent.includes(tag)) {
      citation.style.display = 'block';
    } else {
      citation.style.display = 'none';
    }
  });
}
