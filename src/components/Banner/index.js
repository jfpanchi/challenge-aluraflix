import {
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Button from "../Button";
import bannerImg from "../../assets/VideoCard.png";

const Banner = () => {
  return (
    <Grid
      container
      sx={{
        bgcolor: "rgb(42,122,228)",
        background:
          "radial-gradient(circle, rgba(42,122,228,1) 0%, rgba(25,25,25,1) 100%)",
      }}
      padding={4}
      alignContent={"center"}
    >
      <Grid item xs={12} sm={6}>
        <Button variant="contained" size="small" text="FrontEnd" />
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="white.main"
          marginTop={2}
        >
          Challege React
        </Typography>
        <Typography variant="body2" color="white.main">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} >
        <img src={bannerImg} alt="Video Card Banner" width={"80%"} />
      </Grid>
    </Grid>
  );
};

export default Banner;
