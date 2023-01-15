import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Game } from "../types/Games.types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Chip, Grid } from "@mui/material";
import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre } = content;
  const link = `/games/${id}`;
  return (

    <Card
      sx={{
        width: 345,
        backgroundColor: "#202020",
      }}
    >
      <CardActionArea sx={{ cursor: "default !important" }}>
        <CardMedia
          component="img"
          height="140"
          image={thumbnail}
          alt={`${title} logo`}
          sx={{ minWidth: 345 }}
        />
        <CardContent sx={{ height: "10rem" }}>
          <Typography gutterBottom variant="h5" component="div" color="azure">
            {title}
          </Typography>
          <Typography variant="body2" color={"azure"}>
            {short_description}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Chip label={genre} variant="outlined" sx={{ color: "azure" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.4rem",
                color: "azure",
                borderRadius: "50%",
                border: "1px solid azure",
                transition: "all 0.5s ease",
                "&:hover": {
                  borderColor: "magenta",
                  backgroundColor: "magenta",
                },
              }}
            >
              <Link to={link}>
                <ShoppingCartIcon />
              </Link>
            </Box>
          </Grid>
        </CardActions>
      </CardActionArea>
    </Card>

  );
};

export default GameCard;
