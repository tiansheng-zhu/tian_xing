/**
 * Filters citations by the given tag.
 * 
 * @param {string} tag - The tag to filter citations by.
 */
function filterByTag(tag) {
  // 获取搜索框并设置其值为点击的标签
  var searchBox = document.querySelector('.search-box input');
  searchBox.value = `${tag}`;
  
  // 触发搜索功能
  onSearchInput(searchBox);
}