import { AppBar, Box ,Divider, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import Button from "../Button";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box>
      <Divider color="#2A7AE4" sx={{ height: "2px" }} />
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ display: "flex" , justifyContent: "center" , flexDirection: "column"}}>
            <Box sx={{textAlign:"center", display: { xs: "none", sm: "block" } }}>
                <Typography
                    color="primary"
                    variant="h6"
                    fontWeight="bold"
                    component="div"
                    margin="normal"
                >
                    ALURAFLIX
                </Typography>

            <Typography color="white.main" variant="body2">
                Desarrollado por Jefferson Panchi
                <IconButton href="https://www.linkedin.com/in/jefferson-panchi-chacon/" target="_blank"> <LinkedInIcon color="primary" fontSize="small"/> </IconButton>
                <IconButton href="https://github.com/jfpanchi" target="_blank"> <GitHubIcon color="primary" fontSize="small"/> </IconButton>
                </Typography>   
            </Box>
          
            <Box sx={{ display: { xs: "block", sm: "none"}, width: "100%" }}>
                <Button variant="contained" text="Nuevo video" color="primary" fullWidth={true}/>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
