import { useState } from "react";

const Asking = ({ gif, altText, handleAccept, handleReject, noButtonText }) => {
  const [noClicks, setNoClicks] = useState(0);

  const onReject = () => {
    setNoClicks(prev => prev + 1);
    handleReject();
  };

  return (
    <>
      {/* Displaying the chosen gif with alt text */}
      <img className="App-gif" src={gif} alt={altText} />

      {/* Asking the special question with personalized name */}
      <p className="App-text">Pariiiiii, will you be my Valentine?</p>

      <div>
        {/* Button for accepting the proposal */}
        <button
          className="App-button"
          onClick={handleAccept}
          style={{
            transform: `scale(${1 + noClicks * 0.2})`,
            transition: "transform 0.3s ease"
          }}
        >
          Yes
        </button>

        {/* Button for rejecting the proposal with dynamic text */}
        <button className="App-button" onClick={onReject}>
          {noButtonText}
        </button>
      </div>
    </>
  );
};

export default Asking;
