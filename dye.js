// Generate a random number between [0, u]
let
  n = u => ~~(Math.random() * (u + 1)),

// Generate a new random RGB color
  r = () => `rgb(${n(255)}, ${n(255)}, ${n(255)})`,

// Generate a new gradient
  g = () => `linear-gradient(${n(360)}deg, ${r()} 0%, ${r()} 100%)`;
