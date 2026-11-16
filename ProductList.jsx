
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./CartSlice";

const plants = [
  // Indoor plants
  { id: 1, name: "Snake Plant", price: 15, category: "Indoor Plants" },
  { id: 2, name: "Peace Lily", price: 18, category: "Indoor Plants" },
  { id: 3, name: "Aloe Vera", price: 12, category: "Indoor Plants" },
  { id: 4, name: "Spider Plant", price: 14, category: "Indoor Plants" },
  { id: 5, name: "Monstera", price: 25, category: "Indoor Plants" },
  { id: 6, name: "Money Plant", price: 10, category: "Indoor Plants" },

  // Outdoor plants
  { id: 7, name: "Rose Plant", price: 20, category: "Outdoor Plants" },
  { id: 8, name: "Hibiscus", price: 18, category: "Outdoor Plants" },
  { id: 9, name: "Jasmine", price: 16, category: "Outdoor Plants" },
  { id: 10, name: "Bougainvillea", price: 22, category: "Outdoor Plants" },
  { id: 11, name: "Marigold", price: 8, category: "Outdoor Plants" },
  { id: 12, name: "Lavender", price: 14, category: "Outdoor Plants" },

  // Succulents
  { id: 13, name: "Echeveria", price: 9, category: "Succulents" },
  { id: 14, name: "Jade Plant", price: 12, category: "Succulents" },
  { id: 15, name: "String of Pearls", price: 17, category: "Succulents" },
  { id: 16, name: "Haworthia", price: 11, category: "Succulents" },
  { id: 17, name: "Sedum", price: 10, category: "Succulents" },
  { id: 18, name: "Cactus", price: 13, category: "Succulents" }
];

const plantImage =
  "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Succulents"
  ];

  return (
    <div className="product-page">
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>
      </nav>

      <h1>Our Houseplants</h1>

      {categories.map((category) => (
        <section key={category} className="plant-category">
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => {
                const isAdded = cartItems.some(
                  (item) => item.id === plant.id
                );

                return (
                  <div className="plant-card" key={plant.id}>
                    <img
                      src={plantImage}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <h3>{plant.name}</h3>
                    <p>Price: ${plant.price}</p>

                    <button
                      disabled={isAdded}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isAdded ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
