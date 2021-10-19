import React from "react";
import "./Footer.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import {
  PlayCircleOutline,
  Repeat,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__lleft">Album and song details</div>
      <div className="footer__center">
        <ShuffleIcon className="footer__shuffle" />
        <SkipPrevious className="footer__skipPrevious" />
        <PlayCircleOutline className="footer__playCircleOutline" />
        <SkipNext className="footer__skipNext" />
        <Repeat className="footer__repeat" />
      </div>
      <div className="footer__right">Volume Controls</div>
    </div>
  );
};

export default Footer;
