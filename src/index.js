function main() {
  const gameHero = document.querySelector('[class*=GameHeroBackground]');
  let hideScores = document.getElementsByName('showScores')[0];

  if (gameHero) {
    gameHero.style.display = 'none';
  }

  if (!hideScores) {
    hideScores = document.querySelector(
      '[data-id="nba:game-tracker:hide-scores:toggle"] > input',
    );
  }

  if (hideScores && !hideScores.checked) {
    hideScores.click();
  }
}

module.exports = { main };
