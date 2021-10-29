import React, { useState } from "react";
import "./Footer.css";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import {
  PlayCircleOutline,
  PlaylistPlayOutlined,
  Repeat,
  SkipNext,
  SkipPrevious,
  VolumeDownOutlined,
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import { Box } from "@mui/system";
import classNames from "classnames";
const Footer = () => {
  const [colorChange, setColor] = useState("");
  return (
    <div className="footer">
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
        <PlayCircleOutline className="footer__playCircleOutline" />
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
    </div>
  );
};

export default Footer;
