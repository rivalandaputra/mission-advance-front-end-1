// ========================================
// 1. IMPORT
// Mengimpor React Hook dan CSS yang digunakan.
// ========================================

import { useRef } from 'react'
import './Home.css'


// ========================================
// 2. KOMPONEN LANJUT TONTON
// Menampilkan film yang sedang ditonton.
// ========================================

function ContinueWatching({
  movies,
  onAddToList,
  savedMovies,
  onRemoveFromList,
}) {
  // Referensi untuk mengakses elemen carousel film.
  const sliderRef = useRef(null)


  // ========================================
  // 3. FUNGSI SCROLL CAROUSEL
  // Menggeser daftar film ke kiri atau kanan.
  // ========================================

  function scrollMovies(direction) {
    if (!sliderRef.current) return

    sliderRef.current.scrollBy({
      left: direction * 320,
      behavior: 'smooth',
    })
  }


  // ========================================
  // 4. TAMPILAN KOMPONEN
  // Menampilkan judul, kartu film, progress bar, dan tombol navigasi.
  // ========================================

  return (
    <section className="continue-section">
      <h2>Lanjut Tonton</h2>

      <div className="continue-container">
        {/* Tombol untuk menggeser ke kiri */}
        <button
          type="button"
          className="continue-arrow continue-prev"
          onClick={() => scrollMovies(-1)}
          aria-label="Film sebelumnya"
        >
          &#10094;
        </button>

        {/* Daftar kartu film */}
        <div className="continue-list" ref={sliderRef}>
          {movies.map((movie) => {
            // Menentukan identitas film menggunakan movieKey atau id.
            const movieKey = movie.movieKey || movie.id

            // Memeriksa apakah film sudah tersimpan di Daftar Saya.
            const isSaved = savedMovies.some(
              (savedMovie) =>
                String(savedMovie.movieKey || savedMovie.id) ===
                String(movieKey)
            )

            return (
              <div
                className="continue-card"
                key={movieKey}
              >
                {/* Poster film */}
                <img
                  src={movie.poster}
                  alt={movie.title}
                />

                {/* Informasi film */}
                <div className="continue-info">
                  <h3>{movie.title}</h3>

                  <p>{movie.progress}% selesai</p>

                  {/* Progress bar untuk menunjukkan perkembangan tontonan */}
                  <div className="progress-bar">
                    <div
                      className="progress-value"
                      style={{
                        width: `${movie.progress}%`,
                      }}
                    />
                  </div>

                  {/* Tombol untuk menambah atau menghapus film dari Daftar Saya */}
                  <button
                    type="button"
                    className="my-list-button"
                    onClick={() => {
                      if (isSaved) {
                        onRemoveFromList(movieKey)
                      } else {
                        onAddToList(movie)
                      }
                    }}
                  >
                    {isSaved
                      ? '✓ Sudah Ditambahkan'
                      : '+ Daftar Saya'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tombol untuk menggeser ke kanan */}
        <button
          type="button"
          className="continue-arrow continue-next"
          onClick={() => scrollMovies(1)}
          aria-label="Film berikutnya"
        >
          &#10095;
        </button>
      </div>
    </section>
  )
}


// ========================================
// 5. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh Home.jsx.
// ========================================

export default ContinueWatching
