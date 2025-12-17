
# Live Text Preview — AJAX Fundamentals (Phase 1)

**Goal:** Master the async mindset and DOM manipulation before touching real AJAX/fetch.  
No backend, no Laravel — pure vanilla HTML, CSS, and JavaScript.

## Features

- Real-time text preview as you type
- Debounced input handling for smooth UX
- Simulated server delay (400–800 ms) with `setTimeout` to train async thinking
- Visual feedback: "Typing..." status and instant update confirmation
- Mobile-friendly and accessible

## Tech Stack

- HTML5
- Tailwind CSS (via CDN for rapid prototyping)
- Vanilla JavaScript (ES6+)
- No build tools required

## Project Structure

```
live-text-preview/
├── index.html    ← (empty — Tailwind loaded via CDN)   
└── script.js
```

## Setup & Run

1. Create the folder and the three files.
2. Copy the code exactly as provided.
3. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

No server, no npm, no installation needed.

## Key Learning Points

- Use the `input` event instead of `keyup` — works with paste, autocomplete, voice input, and mobile keyboards.
- Debouncing prevents excessive updates during rapid typing.
- Caching DOM elements avoids repeated `querySelector` calls.
- `textContent` is used for safe output (prevents XSS in real apps).
- Simulated delay prepares your brain for real network latency.
