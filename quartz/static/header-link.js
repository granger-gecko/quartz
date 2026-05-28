// Make the site title and banner link to atrestletable.com
document.addEventListener('nav', () => {
  const titleLink = document.querySelector('h2.page-title a')
  if (titleLink) {
    titleLink.href = 'https://atrestletable.com'
    titleLink.removeAttribute('target')
  }

  const body = document.getElementById('quartz-body')
  if (body && !body.querySelector('.banner-link')) {
    const link = document.createElement('a')
    link.href = 'https://atrestletable.com'
    link.className = 'banner-link'
    link.setAttribute('aria-label', 'Visit atrestletable.com')
    link.style.cssText = 'position:absolute;top:0;left:0;right:0;height:180px;z-index:3;display:block;'
    body.insertBefore(link, body.firstChild)
  }
})
