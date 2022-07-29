import { ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import assasing from "./../assets/image/assassins_creed.png";

const AboutUs = (): ReactElement => {
  return (
    <Grid container justifyContent={"space-around"} minHeight={"78vh"}>
      <Grid container justifyContent={"center"}>
        <Box
          sx={{
            width: "26rem",
            height: "26rem",
            borderRadius: "50%",
            backgroundImage: `url(${assasing})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Typography variant="h5" color={"azure"} align={"center"}>
          Im junior web developer
          <br /> My main language is Javascript
        </Typography>
      </Grid>
    </Grid>
  );
};
export default AboutUs;
