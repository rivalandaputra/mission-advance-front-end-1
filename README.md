# CHILL - Movie Streaming App

A movie streaming website built with React JS as part of the Harisenin Full Stack Web Development Bootcamp — Mission 2.

CHILL allows users to explore movies, search for their favorite titles, and manage their personal watchlist with different viewing statuses.

## Preview

**CHILL Movie App** is a streaming platform interface featuring movie categories, continue watching, and a personal watchlist.

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
- **Local Storage** — Save watchlist data in the browser.
- **Responsive Design** — Optimized for desktop and mobile screens.

## Technologies Used

- React JS
- JavaScript
- HTML5
- CSS3
- React Router DOM
- Vite
- Browser Local Storage
- Git & GitHub

## React Concepts Implemented

This project implements several fundamental React concepts:

- **useState** — Manage application states.
- **Array of Objects** — Store and manage movie data.
- **CRUD Operations** — Create, Read, Update, and Delete movies.
- **Props** — Share data and functions between components.
- **Array Methods** — Use `map()`, `filter()`, and `some()` to manage movie data.
- **React Router** — Handle navigation between pages.
- **Local Storage** — Persist watchlist data between browser sessions.

## Project Structure

```text
chill-react/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Home.jsx
│   │   ├── NavbarTemp.jsx
│   │   ├── ContinueWatching.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieSection.jsx
│   │   ├── MyList.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── movies.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

## Installation & Setup

Follow these steps to run the project locally.

**1. Clone the repository**

```bash
git clone https://github.com/rivalandaputra/mission-2-movie-react-js.git
```

**2. Navigate to the project folder**

```bash
cd mission-2-movie-react-js
```

**3. Install dependencies**

```bash
npm install
```

**4. Run the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

**5. Build for production**

```bash
npm run build
```

## Learning Objectives

This project was developed to practice and strengthen fundamental React JS skills, particularly state management, component-based architecture, data handling, and CRUD functionality.

## Author

**Rival Andaputra**

Full Stack Web Development Student — Harisenin Bootcamp

GitHub: [@rivalandaputra](https://github.com/rivalandaputra)

---

Developed as part of **Harisenin Full Stack Web Development Bootcamp — Mission 2**.