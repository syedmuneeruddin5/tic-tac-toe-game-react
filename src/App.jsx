import {useState} from "react";
import ScoreShow from "./components/ScoreShow";
import StatusShow from "./components/StatusShow";
import Board from "./components/Board";
import Controls from "./components/Controls";

function App() {
  const [playerDetails, setPlayerDetails] = useState({player1: {name : "Multiplayer 1", score : 0}, player2: {name : "Multiplayer 2", score : 0}});
  const [board, setBoard] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [gameStatus, setGameStatus] = useState({status : 'new', playerTurn : 'player1'}) // game status : new, continue, end
  const [gameStartedPlayer, setGameStartedPlayer] = useState('player1')

      function checkGameEnd(boardGiven, showPosition=false) {
  
        for (let index = 0; index < 3; index++) {
            if (boardGiven[index][0] === boardGiven[index][1] && boardGiven[index][1] === boardGiven[index][2] && boardGiven[index][0] !== "") {
                if (showPosition) { return { position : [index, 0], type: 'horizontal'}}
                return boardGiven[index][0]
            }
            
            if (boardGiven[0][index] === boardGiven[1][index] && boardGiven[1][index] === boardGiven[2][index] && boardGiven[0][index] !== "") {
                if (showPosition) { return { position : [0, index], type: 'vertical'}}
                return boardGiven[0][index]
            }
  
        }
        
        if (boardGiven[0][0] === boardGiven[1][1] && boardGiven[1][1] === boardGiven[2][2] && boardGiven[0][0] !== "") {
            if (showPosition) { return { position : [0, 0], type: 'diagonal'}}
            return boardGiven[0][0]
        }
  
        if (boardGiven[0][2] === boardGiven[1][1] && boardGiven[1][1] === boardGiven[2][0] && boardGiven[0][2] !== "") {
            if (showPosition) { return { position : [0, 2], type: 'diagonal'}}
            return boardGiven[0][2]
        }
  
        if (boardGiven.every(row => row.every(cell => cell))){
            if (showPosition) { return null}
            return "draw"
        }
        
        if (showPosition) {return null}
        return false
    }

  return (
    <>
        <ScoreShow playerDetails={playerDetails} setPlayerDetails={setPlayerDetails}/>
        <StatusShow playerDetails={playerDetails} gameStatus={gameStatus}/>
        <Board board={board} setBoard={setBoard} gameStatus={gameStatus} setGameStatus={setGameStatus} setPlayerDetails={setPlayerDetails} checkGameEnd={checkGameEnd}/>
        <Controls setGameStatus={setGameStatus} gameStatus={gameStatus} gameStartedPlayer={gameStartedPlayer} setGameStartedPlayer={setGameStartedPlayer}/>
    </>
  )

}

export default App
