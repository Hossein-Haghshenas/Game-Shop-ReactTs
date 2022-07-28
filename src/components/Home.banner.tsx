import { ReactElement } from "react";
import Box from "@mui/material/Box";
import homeImage from "./../assets/image/home.png";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const Banner = (): ReactElement => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${homeImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "80vh",
          width: "80vw",
          borderRadius: "1rem",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: { xs: "1.2rem", sm: "3rem" },
            top: "40%",
            textAlign: "end",
            fontWeight: "bold",
            padding: "0.6rem",
            borderRadius: "1rem",
            background: { xs: "#c300ff6e", sm: "none" },
            backdropFilter: "blur(2px)",
            color: { xs: "#ffffff", sm: "#1f1f1f" },
          }}
        >
          <Typography variant="h4" color={"inherit"}>
            CITY OF THE <br /> FUTURE
          </Typography>
          <Button
            variant="contained"
            sx={{
              color: "azure",
              backgroundColor: "magenta",
              marginTop: "1rem",
            }}
          >
            AVAILABLE NOW
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
