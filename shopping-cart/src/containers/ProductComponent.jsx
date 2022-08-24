import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";    
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Paper } from "@mui/material";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const rednderList = products.map((product) => {
    const { id, title, image, price, description } = product;
    return (
      <Link to={`/product/${id}`} key={id} className="linkTag">
        <Paper elevation={2}>
        <Card sx={{ width: 300, height: 500, marginTop: "2rem"}}>
          <CardMedia
            component="img"
            alt={title}
            image={image}
            style={{
                padding:"2rem",
                width: "250px",
                height:"250px"
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h1" fontSize="16px" component="div">
              {title.substr(0, 30)}...
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {description.substr(0, 100)}...
            </Typography>
            <Typography variant="h4">
                ${price}
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
        </Paper>
      </Link>
    );
  });
  return <Stack flexDirection="row" flexWrap="wrap" justifyContent="space-around" marginTop="4rem">{rednderList}</Stack>;
};

export default ProductComponent;
