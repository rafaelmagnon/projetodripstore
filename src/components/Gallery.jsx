import { useState } from 'react'

export default function Gallery({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images.length) return null

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="gallery" style={{ position: 'relative', width: '100%', overflow: 'hidden', marginBottom: '40px' }}>
      {/* Imagem Atual preenchendo o container */}
      <div className="gallery__item" style={{ width: '100%' }}>
        <img 
          src={images[currentIndex].image} 
          alt={`Banner ${currentIndex + 1}`} 
          style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} 
        />
      </div>

      {/* Botão Anterior */}
      <button 
        onClick={handlePrev}
        style={{
          position: 'absolute',
          top: '50%',
          left: '30px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          border: 'none',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          borderRadius: '50%',
          fontSize: '18px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ❮
      </button>

      {/* Botão Próximo */}
      <button 
        onClick={handleNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '30px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          border: 'none',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
          borderRadius: '50%',
          fontSize: '18px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        ❯
      </button>

      {/* Indicadores (Bolinhas) */}
      <div style={{ position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentIndex === index ? '#ff2d55' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  )
}