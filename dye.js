// Generate a random number between [l, u]
const n = (l, u) => Math.floor(Math.random() * (u - l + 1)) + l;

// Helper function to call n(0, 255)
const c = () => n(0, 255);

// Generate a new random RGB color
const r = () => `rgb(${c()}, ${c()}, ${c()})`;

// Generate a new gradient and return it
const g = () => `linear-gradient(${n(0, 360)}deg, ${r()} 0%, ${r()} 100%)`;
