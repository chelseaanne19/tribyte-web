export const POSTCARD_WIDTH = 1500
export const POSTCARD_HEIGHT = 1000

// One renderer serves both the visible preview and the exported PNG.
export function drawPostcard(canvas: HTMLCanvasElement, image: HTMLImageElement | null, caption: string) {
  const context = canvas.getContext('2d')
  if (!context) return
  const palette = getComputedStyle(document.documentElement)
  const paper = palette.getPropertyValue('--color-paper').trim()
  const green = palette.getPropertyValue('--color-stamp-green').trim()
  canvas.width = POSTCARD_WIDTH
  canvas.height = POSTCARD_HEIGHT
  context.fillStyle = paper
  context.fillRect(0, 0, POSTCARD_WIDTH, POSTCARD_HEIGHT)
  const rust = palette.getPropertyValue('--color-vintage-rust').trim()
  const blue = palette.getPropertyValue('--color-postmark-blue').trim()
  // Warm print variation stays in the frame, clear of the user's photo.
  const ageing = context.createRadialGradient(0, 0, 0, 0, 0, POSTCARD_WIDTH)
  ageing.addColorStop(0, rust)
  ageing.addColorStop(1, paper)
  context.globalAlpha = 0.08
  context.fillStyle = ageing
  context.fillRect(0, 0, POSTCARD_WIDTH, POSTCARD_HEIGHT)
  context.globalAlpha = 1
  context.strokeStyle = green
  context.lineWidth = 3
  context.strokeRect(22, 22, POSTCARD_WIDTH - 44, POSTCARD_HEIGHT - 44)
  context.lineWidth = 1
  context.strokeRect(32, 32, POSTCARD_WIDTH - 64, POSTCARD_HEIGHT - 64)

  // Original three-leaf ornaments; no third-party logos or artwork.
  const clover = (x: number, y: number, size: number) => {
    context.fillStyle = green
    for (const [dx, dy] of [[-0.55, 0], [0.55, 0], [0, -0.65]]) {
      context.beginPath()
      context.arc(x + dx * size, y + dy * size, size * 0.6, 0, Math.PI * 2)
      context.fill()
    }
    context.beginPath()
    context.moveTo(x, y)
    context.quadraticCurveTo(x + size * 0.3, y + size, x - size * 0.2, y + size * 1.3)
    context.stroke()
  }
  clover(45, 45, 10)
  clover(POSTCARD_WIDTH - 45, POSTCARD_HEIGHT - 45, 10)
  context.fillStyle = green
  context.font = 'italic 56px Georgia, serif'
  context.fillText('Greetings from Ireland', 60, 112)
  context.fillStyle = rust
  context.font = '16px Georgia, serif'
  context.fillText('A LITTLE NOTE FROM YOUR IRISH CHAPTER', 63, 140)

  // A fictional decorative cancellation mark, not official Irish postage.
  context.save()
  context.translate(1320, 92)
  context.rotate(-0.12)
  context.strokeStyle = blue
  context.fillStyle = blue
  context.lineWidth = 2
  context.beginPath()
  context.arc(0, 0, 40, 0, Math.PI * 2)
  context.stroke()
  context.font = '12px Georgia, serif'
  context.textAlign = 'center'
  context.fillText('AON SCÉAL', 0, -12)
  context.fillText('IRELAND', 0, 22)
  context.font = '24px Georgia, serif'
  context.fillText('✳', 0, 10)
  for (let row = 0; row < 3; row++) {
    context.beginPath()
    context.moveTo(-145, row * 10 - 10)
    context.bezierCurveTo(-110, row * 10 - 22, -85, row * 10 + 3, -48, row * 10 - 10)
    context.stroke()
  }
  context.restore()
  context.strokeStyle = green
  context.fillStyle = green
  context.lineWidth = 2

  const frame = { x: 60, y: 155, width: 1380, height: 620 }
  if (image) {
    const scale = Math.max(frame.width / image.naturalWidth, frame.height / image.naturalHeight)
    const width = frame.width / scale
    const height = frame.height / scale
    context.drawImage(image, (image.naturalWidth - width) / 2, (image.naturalHeight - height) / 2,
      width, height, frame.x, frame.y, frame.width, frame.height)
  } else {
    context.strokeRect(frame.x, frame.y, frame.width, frame.height)
    context.font = '32px Georgia, serif'
    context.textAlign = 'center'
    context.fillText('Your photo goes here', POSTCARD_WIDTH / 2, 475)
    context.textAlign = 'left'
  }

  context.font = '30px Georgia, serif'
  // Wrap by character as well as word boundaries so long unbroken captions fit.
  const lines: string[] = []
  let line = ''
  for (const character of caption.replace(/\s+/g, ' ').trim()) {
    if (context.measureText(line + character).width > frame.width) {
      lines.push(line.trimEnd())
      line = ''
    }
    line += character
  }
  if (line) lines.push(line.trimEnd())
  lines.forEach((text, index) => context.fillText(text, 60, 835 + index * 38))
  context.font = '24px Georgia, serif'
  context.fillText('TriByte · Aon Scéal', 60, 950)
  context.textAlign = 'right'
  context.font = 'italic 22px Georgia, serif'
  context.fillText('A day worth keeping.', 1440, 950)
  context.textAlign = 'left'
}
