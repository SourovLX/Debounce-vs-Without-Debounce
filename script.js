const DebounceText = document.querySelector('.debounce')
const noDebounceText = document.querySelector('.no-debounce')
const debounceVideo = document.querySelector('.debounce-video video')
const noDebounceVideo = document.querySelector('.no-debounce-video video')
let resizeCount = 0
let resizeCountDebounce = 0

window.addEventListener('resize', () => {
  resizeCount += 1
  noDebounceText.textContent = 'Without Debounce: ' + resizeCount

  noDebounceVideo.src = 'Swiss.mp4'
})

window.addEventListener(
  'resize',
  debounce(function (e) {
    console.log('end of resizing')
    resizeCountDebounce += 1

    DebounceText.textContent = 'With Debounce: ' + resizeCountDebounce

    debounceVideo.src = 'Swiss backpacker.mp4'
  })
)

// Debounce Fuction
function debounce(func) {
  let timer
  return function (event) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(func, 300, event)
  }
}
