# Quizzly

A simple interactive quiz application built with **React** and **GSAP** as a frontend practice project.

Quizzly was created to practice building interactive React interfaces, managing component state, and working with GSAP animations. The main feature is an animated quiz card that flips/spins between questions as the user progresses through the quiz.

## 🚀 Live Demo

**[View the Live Website](https://rosiroses.github.io/Quizzly/)**

## Features

* Interactive multiple-choice quiz
* Animated quiz card using GSAP
* Card flip/spin animation when moving between questions
* Tracks the user's score throughout the quiz
* Displays the final score after completing the quiz
* Shows the correct answers at the end
* Responsive and simple user interface

## Built With

* **React** — UI development and state management
* **GSAP** — quiz card animations
* **JavaScript** — application logic
* **HTML & CSS** — structure and styling

## How It Works

The quiz presents one multiple-choice question at a time on an animated card.

When the user selects an answer and moves to the next question, the card performs a GSAP animation before displaying the next question. The application keeps track of the user's answers and score throughout the quiz.

Once all questions have been answered, the quiz ends and displays the user's final score along with the correct answers.

## Purpose

This project was built primarily as a **frontend practice project** to gain hands-on experience with:

* React components and state
* Handling user interactions
* Conditional rendering
* Managing quiz logic and scores
* Integrating GSAP with React
* Creating UI animations and transitions

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Navigate into the project directory:

```bash
cd YOUR-REPOSITORY
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application should now be running on the local development server provided by Vite.

## Future Improvements

Some possible improvements include:

* Adding more quiz categories
* Randomizing questions and answer choices
* Adding a countdown timer
* Adding difficulty levels
* Improving accessibility
* Adding persistent high scores
* Adding more advanced animations
* Fetching questions from an external API

