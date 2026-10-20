import confetti from 'canvas-confetti';

export const triggerCelebration = () => {
  // Center celebration burst
  confetti({
    particleCount: 60,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#f43f5e', '#ec4899', '#fb7185', '#f472b6', '#fbcfe8', '#fbbf24', '#f59e0b'],
    ticks: 200,
    gravity: 0.9,
    scalar: 1.1,
  });

  // Secondary delayed bursts from the left and right corners
  setTimeout(() => {
    confetti({
      particleCount: 35,
      angle: 60,
      spread: 60,
      origin: { x: 0.05, y: 0.75 },
      colors: ['#ec4899', '#f43f5e', '#fbbf24'],
    });
    confetti({
      particleCount: 35,
      angle: 120,
      spread: 60,
      origin: { x: 0.95, y: 0.75 },
      colors: ['#ec4899', '#f43f5e', '#fbbf24'],
    });
  }, 180);
};
