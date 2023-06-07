const response = await fetch('http://localhost:3000/adrienne');

const name = await response.text();

expect.(name).toBe("adrienne");