import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const useProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    // using IIFE with axios load product
    (async () => {
      const { data } = await axios.get(
        `https://glacial-bayou-51669.herokuapp.com/products/${id}`
      );
      setProduct(data);
    })();
  }, [id]);
  return [product, setProduct];
};

export default useProduct;
