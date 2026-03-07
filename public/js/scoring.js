export function calculateScore(level, selectedIds) {
    let score = 0;
  
    selectedIds.forEach(id => {
      const garment = level.garments.find(g => g.id === id);
      if (garment && garment.correct) {
        score += garment.points || 1;
      }
    });
  
    return score;
  }
  