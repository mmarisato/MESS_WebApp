export const gameState = {
    currentLevel: 0,
    totalScore: 0,
    levelResults: []
  };
  
  export function resetGame() {
    gameState.currentLevel = 0;
    gameState.totalScore = 0;
    gameState.levelResults = [];
  }
  