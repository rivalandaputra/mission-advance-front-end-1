 // ========================================
 // 1. IMPORT
 // ========================================

import { useState, useEffect } from 'react'

// Import fungsi API
import {
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} from '../services/api/movieService'

// Import data film
import {
  continueWatchingMovies,
  topRatingMovies,
  trendingMovies,
  newReleaseMovies,
} from '../data/movies'

// Import assets
import heroImage from '../assets/moana.jpg'
import moanaLogo from '../assets/logo-moana.png'

// Import komponen
import MyList from './MyList'
import Navbar from './NavbarTemp'
import ContinueWatching from './ContinueWatching'
import MovieCard from './MovieCard'
import MovieSection from './MovieSection'
import Footer from './Footer'


// ========================================
// 2. KOMPONEN HOME
// ========================================

function Home() {

  // ========================================
  // 2.1 STATE
  // ========================================

  const [searchTerm, setSearchTerm] = useState('')
  const [savedMovies, setSavedMovies] = useState([])
  const [isAdding, setIsAdding] = useState(false)


  // ========================================
  // 2.2 GET DATA DARI API
  // ========================================

  
  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies()

        // Mencocokkan data API dengan katalog film lokal.
        const moviesWithPoster = data.map((apiMovie) => {
          const catalogMovie = allMovies.find(
            (movie) =>
              String(movie.movieKey || movie.id) ===
              String(apiMovie.movieKey)
          )

          return {
            ...apiMovie,
            poster: catalogMovie?.poster || apiMovie.poster,
          }
        })

        setSavedMovies(moviesWithPoster)

        console.log('Daftar Saya:', moviesWithPoster)
      } catch (error) {
        console.error('Gagal mengambil Daftar Saya:', error)
      }
    }

    fetchMovies()
  }, [])



  // ========================================
  // 2.3 DATA FILM
  // ========================================

  const allMovies = [
    ...new Map(
      [
        ...continueWatchingMovies,
        ...topRatingMovies,
        ...trendingMovies,
        ...newReleaseMovies,
      ].map((movie) => [
        movie.title.toLowerCase().trim(),
        movie,
      ])
    ).values(),
  ]


  // ========================================
  // 2.4 PENCARIAN FILM
  // ========================================

  const filteredMovies = allMovies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  )

  const isSearching = searchTerm.trim() !== ''


  // ========================================
  // 3. FUNGSI CRUD
  // ========================================

  // CREATE
  // Menambahkan film ke Daftar Saya.
  async function handleAddToList(movie) {
    if (isAdding) return

    const movieKey = movie.movieKey || movie.id

    const alreadySaved = savedMovies.some(
      (savedMovie) =>
        String(savedMovie.movieKey || savedMovie.id) ===
        String(movieKey)
    )

    if (alreadySaved) return

    try {
      setIsAdding(true)

      const newMovie = {
        ...movie,
        movieKey,
        status: 'Belum Ditonton',
      }

      const addedMovie = await addMovie(newMovie)

      setSavedMovies((prevMovies) => [
        ...prevMovies,
        addedMovie,
      ])

      console.log('Film berhasil ditambahkan:', addedMovie)
    } catch (error) {
      console.error('Gagal menambahkan film:', error)
    } finally {
      setIsAdding(false)
    }
  }


  // UPDATE
  // Mengubah status tontonan film.
  async function handleUpdateStatus(movieKey, newStatus) {
    const selectedMovie = savedMovies.find(
      (movie) =>
        String(movie.movieKey || movie.id) ===
        String(movieKey)
    )

    if (!selectedMovie?.id) {
      console.error('ID film tidak ditemukan.')
      return
    }

    try {
      const updatedMovie = await updateMovie(
        selectedMovie.id,
        {
          ...selectedMovie,
          status: newStatus,
        }
      )

      setSavedMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === updatedMovie.id
            ? updatedMovie
            : movie
        )
      )

      console.log('Status film berhasil diperbarui:', updatedMovie)
    } catch (error) {
      console.error('Gagal memperbarui status film:', error)
    }
  }


  // DELETE
  // Menghapus film dari Daftar Saya.
  async function handleRemoveFromList(movieKey) {
    const selectedMovie = savedMovies.find(
      (movie) =>
        String(movie.movieKey || movie.id) ===
        String(movieKey)
    )

    if (!selectedMovie?.id) {
      console.error('ID film tidak ditemukan.')
      return
    }

    try {
      await deleteMovie(selectedMovie.id)

      setSavedMovies((prevMovies) =>
        prevMovies.filter(
          (movie) => movie.id !== selectedMovie.id
        )
      )

      console.log('Film berhasil dihapus.')
    } catch (error) {
      console.error('Gagal menghapus film:', error)
    }
  }


  // ========================================
  // 4. TAMPILAN HALAMAN HOME
  // ========================================

  return (
    <div className="home-page" id="top">

      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main className="home-content">

        {/* 4.1 HERO DAN LANJUT TONTON */}

        {!isSearching && (
          <>
            <section
              className="hero-section"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="hero-overlay">
                <img
                  src={moanaLogo}
                  alt="Moana"
                  className="hero-title-logo"
                />

                <p>
                  Teenage Moana answers the Ocean's call and, for the
                  first time, voyages beyond the reef of her island of
                  Motunui with infamous demigod Maui on an unforgettable
                  journey to restore prosperity to her people.
                </p>

                <div className="hero-buttons">
                  <button
                    type="button"
                    className="hero-button"
                  >
                    Mulai Tonton
                  </button>

                  <button
                    type="button"
                    className="hero-info-button"
                  >
                    ℹ Selengkapnya
                  </button>
                </div>
              </div>
            </section>

            <ContinueWatching
              movies={continueWatchingMovies}
              onAddToList={handleAddToList}
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />
          </>
        )}


        {/* 4.2 HASIL PENCARIAN */}

        {isSearching && (
          <section className="movie-section search-results">
            <h2>Hasil Pencarian</h2>

            {filteredMovies.length > 0 ? (
              <div className="movie-list">
                {filteredMovies.map((movie) => {
                  const movieKey = movie.movieKey || movie.id

                  const isSaved = savedMovies.some(
                    (savedMovie) =>
                      String(savedMovie.movieKey || savedMovie.id) ===
                      String(movieKey)
                  )

                  return (
                    <MovieCard
                      key={movieKey}
                      movie={movie}
                      onAddToList={handleAddToList}
                      onRemoveFromList={handleRemoveFromList}
                      isSaved={isSaved}
                    />
                  )
                })}
              </div>
            ) : (
              <p>Film tidak ditemukan.</p>
            )}
          </section>
        )}


        {/* 4.3 KATEGORI FILM DAN DAFTAR SAYA */}

        {!isSearching && (
          <>
            <MovieSection
              id="series"
              title="Top Rating Film dan Series Hari Ini"
              movies={topRatingMovies}
              onAddToList={handleAddToList}
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />

            <MovieSection
              id="film"
              title="Film Trending"
              movies={trendingMovies}
              onAddToList={handleAddToList}
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />

            <MovieSection
              title="Rilis Baru"
              movies={newReleaseMovies}
              onAddToList={handleAddToList}
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />

            <MyList
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
              onUpdateStatus={handleUpdateStatus}
            />
          </>
        )}

      </main>

      <Footer />

    </div>
  )
}


// ========================================
// 5. EXPORT KOMPONEN
// ========================================

export default Home
