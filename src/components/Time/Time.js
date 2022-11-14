import { useContext } from "react";
import { UserContext } from "../../useContext";

function Time() {
  const { remainingTime, isGameStarted, handleClick, changeTime } =
    useContext(UserContext);

  return (
    <>
      <div className="time-block">
        <div className="time-handler">
            <button className="changeTime minus" disabled={isGameStarted} onClick={() => changeTime(-1)}>
            -
            </button>
            <h4>Time remaining: {remainingTime}</h4>
            <button className="changeTime plus" disabled={isGameStarted} onClick={() => changeTime(1)}>
            +
            </button>
        </div>
       

        <button className="start" disabled={isGameStarted} onClick={handleClick}>
          Start
        </button>
      </div>
    </>
  );
}

export default Time;
