import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const ProductList = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {

        getProducts();

    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:3000/products', 
        {
            headers:{
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        });
        result = await result.json();
        setProducts(result);

    }
    console.warn("products", products);

    const deleteProduct = async (id) => {
        let result = await fetch(`http://localhost:3000/product/${id}`, {
            method: "Delete"
        })
        result = await result.json();
        if (result) {
            getProducts();
        }

    }

    const searchHandle = async(event) => {
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:3000/search/${key}`);
            result = await result.json();
            if(result){
                setProducts(result)
            }
        } else{
            getProducts();
        }
    }



    return (
        <div className="product-list">
            <h1>Product List</h1>
            <input className="search-product-box" type="text" placeholder="Search Product"
                onChange={searchHandle} />
            <ul>
                <li>Sr. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.length >0 ? products.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                        <li>{item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>Delete</button>
                            <Link to={"/update/" + item._id} className="updatebtn" >Update</Link>
                        </li>
                    </ul>
                )
                : <h1>No Result Found</h1>
            }
        </div>
    )
}

export default ProductList;