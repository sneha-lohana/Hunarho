import React, { useEffect, useState } from 'react';
import './ProductList.css';

export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);

//     All: http://localhost:3000/products
// Smart Phones: http://localhost:3000/products?category=smartphones
// Laptops: http://localhost:3000/products?category=laptops
// Perfumes: http://localhost:3000/products?category=fragrances
// Skin Care: http://localhost:3000/products?category=skincare
// Groceries: http://localhost:3000/products?category=groceries
// Home Decore: http://localhost:3000/products?category=home-decoration

  return (
    <div className='product-list'>
        <h3>Product List</h3>
        <div className='filter-btns'>
            <button>All</button>
            <button>Smart Phones</button>
            <button>Laptops</button>
            <button>Perfumes</button>
            <button>Skin Care</button>
            <button>Groceries</button>
            <button>Home Decore</button>
        </div>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <strong>{product.title}</strong>
                    <p>${product.price}</p>
                    <p>{product.description}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
