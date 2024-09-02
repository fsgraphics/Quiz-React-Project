import React, { useRef, useState } from "react";
import classes from "../components/Styles/MiniPlayer.module.css";
import image from "../assets/images/Abstract-F-Jpg.jpg";
import ReactPlayer from "react-player/youtube";

const MiniPlayer = ({ title, id }) => {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniplayer() {
    if (!status) {
      buttonRef.current.classList.remove(classes.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(classes.floatingBtn);
      setStatus(false);
    }
  }

  return (
    <div
      className={`${classes.miniPlayer} ${classes.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniplayer}
    >
      <span className={`material-icons-outlined ${classes.open}`}>
        {" "}
        play_circle_filled{" "}
      </span>
      <span
        className={`material-icons-outlined ${classes.close}`}
        onClick={toggleMiniplayer}
      >
        {" "}
        close{" "}
      </span>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="300px"
        height="168px"
        playing={status}
        controls
      />
      <p>{title}</p>
    </div>
  );
};

export default MiniPlayer;
