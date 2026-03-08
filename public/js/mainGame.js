import { levels } from "./gameData.js";
import { gameState, resetGame } from "./gameState.js";
import { calculateScore } from "./scoring.js";

class Game {
  constructor({ rootSelector }) {
    this.root = document.querySelector(rootSelector);
    this.selectedGarments = [];
  }

  init() {
    if (!this.root) {
      console.error("Game root element not found.");
      return;
    }

    this.renderIntro();
  }

  startGame() {
    resetGame();
    this.selectedGarments = [];
    this.renderLevel();
  }

  getCurrentLevel() {
    return levels[gameState.currentLevel];
  }

  toggleGarment(garmentId) {
    const alreadySelected = this.selectedGarments.includes(garmentId);

    if (alreadySelected) {
      this.selectedGarments = this.selectedGarments.filter(id => id !== garmentId);
    } else {
      if (this.selectedGarments.length >= 3) return;
      this.selectedGarments.push(garmentId);
    }

    this.renderLevel();
  }
  renderCroquisLayers(level) {
    const selectedGarments = this.selectedGarments
      .map(id => level.garments.find(g => g.id === id))
      .filter(Boolean);
  
    const layerOrder = {
      bottom: 10,
      top: 20,
      jacket: 30
    };
  
    return selectedGarments
      .sort((a, b) => (layerOrder[a.category] || 0) - (layerOrder[b.category] || 0))
      .map(garment => `
        <img
          class="croquisGarment croquisGarment--${garment.category}"
          src="${garment.image}"
          alt="${garment.name}"
        >
      `)
      .join("");
  }

  submitLevel() {
    if (this.selectedGarments.length !== 3) return;

    const level = this.getCurrentLevel();
    const score = calculateScore(level, this.selectedGarments);

    const result = {
      levelId: level.id,
      title: level.title,
      background: level.background,
      selected: [...this.selectedGarments],
      garments: level.garments,
      score
    };

    gameState.levelResults.push(result);
    gameState.totalScore += score;

    this.renderLevelResult(result);
  }

  nextLevel() {
    gameState.currentLevel += 1;
    this.selectedGarments = [];

    if (gameState.currentLevel >= levels.length) {
      this.renderFinalScreen();
      return;
    }

    this.renderLevel();
  }

  restartGame() {
    resetGame();
    this.selectedGarments = [];
    this.renderIntro();
  }

  renderIntro() {
    this.root.innerHTML = `
      <section class="gameIntro">
        <div class="gameIntro__card">
          <h1>How to Play</h1>
          <p>Select 3 garments for each environment.</p>
          <ul>
            <li>Choose 3 items</li>
            <li>Press submit</li>
            <li>See your score</li>
            <li>Advance to the next level</li>
          </ul>
          <button class="gameButton" id="startGameBtn">Play</button>
        </div>
      </section>
    `;

    document
      .querySelector("#startGameBtn")
      .addEventListener("click", () => this.startGame());
  }

