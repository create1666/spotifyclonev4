import React, { useState } from "react";
import "./Footer.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import {
  PlayCircleOutline,
  PauseCircleOutline,
  PlaylistPlayOutlined,
  Repeat,
  SkipNext,
  SkipPrevious,
  VolumeDownOutlined,
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { Box } from "@mui/system";
import classNames from "classnames";
import { useStateValue } from "../../StateProvider";
const Footer = () => {
  const [colorChange, setColor] = useState("");
  const [{ playing }, dispatch] = useStateValue();

  const onPlayClick = () => {
    dispatch({ type: "PLAY_TRACK" });
  };

  const onPauseClick = () => {
    dispatch({ type: "PAUSE_TRACK" });
  };

  return (
    <footer className="footer">
      <div className="footer__left">
        <img
          src="https://www.currentschoolnews.com/wp-content/uploads/2021/06/Gear-RIP-Google-Music-1194411695.jpg"
          alt=""
        />

        <div className="song__title">
          <h4>Ckay - Love nwantintin</h4>
          <p>Buju X Timayah - cold outside</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon
          className={classNames("footer__shuffle", {
            "--green": colorChange === "green",
          })}
          onClick={() => setColor("green")}
        />
        <SkipPrevious className="footer__skipPrevious" />
        {playing ? (
          <PauseCircleOutline onClick={onPauseClick} />
        ) : (
          <PlayCircleOutline
            onClick={() => onPlayClick()}
            className="footer__playCircleOutline"
          />
        )}

        <SkipNext className="footer__skipPrevious" />
        <Repeat
          className={`footer__repeat ${colorChange === "red" && "--red"}
           
          `}
          onClick={() => setColor("red")}
        />
      </div>
      <div className="footer__right">
        {" "}
        <PlaylistPlayOutlined />
        <VolumeDownOutlined />
        <Grid>
          <Box width={200}>
            <Slider marks min={10} max={110} />
          </Box>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
