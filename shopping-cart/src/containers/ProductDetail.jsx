import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import { Stack, Divider, Typography } from "@mui/material";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProducts(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <Stack flexDirection="row" padding="8rem" justifyContent="center" >
      <img
        src={product.image}
        style={{ width: "500px", height: "500px", paddingTop: "2rem" }}
      ></img>
      <Divider orientation="vertical" flexItem>
        {" "}
      </Divider>
      <Stack padding="3rem">
        <Typography variant="h3" width="70%">{product.title}</Typography>
        <Typography variant="h4" mt="1rem" width="50%">${product.price}</Typography>
        <Typography variant="body1" mt="1rem" width="50%">{product.description}</Typography>
      </Stack>
    </Stack>
  );
};

export default ProductDetail;
