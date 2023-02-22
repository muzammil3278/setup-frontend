import React from "react";
import CountUp from "react-countup";

const index = () => {
  return (
    <div>
      <CountUp
        start={-875.039}
        end={160527.012}
        duration={2.75}
        separator=" "
        decimals={4}
        decimal=","
        prefix="EUR "
        suffix=" left"
        onEnd={() => console.log("Ended! 👏")}
        onStart={() => console.log("Started! 💨")}
      >
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef} />
            <button onClick={start}>Start</button>
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default index;

// Start    ::::::: number start
// End      ::::::: number end
// Delay    ::::::: Late start
// Duration ::::::: Start to end slow
// Decimals ::::::: End.number
