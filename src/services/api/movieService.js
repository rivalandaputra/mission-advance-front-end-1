
import axios from 'axios'

// ========================================
// 1. KONFIGURASI AXIOS
// Mengatur koneksi ke MockAPI.
// ========================================

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/movies`,
})

// ========================================
// 2. GET
// Mengambil seluruh data film dari API.
// ========================================

export const getMovies = async () => {
  const response = await api.get('/')
  return response.data
}

// ========================================
// 3. ADD
// Menambahkan data film baru ke API.
// ========================================

export const addMovie = async (movieData) => {
  const response = await api.post('/', movieData)
  return response.data
}

// ========================================
// 4. UPDATE
// Memperbarui data film berdasarkan ID.
// ========================================

export const updateMovie = async (id, movieData) => {
  const response = await api.put(`/${id}`, movieData)
  return response.data
}

// ========================================
// 5. DELETE
// Menghapus data film berdasarkan ID.
// ========================================

export const deleteMovie = async (id) => {
  const response = await api.delete(`/${id}`)
  return response.data
}
