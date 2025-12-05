function WinLine({ checkGameEnd }) {

  const {position, type} = checkGameEnd();

  let style;
  if (type === "horizontal") {
    style = {
        top : `${ (2 * position[0] + 1) * 100 / 6 }%`,
        left : `0%`,
        transform : "translateY(-50%)",
    }
  }else if (type === "vertical") {
    style = {
        top : "50%",
        left : `${((2 * position[1] + 1) * 100 / 6)}%`,
        transform : "translateX(-50%) rotate(90deg)",

    }
  }else if (type === "diagonal") {

    if (position[0] === position[1]) {
        style = {
            top : "50%",
            transform : "rotate(45deg) translateY(-50%) scale(1.3)",
        }
    }else{
        style = {
            top : "50%",
            transform : "rotate(-45deg) translateY(-50%) scale(1.3)",
        }
    }
  }
  
  return <div className="win-line" style={style}></div>;
}

export default WinLine;
