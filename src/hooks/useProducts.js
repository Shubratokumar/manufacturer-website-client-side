import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // using IIFE with axios load product
    (async () => {
      const { data } = await axios.get(
        "https://glacial-bayou-51669.herokuapp.com/products"
      );
      setProducts(data);
    })();
  }, []);
  return [products, setProducts];
};

export default useProducts;
