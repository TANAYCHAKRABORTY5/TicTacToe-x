import GameState from "./GameState";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return;
  }
  return (
    <div className="button-reset">
      <button onClick={onReset} className="reset-button">
        Play Again
      </button>
    </div>
  );
}

export default Reset;
