# React Tic-Tac-Toe

A two-player tic-tac-toe game built with React and Vite. Players can customize their names, follow the active turn, review move history, and start a rematch after a win or draw.

## Features

- Local two-player gameplay
- Editable player names
- Active-player indicator
- Automatic win and draw detection
- Move history with board coordinates
- One-click rematches
- Responsive interface

## Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Open the URL shown in the terminal, typically `http://localhost:5173`.

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Check the source code with ESLint
```

## How to play

1. Player 1 uses **X** and Player 2 uses **O**.
2. Select an empty square when it is your turn.
3. Place three matching symbols in a row, column, or diagonal to win.
4. Select **Rematch** to clear the board and play again.

Use the **Edit** buttons to change either player's display name.

## Project structure

```text
public/                  Static images and the game logo
src/
  components/            Game board, players, move log, and result UI
  App.jsx                Game state and winner logic
  index.css              Application styles
  index.jsx              React entry point
  winning-combinations.js
index.html               HTML shell and page header
vite.config.js           Vite configuration
```

## Tech stack

- React 19
- Vite 4
- CSS
