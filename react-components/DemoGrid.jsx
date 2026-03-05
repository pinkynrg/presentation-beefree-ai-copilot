import { useState } from 'react'

export default function DemoGrid() {
  const [zoomedIframe, setZoomedIframe] = useState(null)
  const [hoveredButton, setHoveredButton] = useState(null)

  const toggleZoom = (index) => {
    setZoomedIframe((prev) => (prev === index ? null : index))
  }

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#000000',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: '10px',
      padding: '10px',
      boxSizing: 'border-box',
    }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            overflow: 'hidden',
            borderRadius: '4px',
            position: 'relative',
            display: zoomedIframe !== null && zoomedIframe !== i ? 'none' : 'block',
            gridColumn: zoomedIframe === i ? '1 / 3' : 'auto',
            gridRow: zoomedIframe === i ? '1 / 3' : 'auto',
          }}
        >
          <iframe
            src="https://beefree.io/app/index.html"
            style={{
              width: zoomedIframe === i ? '180%' : '200%',
              height: zoomedIframe === i ? '180%' : '200%',
              border: 'none',
              transform: zoomedIframe === i ? 'scale(0.56)' : 'scale(0.5)',
              transformOrigin: '0 0',
            }}
          />
          <button
            onClick={() => toggleZoom(i)}
            onMouseEnter={() => setHoveredButton(i)}
            onMouseLeave={() => setHoveredButton(null)}
            title={zoomedIframe === i ? 'Exit fullscreen' : 'Fullscreen'}
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '5px',
              width: '20px',
              height: '20px',
              background: 'rgba(0, 0, 0, 0.7)',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '10px',
              color: 'white',
              transition: 'all 0.3s ease',
              zIndex: 1000,
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
              opacity: hoveredButton === i ? '1' : '0.15',
            }}
          >
            {zoomedIframe === i ? '✕' : '⛶'}
          </button>
        </div>
      ))}
    </div>
  )
}
