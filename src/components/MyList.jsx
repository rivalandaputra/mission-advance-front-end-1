// ========================================
// 1. KOMPONEN DAFTAR SAYA
// Menampilkan seluruh film yang tersimpan dan mengelola status tontonan.
// ========================================

function MyList({
  savedMovies,
  onRemoveFromList,
  onUpdateStatus,
}) {
  // ========================================
  // 2. TAMPILAN DAFTAR SAYA
  // Menampilkan pesan kosong atau daftar kartu film.
// ========================================

  return (
    <section className="movie-section" id="daftar-saya">
      <h2>Daftar Saya</h2>

      {/* Menampilkan pesan jika daftar film kosong */}
      {savedMovies.length === 0 ? (
        <p className="empty-list">
          Belum ada film yang kamu simpan.
        </p>
      ) : (
        <div className="movie-list">
          {savedMovies.map((movie) => {
            // Menentukan identitas film.
            const movieKey = movie.movieKey || movie.id

            // Menentukan status tontonan film.
            const status = movie.status || 'Belum Ditonton'

            // Mengubah status menjadi format class CSS.
            const statusClass = status
              .toLowerCase()
              .replaceAll(' ', '-')

            return (
              <div className="movie-card" key={movie.id}>
                {/* Poster film */}
                <img
                  src={movie.poster || '/placeholder.png'}
                  alt={movie.title}
                />

                {/* Informasi film */}
                <div className="movie-card-info">
                  <h3>{movie.title}</h3>

                  {movie.year && <p>{movie.year}</p>}

                  {/* Badge untuk menampilkan status tontonan */}
                  <span className={`status-badge ${statusClass}`}>
                    {status}
                  </span>

                  {/* Pilihan untuk mengubah status tontonan */}
                  <label htmlFor={`status-${movieKey}`}>
                    Status Tontonan
                  </label>

                  <select
                    id={`status-${movieKey}`}
                    value={status}
                    onChange={(event) =>
                      onUpdateStatus(movieKey, event.target.value)
                    }
                  >
                    <option value="Belum Ditonton">
                      Belum Ditonton
                    </option>

                    <option value="Sedang Ditonton">
                      Sedang Ditonton
                    </option>

                    <option value="Selesai Ditonton">
                      Selesai Ditonton
                    </option>
                  </select>

                  {/* Tombol untuk menghapus film dari Daftar Saya */}
                  <button
                    type="button"
                    className="remove-list-button"
                    onClick={() => onRemoveFromList(movieKey)}
                  >
                    Hapus dari Daftar
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}


// ========================================
// 3. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh Home.jsx.
// ========================================

export default MyList
