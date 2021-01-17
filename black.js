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
bg.src = 'images/blacklogo.png'
bg.style.width = width*scale + 'px'
bg.style.height = (width*scale/aspect)+'px'
bg.style.position = 'absolute'

const pupil1 = document.createElement('img')
root.appendChild(pupil1)
pupil1.src = 'images/pupil1.png'
pupil1.style.width = width*scale+'px'
pupil1.style.height = (width*scale/aspect)+'px'
pupil1.style.position = 'absolute'

const pupil2 = document.createElement('img')
root.appendChild(pupil2)
pupil2.src = 'images/pupil2.png'
pupil2.style.width = width*scale+'px'
pupil2.style.height = (width*scale/aspect)+'px'
pupil2.style.position = 'absolute'

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
    pupil1.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
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
    pupil2.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)'
  }
}

document.addEventListener('mousemove', handle_move)

window.addEventListener('resize', function () {
  scale = window.innerWidth / width
  height = scale*width/aspect
  root.style.height = height + 'px'
  bg.style.width = width*scale + 'px'
  bg.style.height = (width*scale/aspect)+'px'
  pupil1.style.width = width*scale+'px'
  pupil1.style.height = (width*scale/aspect)+'px'
  pupil2.style.width = width*scale+'px'
  pupil2.style.height = (width*scale/aspect)+'px'
})
