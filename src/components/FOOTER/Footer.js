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
  const [{ playing, volume, repeat }, dispatch] = useStateValue();

  const onPlayClick = () => {
    dispatch({ type: "PLAY_TRACK" });
  };
  const onTrackRepeat = () => {
    if (!repeat) {
      dispatch({ type: "SET_REPEAT" });
    } else {
      dispatch({ type: "DISABLE_REPEAT" });
    }
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
          onClick={() => onTrackRepeat()}
          className={`footer__repeat ${!repeat ? "" : "--red"}
           
          `}
          // onClick={() => setColor("red")}
        />
      </div>
      <div className="footer__right">
        {" "}
        <PlaylistPlayOutlined />
        <VolumeDownOutlined />
        <Grid>
          <Box width={200}>
            <Slider
              onChange={(e, newValue) => {
                dispatch({
                  type: "VOLUME_CHANGE",
                  payload: newValue,
                });
              }}
              value={volume * 100}
              marks
              min={0}
              max={100}
              step={10}
            />
          </Box>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
