function findHideScoresInput() {
  let hideScores = document.getElementsByName('showScores')[0];

  if (!hideScores) {
    hideScores = document.querySelector(
      '[data-id="nba:game-tracker:hide-scores:toggle"] > input',
    );
  }

  return hideScores;
}

function main() {
  const gameHero = document.querySelector('[class*=GameHeroBackground]');

  if (gameHero) {
    gameHero.style.display = 'none';
  }

  let hideScores = findHideScoresInput();

  const hideScoreSetup = setInterval(() => {
    if (!hideScores) {
      hideScores = findHideScoresInput();
    }

    if (hideScores) {
      clearInterval(hideScoreSetup);
    }

    hideScores.addEventListener('change', (e) => {
      if (!e.target.checked) {
        setTimeout(() => hideScores.click(), 1);
      }
    });

    if (hideScores && !hideScores.checked) {
      hideScores.click();
    }
  }, 20);
}

module.exports = { main };
