function StatusShow({playerDetails, gameStatus}) {
 
  if (gameStatus.status !== "end") {
    const playerName = playerDetails[gameStatus.playerTurn].name;
    return (
      <section className="status">
          <h4>{playerName}'s Turn ({gameStatus.playerTurn === "player1" ? "X" : "O"})</h4>
      </section>
    )
  }else{
    return (
      <section className="status">
          <h4>{gameStatus.endStatus === "draw" ? "Draw" : `${playerDetails[gameStatus.winner].name} (${gameStatus.winner === "player1" ? "X" : "O"}) Wins` }</h4>
      </section>
    )
  }

}

export default StatusShow