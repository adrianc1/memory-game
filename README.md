# 🐶 Dog Memory Game

A fun and challenging memory game featuring adorable dog images, powered by [TheDogAPI](https://thedogapi.com). Test your memory skills across multiple difficulty levels — but be careful not to pick the same image twice!

---

## 📚 Table of Contents

- [Features](#features)  
- [How to Play](#how-to-play)  
- [Difficulty Levels](#difficulty-levels)  
- [Technologies Used](#technologies-used)  
- [API Source](#api-source)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)

---

## ✨ Features

- **Engaging Gameplay**: Classic memory matching mechanics with a twist.
- **Unique Image Selection**: Prevents selecting the same image twice in a row, adding a layer of challenge.
- **Adorable Dog Images**: Fetches random dog images from TheDogAPI for a fresh experience every time.
- **Four Difficulty Levels**:
  - *Easy*: 4 pairs (8 cards)
  - *Medium*: 8 pairs (16 cards)
  - *Hard*: 12 pairs (24 cards)
  - *Expert*: 16 pairs (32 cards)
- **Responsive Design**: Seamless play on any device or screen size.
- **Score Tracking**: Tracks your attempts to help beat your best score.

---

## 🕹️ How to Play

1. **Start a New Game**: Choose your difficulty level.
2. **Flip Cards**: Click two cards to reveal dog images.
3. **Match Pairs**: Matching cards stay flipped.
4. **No Double Picks**: Selecting the same card twice in a row is invalid.
5. **Find All Pairs**: Match all pairs to win.
6. **Track Your Score**: Fewer flips = better score!

---

## 🎯 Difficulty Levels

- **Easy**: 4 pairs (2x2 grid) — great for beginners  
- **Medium**: 8 pairs (4x4 grid) — solid challenge  
- **Hard**: 12 pairs (6x4 grid) — serious test  
- **Expert**: 16 pairs (8x4 grid) — for memory masters

---

## 🛠️ Technologies Used

- **React** – For building the interactive UI  
- **Tailwind CSS** – For fast, responsive styling  
- **JavaScript (ES6+)** – Core game logic  
- **HTML5** – Application structure  

---

## 📡 API Source

All dog images are fetched dynamically from:  
👉 [TheDogAPI](https://thedogapi.com)

---

## ⚙️ Installation

To run the project locally:

```bash
# Clone the repository
git clone <your-repo-url>
cd dog-memory-game

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm start
# or
yarn start
