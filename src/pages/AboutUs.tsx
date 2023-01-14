import { ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import gameVector from "./../assets/image/game-vector.png";

const AboutUs = (): ReactElement => {
  return (
    <Grid container flexDirection={{ sm: "row", xs: "column" }} justifyContent={{ sm: "space-around", xs: "center" }} minHeight="calc(100vh - 9.5rem)">
      <Box width={{ sm: "50%", xs: "100%" }} display="flex" justifyContent={"center"} padding="1rem">
        <img src={gameVector} width="100%" alt="" />
      </Box>
      <Box width={{ sm: "50%", xs: "100%" }} display="flex" alignItems={"center"} justifyContent={"center"} padding="1rem">
        <Typography variant="h5" fontSize={{ sm: "25px",md:"30px", xs: "20px" }} color="azure">
          The Game Shop company started its activity in 2010 <br /> and has always tried to provide <br /> the best services to its users.
        </Typography>
      </Box>
    </Grid>
  );
};
export default AboutUs;
