// 修复input输入完内容后点击空白处input不失焦
document.querySelector('body').addEventListener('touchend', function (e) {
  let len = document.querySelectorAll('input').length || 0
  if (len < 1) {
    return
  }
  let tagName = e.target.tagName.toLowerCase()
  if (tagName !== 'input') {
    for (let i = 0; i < len; i++) {
      document.querySelectorAll('input')[i].blur()
    }
  }
})
