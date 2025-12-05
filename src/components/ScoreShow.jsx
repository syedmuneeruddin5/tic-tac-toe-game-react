
function ScoreShow({ playerDetails, setPlayerDetails}) {

  function HandlePlayerNameChange(e, player){
    if (e.target.value.trim() === "") return;

    setPlayerDetails((prevPlayerDetails) => {
      const newPlayerDetails = {
        ...prevPlayerDetails,
        [player]: {
          ...prevPlayerDetails[player],
          name: e.target.value.trim(),
        },
      };
      return newPlayerDetails;
    });
  }

  return (
    <section className="score">
        <div className="player">
            <input type="text" className="player__name" value={playerDetails.player1.name} onChange={(e) => HandlePlayerNameChange(e, "player1")} />
            <p className="player__score">{playerDetails.player1.score}</p>
        </div>
        <div className="player">
            <input type="text" className="player__name" value={playerDetails.player2.name} onChange={(e) => HandlePlayerNameChange(e, "player2")} />
            <p className="player__score">{playerDetails.player2.score}</p>
        </div>
    </section>
  )
}

export default ScoreShow