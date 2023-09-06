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
        <Typography variant="p" color="white.main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem, ex ut id nulla similique doloribus maiores magnam sint possimus sapiente repellat nesciunt ipsum consectetur ratione nostrum dolorem vitae voluptates.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} display={"flex"} justifyContent={"center"}>
        <img src={bannerImg} alt="Video Card Banner" width={"80%"} />
      </Grid>
    </Grid>
  );
};

export default Banner;
