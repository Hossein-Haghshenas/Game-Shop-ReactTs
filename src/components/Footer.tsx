import { ReactElement } from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

const Footer = (): ReactElement => {
  return (
    <footer>
      <Grid
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        marginTop={"1rem"}
        paddingY={"1rem"}
        color={"azure"}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          Game
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
            color={"magenta"}
          >
            Shop
          </Typography>
        </Typography>
        <Typography>Hossein Developer © All Rights Reserved</Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
