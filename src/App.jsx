import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // 1. State for dark mode (boolean)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. State for cart management (array of strings or objects)
  const [cart, setCart] = useState([]);

  // 3. State for category filtering (string)
  const [category, setCategory] = useState('all');

  // Helper function to add items to cart
  const handleAddToCart = (productName) => {
    setCart([...cart, productName]);
  };

  // Helper function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // Apply a conditional class or style based on isDarkMode
    <div className={isDarkMode ? 'dark-app' : 'light-app'} style={{ 
      backgroundColor: isDarkMode ? '#333' : '#fff', 
      color: isDarkMode ? '#fff' : '#000',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Pass state and the toggle function as props */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <div style={{ margin: '20px 0' }}>
        <label>Filter by Category: </label>
        {/* Update state when the dropdown changes */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Vegetables">Vegetables</option>
        </select>
      </div>

      {/* Pass the category and the add-to-cart function to the list */}
      <ProductList selectedCategory={category} onAddToCart={handleAddToCart} />

      {/* Render the Cart and pass the items */}
      <Cart cartItems={cart} />
    </div>
  )
}

export default App