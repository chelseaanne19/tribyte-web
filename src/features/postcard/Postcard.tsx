import { useEffect, useRef, useState, type ChangeEvent, type Ref } from 'react'
import { drawPostcard, POSTCARD_HEIGHT, POSTCARD_WIDTH } from './drawPostcard'
import './Postcard.css'

export function Postcard({ active, headingRef }: { active: boolean; headingRef?: Ref<HTMLHeadingElement> }) {
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [caption, setCaption] = useState('')
  const [fileName, setFileName] = useState('')
  const [busy, setBusy] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const selectionId = useRef(0)

  useEffect(() => {
    if (active && canvasRef.current) drawPostcard(canvasRef.current, image, caption)
  }, [active, image, caption])

  async function selectPhoto(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    const picker = event.currentTarget
    if (!file) return
    const request = ++selectionId.current
    setError('')
    setMessage('')
    setBusy(false)
    if (!/\.(jpe?g|png|webp)$/i.test(file.name) || (file.type && !['image/jpeg', 'image/png', 'image/webp'].includes(file.type))) {
      picker.value = ''
      setError('Choose a JPEG, PNG or WebP photo. For HEIC/HEIF, save a JPEG copy first. Your previous photo is unchanged.')
      return
    }
    if (file.size > 20 * 1024 * 1024) {
      picker.value = ''
      setError('This photo is too large. Choose a photo smaller than 20 MB. Your previous photo is unchanged.')
      return
    }
    setBusy(true)
    const url = URL.createObjectURL(file)
    try {
      const photo = new Image()
      photo.src = url
      await photo.decode()
      if (request !== selectionId.current) return
      if (!photo.naturalWidth || !photo.naturalHeight || photo.naturalWidth * photo.naturalHeight > 40_000_000) {
        throw new Error('image-size')
      }
      setImage(photo)
      setFileName(file.name)
      setMessage('Photo ready. Check the centre crop in your preview.')
    } catch {
      if (request === selectionId.current) {
        picker.value = '' // Permit selecting the same file again after a decode error.
        setError('This photo could not be opened or is too large to process. Try a smaller JPEG, PNG or WebP. Your previous photo is unchanged.')
      }
    } finally {
      URL.revokeObjectURL(url)
      if (request === selectionId.current) setBusy(false)
    }
  }

  function download() {
    const canvas = canvasRef.current
    if (!image || !canvas || busy || exporting) return
    setError('')
    setMessage('')
    if (!canvas.getContext('2d')) {
      setError('Your browser cannot create this postcard. Try a current browser with canvas support.')
      return
    }
    setExporting(true)
    try {
      drawPostcard(canvas, image, caption)
      canvas.toBlob((blob) => {
        setExporting(false)
        if (!blob) {
          setError('The PNG could not be created. Please try again.')
          return
        }
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'tribyte-greetings-from-ireland.png'
        document.body.append(link)
        link.click()
        link.remove()
        // Give mobile browsers time to start reading the download.
        window.setTimeout(() => URL.revokeObjectURL(url), 60_000)
        setMessage('PNG ready. Check your downloads; if it opens in a new tab, save the image there. You can keep editing below.')
      }, 'image/png')
    } catch {
      setExporting(false)
      setError('The PNG could not be created. Please try again or use another browser.')
    }
  }

  return (
    <section hidden={!active} className="postcard" aria-labelledby="postcard-title">
      <a href="#top">← Back to home</a>

      <h1 id="postcard-title" ref={headingRef} tabIndex={-1}>Make a postcard</h1>
      <div className="postcard-layout">
        <div className="postcard-controls">
          <h2>1. Choose your photo</h2>
          <input id="postcard-photo" type="file" accept="image/jpeg,image/png,image/webp,.jpg,.jpeg,.png,.webp" onChange={selectPhoto} aria-label="Photo from your device. JPEG, PNG or WebP; maximum 20 MB and 40 megapixels. HEIC must be converted to JPEG." />
          {fileName && <p className="postcard-filename">Selected: {fileName}</p>}
          <h2>2. Add a caption</h2>
          <textarea id="postcard-caption" maxLength={120} rows={3} value={caption} onChange={(event) => { setCaption(event.target.value); setMessage('') }} aria-label="Caption, optional, maximum 120 characters" />
          <p role="status">{busy ? 'Opening your photo…' : ''}</p>
        </div>
        <figure className="postcard-preview">
          <canvas ref={canvasRef} width={POSTCARD_WIDTH} height={POSTCARD_HEIGHT} role="img" aria-label={`Postcard preview: Greetings from Ireland. ${image ? 'Your selected photo, centre-cropped.' : 'No photo selected.'}${caption ? ` Caption: ${caption}` : ''}`}>
            Postcard preview requires canvas support. Choose a browser that supports HTML canvas to create and download your postcard.
          </canvas>
        </figure>
      </div>
      <div className="postcard-download">
        <h2>3. Check &amp; download</h2>
        <button type="button" className="button button-primary" disabled={!image || busy || exporting} onClick={download}>
          {exporting ? 'Creating PNG…' : 'Download PNG'}
        </button>
        {!image && <p className="postcard-help">Choose a photo to enable download.</p>}
        <p role="status">{message}</p>
      </div>
      {error && <p role="alert" className="postcard-error">{error}</p>}
      <p className="postcard-privacy">Your photo stays in this browser—no upload. Edits stay while you explore the site, but clear when you reload or close the page.</p>
    </section>
  )
}
