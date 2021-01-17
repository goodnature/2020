const aspect = 5376/3360
let width = 700
let scale = window.innerWidth / width
let height = scale*width/aspect

document.body.style.backgroundColor = ('#00cc63')
const root = document.getElementById('eyes')
root.style.overflow = 'hidden'
root.style.position = 'fixed'
root.style.top = '50%'
root.style.left = '50%'
root.style.transform = 'translate(-50%, -50%)'
root.style.width = '100%'
root.style.height = height + 'px'

const bg = document.createElement('img')
root.appendChild(bg)
bg.src = 'images/creamlogo.png'
bg.style.width = width*scale + 'px'
bg.style.height = (width*scale/aspect)+'px'
bg.style.position = 'absolute'

const pupil3 = document.createElement('img')
root.appendChild(pupil3)
pupil3.src = 'images/pupil3.png'
pupil3.style.width = width*scale+'px'
pupil3.style.height = (width*scale/aspect)+'px'
pupil3.style.position = 'absolute'

const pupil4 = document.createElement('img')
root.appendChild(pupil4)
pupil4.src = 'images/pupil4.png'
pupil4.style.width = width*scale+'px'
pupil4.style.height = (width*scale/aspect)+'px'
pupil4.style.position = 'absolute'

function handle_move (e) {
  {
    const x = 394*scale
    const y = 184*scale - height*0.5 + window.innerHeight*0.5

    let dx = e.clientX - x
    let dy = e.clientY - y
    let n = 0.1*Math.sqrt(dx*dx + dy*dy)/scale
    let bx = Math.abs(dx/n)
    let by = Math.abs(dy/n)
    dx = Math.min(bx, Math.max(-bx, dx))
    dy = Math.min(by, Math.max(-by, dy))
    pupil3.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
  }

  {
    const x = 344*scale
    const y = 184*scale - height*0.5 + window.innerHeight*0.5

    let dx = e.clientX - x
    let dy = e.clientY - y
    let n = 0.1*Math.sqrt(dx*dx + dy*dy)/scale
    let bx = Math.abs(dx/n)
    let by = Math.abs(dy/n)
    dx = Math.min(bx, Math.max(-bx, dx))
    dy = Math.min(by, Math.max(-by, dy))
    pupil4.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
  }
}

document.addEventListener('mousemove', handle_move)

window.addEventListener('resize', function () {
  scale = window.innerWidth / width
  height = scale*width/aspect
  root.style.height = height + 'px'
  bg.style.width = width*scale + 'px'
  bg.style.height = (width*scale/aspect)+'px'
  pupil3.style.width = width*scale+'px'
  pupil3.style.height = (width*scale/aspect)+'px'
  pupil4.style.width = width*scale+'px'
  pupil4.style.height = (width*scale/aspect)+'px'
})
