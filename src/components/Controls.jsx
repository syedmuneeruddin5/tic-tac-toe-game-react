import { useEffect } from "react";

function Controls({ gameStatus, setGameStatus, gameStartedPlayer, setGameStartedPlayer }) {

  function handleResetClick(){
    setGameStartedPlayer((prev) => prev === "player1" ? "player2" : "player1")
  }

  useEffect(() => {
    setGameStatus({status : 'new', playerTurn : gameStartedPlayer})
  }, [gameStartedPlayer])


  if (gameStatus.status !== "new") {
    return (
      <section className="controls">
        <button className="reset" onClick={handleResetClick}> Reset </button>
      </section>
    );
  }
  return null;
}

export default Controls;
