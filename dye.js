// Generate a random number between [0, u]
let n = u => Math.floor(Math.random() * (u + 1));

// Generate a new random RGB color
let r = () => `rgb(${n(255)}, ${n(255)}, ${n(255)})`;

// Generate a new gradient
let g = () => `linear-gradient(${n(360)}deg, ${r()} 0%, ${r()} 100%)`;
