import { useEffect } from "react";
import WinLine from "./WinLine";

function Board({ board, setBoard, gameStatus, setGameStatus, setPlayerDetails, checkGameEnd }) {

  function handleClick(changeRow, changeColumn) {
    if (board[changeRow][changeColumn] || gameStatus.status === "end") return;

    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      newBoard[changeRow][changeColumn] =
        gameStatus.playerTurn === "player1" ? "X" : "O";
      return newBoard;
    });
  }

  useEffect(() => {
    if (gameStatus.status === "new") {
      setBoard([["", "", ""],["", "", ""],["", "", ""]]);
		}
  }, [gameStatus, setBoard]);

  useEffect(() => {

    const isInitialBoard = board.every((row) => row.every((cell) => cell === ""));
    if (isInitialBoard) {
      return;
    }

    const gameEndStatus = checkGameEnd(board);

    if (gameEndStatus) {
      if (gameEndStatus === "draw") {
        setGameStatus({ status: "end", endStatus: "draw" });
      } else {
        setGameStatus({
          status: "end",
          winner: gameEndStatus === "X" ? "player1" : "player2",
        });
      }
    } else {
      setGameStatus((prevGameStatus) => ({
        status: "continue",
        playerTurn: prevGameStatus.playerTurn === "player1" ? "player2" : "player1",
      }));
    }
  }, [board, setGameStatus]);


	useEffect(() => {
		if (gameStatus.status === 'end' && gameStatus.winner) {
			setPlayerDetails((prevPlayerDetails) => {
				const winner = gameStatus.winner;
				const newPlayerDetails = {
					...prevPlayerDetails,
					[winner]: {
						...prevPlayerDetails[winner],
						score: prevPlayerDetails[winner].score + 1,
					},
				};
				return newPlayerDetails;
			});
		}
	}, [gameStatus, setPlayerDetails]);


  return (
    <section className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <div
              className={"cell " + (cell === "X" ? "x" : "o")}
              style={{ cursor: cell ? "default" : "pointer" }}
              key={cellIndex}
              onClick={() => handleClick(rowIndex, cellIndex)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
			{(gameStatus.status === "end" && "winner" in gameStatus) && <WinLine checkGameEnd={() => checkGameEnd(board, true)} />}
    </section>
  );
}

export default Board;
