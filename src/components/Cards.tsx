import { ReactElement } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
  Box,
  CardActions,
  Grid,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import { CardProps } from "../types/Card.types";

const Cards = ({ img, title, description, genre }: CardProps): ReactElement => {
  return (
    <Card
      sx={{
        width: 300,
        height: "25rem",

        background: `url(${img}) no-repeat`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <CardActionArea
        sx={{
          borderRadius: "1rem 1rem 0 0",
          backgroundColor: "#1e283fcf",
          color: "azure",
          backdropFilter: "blur(2px)",
          position: "absolute",
          bottom: "0",
        }}
      >
        <CardContent sx={{ height: "6rem" }}>
          <Typography variant="h5" component="h5">
            {title}
          </Typography>
          <Typography variant="h6" component="h6" marginBottom={"1rem"}>
            {genre}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
            paddingX={"0.5rem"}
          >
            <Chip
              label={"4.4"}
              icon={<StarRoundedIcon sx={{ color: "orange !important" }} />}
              variant="outlined"
              sx={{ color: "white" }}
            />
            <Box
              sx={{
                borderRadius: "50%",
                padding: "0.2rem 0.4rem",
                transition: "all 0.5s ease",
                "&:hover": {
                  backgroundColor: "#a200c2ca",
                },
              }}
            >
              <CloudDownloadRoundedIcon />
            </Box>
          </Grid>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
