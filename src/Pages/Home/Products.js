import React, { useEffect, useState } from 'react';
import Product from './Product';
// import { useQuery } from 'react-query';

const Products = () => {
    const [ products, setProducts ] = useState ([])

    /* const {data: products} = useQuery("products", ()=>
        fetch("products.json").then(res => res.json())
    ) */
    useEffect(()=>{
        fetch("products.json")
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <section className='bg-blue-50 p-12'>
            <div className="text-center mb-20">
                <div>
                    <h5 className='text-xl font-sans pb-2 '>OUR PRODUCTS</h5>
                    <h2 className='text-4xl font-bold text-primary'>Featured Products</h2>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {
                        products?.slice(0,6).reverse().map(product => <Product
                            product={product}
                             key={product._id}
                             ></Product>)
                    }
                </div>
            </div>
            
        </section>
    );
};

export default Products;