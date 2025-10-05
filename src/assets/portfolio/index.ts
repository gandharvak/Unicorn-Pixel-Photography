export const portfolioImages = Array.from({ length: 188 }, (_, i) => i + 1)
  .filter(num => ![4, 10, 11, 15].includes(num))
  .map(num => `https://ik.imagekit.io/unicorn/portfolio/${num}.jpg`);
