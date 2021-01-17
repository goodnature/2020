const aspect = 5376/3360
let width = 700
let scale = window.innerWidth / width
let height = scale*width/aspect


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
bg.src = 'images/yellowlogo.png'
bg.style.width = width*scale + 'px'
bg.style.height = (width*scale/aspect)+'px'
bg.style.position = 'absolute'

const pupil5 = document.createElement('img')
root.appendChild(pupil5)
pupil5.src = 'images/pupil5.png'
pupil5.style.width = width*scale+'px'
pupil5.style.height = (width*scale/aspect)+'px'
pupil5.style.position = 'absolute'

const pupil6 = document.createElement('img')
root.appendChild(pupil6)
pupil6.src = 'images/pupil6.png'
pupil6.style.width = width*scale+'px'
pupil6.style.height = (width*scale/aspect)+'px'
pupil6.style.position = 'absolute'

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
    pupil5.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
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
    pupil6.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
  }
}

document.addEventListener('mousemove', handle_move)

window.addEventListener('resize', function () {
  scale = window.innerWidth / width
  height = scale*width/aspect
  root.style.height = height + 'px'
  bg.style.width = width*scale + 'px'
  bg.style.height = (width*scale/aspect)+'px'
  pupil5.style.width = width*scale+'px'
  pupil5.style.height = (width*scale/aspect)+'px'
  pupil6.style.width = width*scale+'px'
  pupil6.style.height = (width*scale/aspect)+'px'
})
