# CHILL - Movie Streaming App

A movie streaming website built with React JS as part of the Harisenin Full Stack Web Development Bootcamp — Mission Advance Front End 1.

CHILL allows users to explore movies, search for their favorite titles, and manage their personal watchlist with different viewing statuses. This project integrates Axios and MockAPI to implement CRUD operations using a REST API.

## Preview

**CHILL Movie App** is a streaming platform interface featuring movie categories, continue watching, and a personal watchlist integrated with MockAPI.

## Features

- **Login & Register** — User authentication interface.
- **Movie Categories** — Browse movies based on different categories.
- **Continue Watching** — Display movies with their viewing progress.
- **Search Movies** — Search movies by title.
- **My List** — Add and remove movies from a personal watchlist.
- **Watch Status** — Update movie status:
  - Belum Ditonton
  - Sedang Ditonton
  - Selesai Ditonton
- **REST API Integration** — Retrieve and manage watchlist data using MockAPI.
- **CRUD Operations** — Create, Read, Update, and Delete watchlist data through Axios.
- **Local Storage** — Store user registration data in the browser.
- **Responsive Design** — Optimized for desktop and mobile screens.

## Technologies Used

- React JS
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Axios
- MockAPI
- Vite
- Browser Local Storage
- Git & GitHub

## React Concepts Implemented

This project implements several React concepts and API integration techniques:

- **useState** — Manage application states.
- **useEffect** — Fetch data from the API when the component is mounted.
- **Array of Objects** — Store and manage movie data.
- **Axios** — Handle HTTP requests to the REST API.
- **REST API** — Integrate the application with MockAPI.
- **CRUD Operations** — Implement GET, POST, PUT, and DELETE requests.
- **Props** — Share data and functions between components.
- **Array Methods** — Use `map()`, `filter()`, and `some()` to manage movie data.
- **Async/Await** — Handle asynchronous API requests.
- **React Router** — Handle navigation between pages.
- **Local Storage** — Persist user registration data in the browser.

## API Integration

This project uses **MockAPI** as a fake REST API to manage the user's personal watchlist.

| HTTP Method | Operation | Description |
|---|---|---|
| GET | Read | Retrieve watchlist data |
| POST | Create | Add a movie to My List |
| PUT | Update | Update movie viewing status |
| DELETE | Delete | Remove a movie from My List |

The movie catalog is managed using local JavaScript data, while personal watchlist data is stored and managed through MockAPI.

## Project Structure

```text
mission-advance-front-end-1/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Auth.css
│   │   ├── ContinueWatching.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.css
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieSection.jsx
│   │   ├── MyList.jsx
│   │   ├── NavbarTemp.jsx
│   │   └── Register.jsx
│   ├── data/
│   │   └── movies.js
│   ├── services/
│   │   └── api/
│   │       └── movieService.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── README.md
```

## Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/rivalandaputra/mission-advance-front-end-1.git
```

**2. Navigate to the project folder**

```bash
cd mission-advance-front-end-1
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure Environment Variables**

Create a `.env` file in the root project directory and add the following configuration:

```env
VITE_API_URL=https://6b003d627fc363ccff09f64f.mockapi.io
```

**5. Run the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

**6. Build for production**

```bash
npm run build
```

## Learning Objectives

This project was developed to practice and strengthen React JS skills, particularly component-based architecture, state management, asynchronous JavaScript, REST API integration, and CRUD operations using Axios and MockAPI.

## Author

**Rival Andaputra**

Full Stack Web Development Student — Harisenin Bootcamp

GitHub: [@rivalandaputra](https://github.com/rivalandaputra)

---

Developed as part of **Harisenin Full Stack Web Development Bootcamp — Mission Advance Front End 1**.