  renderLevel() {
    const level = this.getCurrentLevel();

    const garmentsMarkup = level.garments
      .map(garment => {
        const isSelected = this.selectedGarments.includes(garment.id);

        return `
          <button
            class="garmentCard ${isSelected ? "is-selected" : ""}"
            data-garment-id="${garment.id}"
            type="button"
          >
            <img src="${garment.image}" alt="${garment.name}">
          </button>
        `;
      })
      .join("");

    const selectedNamesMarkup = this.selectedGarments
      .map(id => {
        const garment = level.garments.find(g => g.id === id);
        return garment ? `<li>${garment.name}</li>` : "";
      })
      .join("");

    this.root.innerHTML = `
      <section class="gameLevel">
        <aside class="gameSidebar">
          <h2 class="levelTitle">${level.title}</h2>
          <p class="levelInstructions">${level.prompt}</p>
          <div class="garmentGrid">
            ${garmentsMarkup}
          </div>
        </aside>

        <section
        class="gameStage"
        style="background-image: url('${level.background}')"
        >
          
        <div class="mannequinArea">
        <div class="mannequinPlaceholder">
         <div class="outfitLayers">
          ${this.renderCroquisLayers(level)}
        </div>
      </div>
            <div class="selectedSummary">
              <h3>Selected</h3>
              <ul>${selectedNamesMarkup || "<li>No garments selected yet</li>"}</ul>
            </div>
          </div>

          <button
            class="gameButton"
            id="submitLevelBtn"
            ${this.selectedGarments.length !== 3 ? "disabled" : ""}
          >
            Submit
          </button>
        </div>
      </section>
    `;

    document.querySelectorAll("[data-garment-id]").forEach(button => {
      button.addEventListener("click", () => {
        this.toggleGarment(button.dataset.garmentId);
      });
    });

    const submitBtn = document.querySelector("#submitLevelBtn");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => this.submitLevel());
    }
  }

  renderLevelResult(result) {
    const selectedMarkup = result.selected
      .map(id => {
        const garment = result.garments.find(g => g.id === id);
        return garment
          ? `<li><img src="${garment.image}" alt="${garment.name}"><span>${garment.name}</span></li>`
          : "";
      })
      .join("");

    const isLastLevel = gameState.currentLevel === levels.length - 1;

    this.root.innerHTML = `
      <section class="levelResult">
        <div class="levelResult__stage" style="background-image: url('${result.background}')">
          <div class="levelResult__card">
            <h2>${result.title}</h2>
            <p class="scoreText">Score: ${result.score}/10</p>
            <ul class="resultGarments">
              ${selectedMarkup}
            </ul>
            <button class="gameButton" id="nextBtn">
              ${isLastLevel ? "See Final Results" : "Next Level"}
            </button>
          </div>
        </div>
      </section>
    `;

    document
      .querySelector("#nextBtn")
      .addEventListener("click", () => this.nextLevel());
  }
  renderFinalOutfitLayers(result) {
    const selectedGarments = result.selected
      .map(id => result.garments.find(g => g.id === id))
      .filter(Boolean);
  
    const layerOrder = {
      bottom: 10,
      top: 20,
      jacket: 30
    };
  
    return selectedGarments
      .sort((a, b) => (layerOrder[a.category] || 0) - (layerOrder[b.category] || 0))
      .map(garment => `
        <img
          class="finalOutfitGarment finalOutfitGarment--${garment.category}"
          src="${garment.image}"
          alt="${garment.name}"
        >
      `)
      .join("");
  }

  renderFinalScreen() {
    const totalPossible = levels.length * 10;

    const cardsMarkup = gameState.levelResults
      .map(result => {
        const garmentMarkup = result.selected
          .map(id => {
            const garment = result.garments.find(g => g.id === id);
            return garment ? `<li>${garment.name}</li>` : "";
          })
          .join("");

        return `
        <article class="finalCard">
        <div class="finalCard__stage" style="background-image: url('${result.background}')">
          <div class="finalOutfitPreview">
            ${this.renderFinalOutfitLayers(result)}
          </div>
        </div>

        <div class="finalCard__content">
          <h3>${result.title}</h3>
          <p>${result.score}/10</p>
          <ul>${garmentMarkup}</ul>
        </div>
      </article>
        `;
      })
      .join("");

    this.root.innerHTML = `
      <section class="finalScreen">
        <h1>${gameState.totalScore}/${totalPossible}</h1>
        <p>Back Country Ready</p>

        <div class="finalGrid">
          ${cardsMarkup}
        </div>

        <button class="gameButton" id="restartBtn">Play Again</button>
      </section>
    `;

    document
      .querySelector("#restartBtn")
      .addEventListener("click", () => this.restartGame());
  }
}

const game = new Game({ rootSelector: "#gameRoot" });
game.init();