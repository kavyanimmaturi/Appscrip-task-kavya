import { useEffect, useState } from "react";
import leftArrow from "../assets/arrow-left.jpg";


function Products(){

  const [products, setProducts] = useState([]);
  


  const PRODUCTS_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log("Error while fetching products", error), []);
  })

 

  return (
    <div className="products-cont">
      <div className="filter-section">
        <div>
          <div className="checkbox-cont">
            <input type="checkbox" />
            <h1 className="checkbox-title">CUSTOMIZABLE</h1>
          </div>

          <div>

            <div className="filter-option">
              <h1 className="filter">IDEAL FOR</h1>
              <img src={leftArrow} alt="arrow" />
            </div>
            <p className="all">All</p>
          </div>

          <hr />
          <div>
            <div className="filter-option">
              <h1 className="filter">OCCASION</h1>
              <img src={leftArrow} alt="arrow" />
            </div>
            <p className="all">All</p>
          </div>
          <hr />
          <div>
            <div className="filter-option">
              <h1 className="filter">WORK</h1>
              <img src={leftArrow} alt="arrow" />
            </div>
            <p className="all">All</p>
          </div>
          <hr />

          <div>
            <div className="filter-option">
              <h1 className="filter">FABRIC</h1>
              <img src={leftArrow} alt="arrow" />
            </div>
            <p className="all">All</p>
          </div>
          <hr />

          <div>
            <div className="filter-option">
              <h1 className="filter">SEGMENT</h1>
              <img src={leftArrow} alt="arrow" />
            </div>
            <p className="all">All</p>
          </div>
          <hr />

          <div>
            <div className="filter-option">
              <h1 className="filter">SUITABLE FOR</h1>
              <img src={leftArrow} alt="arrow" />
            </div>
            <p className="all">All</p>
          </div>
          <hr />

          <div>
            <div className="filter-option">
              <h1 className="filter">RAW MATERIALS</h1>
              <img src={leftArrow} alt="arrow" />
            </div>
            <p className="all">All</p>
          </div>
          <hr />

          <div>
            <div className="filter-option">
              <h1 className="filter">PATTERN</h1>
              <img src={leftArrow} alt="arrow" />
            </div>
            <p className="all">All</p>
          </div>
          <hr />
        </div>
      
      </div>

      <div className="products-section">
        <h2 className="products-title">Products List </h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p className="product-desc">{product.description}</p>
              <p className="price">Rs.{product.price}/-</p>
            </div>

          ))}
        </div>
      </div>
    </div>




  )
}

export default Products


