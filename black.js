const aspect = 5376/3360
const width = 900

const root = document.getElementById('eyes')

const bg = document.createElement('img')
root.appendChild(bg)
bg.src = 'images/blacklogo.png'
bg.style.width = '100%'
bg.style.minHeight = '100%'
bg.style.position = 'absolute'

const pupil1 = document.createElement('img')
root.appendChild(pupil1)
pupil1.src = 'images/pupil1.png'
pupil1.style.width = '100%'
pupil1.style.minHeight = '100%'
pupil1.style.position = 'absolute'

const pupil2 = document.createElement('img')
root.appendChild(pupil2)
pupil2.src = 'images/pupil2.png'
pupil2.style.width = '100%'
pupil2.style.minHeight = '100%'
pupil2.style.position = 'absolute'


document.addEventListener('mousemove', function (e) {
  {
    const x = 402
    const y = 192

    let dx = e.clientX - x
    let dy = e.clientY - y
    let n = 0.1*Math.sqrt(dx*dx + dy*dy)
    let bx = Math.abs(dx/n)
    let by = Math.abs(dy/n)
    dx = Math.min(bx, Math.max(-bx, dx))
    dy = Math.min(by, Math.max(-by, dy))
    pupil1.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
  }

  {
    const x = 352
    const y = 192

    let dx = e.clientX - x
    let dy = e.clientY - y
    let n = 0.1*Math.sqrt(dx*dx + dy*dy)
    let bx = Math.abs(dx/n)
    let by = Math.abs(dy/n)
    dx = Math.min(bx, Math.max(-bx, dx))
    dy = Math.min(by, Math.max(-by, dy))
    pupil2.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
  }
})
