// JavaScript로 드롭다운 메뉴 제어
document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle = document.querySelector('.dropdown-toggle')
  const dropdownMenu = document.querySelector('.dropdown-menu')

  // 드롭다운 메뉴 토글
  dropdownToggle.addEventListener('click', (event) => {
    event.preventDefault() // 기본 링크 동작 방지
    dropdownMenu.classList.toggle('show') // 'show' 클래스 토글
  })

  // 다른 곳 클릭 시 드롭다운 메뉴 닫기
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      dropdownMenu.classList.remove('show')
    }
  })
})
