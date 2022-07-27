import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Game } from "../types/Games.types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Chip } from "@mui/material";

interface Props {
  content: Game;
}

const GameCard = ({ content }: Props): ReactElement => {
  const { id, title, thumbnail, short_description, genre } = content;
  const link = `/game/${id}`;
  return (
    <Link to={link}>
      <Card sx={{ width: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={thumbnail}
            alt={`${title} logo`}
            sx={{ minWidth: 345 }}
          />
          <CardContent sx={{ height: "10rem" }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {short_description}
            </Typography>
          </CardContent>
          <CardActions>
            <Chip label={genre} variant="outlined" />
          </CardActions>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default GameCard;
