import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
const CardItem = (props) => {
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.item.image}
            alt="card image"
            className="card-img"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="text-capitalize myfont card-title"
            >
              {props.item.name}
              <span className="card-price myfont">{props.item.price}</span>
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="text.secondary"
              className="text-capitalize myfont"
            >
              {props.item.category}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="myfont"
            >
              {props.item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            className="myfont"
            onClick={() => {
              alert("Your Order Has been Placed.");
            }}
          >
            order now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
const Cards = (props) => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center flex-wrap gap-3">
        {props.Menu.map((item, idx) => {
          return <CardItem key={idx} item={item} />;
        })}
      </div>
    </>
  );
};

export default Cards;
