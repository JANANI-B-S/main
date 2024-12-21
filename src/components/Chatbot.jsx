import React, { useState } from 'react';
import './Chatbot.css';


// Predefined valid categories, subcategories, and products
const validCategories = ["electronics", "books", "clothing", "furniture"];
const mockProducts = {
  electronics: {
    laptops: [
      { name: "Dell XPS 13", price: 1200, brand: "Dell" },
      { name: "MacBook Pro", price: 1500, brand: "Apple" },
      { name: "HP Spectre x360", price: 1350, brand: "HP" },
      { name: "Lenovo ThinkPad X1", price: 1100, brand: "Lenovo" },
      { name: "Asus ROG Zephyrus", price: 1600, brand: "Asus" }
    ],
    smartphones: [
      { name: "iPhone 14", price: 999, brand: "Apple" },
      { name: "Samsung Galaxy S22", price: 899, brand: "Samsung" },
      { name: "Google Pixel 7", price: 749, brand: "Google" },
      { name: "OnePlus 9 Pro", price: 1069, brand: "OnePlus" },
      { name: "Xiaomi Mi 11", price: 749, brand: "Xiaomi" }
    ],
    accessories: [
      { name: "Apple AirPods Pro", price: 250, brand: "Apple" },
      { name: "Sony WH-1000XM4", price: 350, brand: "Sony" },
      { name: "Logitech MX Master 3 Mouse", price: 100, brand: "Logitech" }
    ]
  },
  books: {
    fiction: [
      { name: "The Great Gatsby", price: 15, brand: "Penguin" },
      { name: "1984", price: 12, brand: "Harvill Secker" },
      { name: "Moby Dick", price: 18, brand: "Random House" },
      { name: "To Kill a Mockingbird", price: 14, brand: "HarperCollins" },
      { name: "Pride and Prejudice", price: 10, brand: "Penguin Classics" }
    ],
    nonFiction: [
      { name: "Sapiens", price: 20, brand: "Harper" },
      { name: "Educated", price: 16, brand: "Random House" },
      { name: "Becoming", price: 18, brand: "Crown Publishing" }
    ]
  },
  clothing: {
    shirts: [
      { name: "Cotton Shirt", price: 30, brand: "H&M" },
      { name: "Denim Shirt", price: 45, brand: "Levi's" },
      { name: "Flannel Shirt", price: 50, brand: "Uniqlo" },
      { name: "T-shirt", price: 20, brand: "Nike" }
    ],
    jeans: [
      { name: "Slim Fit Jeans", price: 60, brand: "Levi's" },
      { name: "Straight Leg Jeans", price: 55, brand: "Wrangler" },
      { name: "Skinny Jeans", price: 50, brand: "American Eagle" }
    ]
  },
  furniture: {
    sofas: [
      { name: "Leather Sofa", price: 800, brand: "IKEA" },
      { name: "Sectional Sofa", price: 1200, brand: "Ashley Furniture" },
      { name: "Modern Sofa", price: 1000, brand: "Wayfair" }
    ],
    tables: [
      { name: "Wooden Dining Table", price: 400, brand: "IKEA" },
      { name: "Glass Coffee Table", price: 200, brand: "Wayfair" },
      { name: "Wooden Coffee Table", price: 300, brand: "Walmart" }
    ]
  }
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [priceRange, setPriceRange] = useState(null);

  const sendMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: "user" }]);
  };

  const botResponse = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, sender: "bot" }]);
  };

  const handleUserInput = async (e) => {
    e.preventDefault();
    sendMessage(userInput);

    // Greet the user initially and ask for the category
    if (!category) {
      if (validCategories.includes(userInput.toLowerCase())) {
        setCategory(userInput.toLowerCase());
        botResponse(`You selected ${userInput}. What subcategory do you want to explore?`);
      } else {
        botResponse("Sorry, that's not a valid category. Please choose from electronics, books, clothing, or furniture.");
      }
      setUserInput("");
      return;
    }

    // Ask for subcategory selection
    if (!subcategory) {
      if (mockProducts[category] && mockProducts[category][userInput.toLowerCase()]) {
        setSubcategory(userInput.toLowerCase());
        botResponse(`You selected ${userInput}. These are some products in ${category}:`);
        const products = mockProducts[category][userInput.toLowerCase()];
        products.forEach(product => {
          botResponse(`${product.name} - $${product.price} (${product.brand})`);
        });
      } else {
        botResponse(`Sorry, no subcategory found for "${userInput}" in ${category}. Please choose from the available options.`);
      }
      setUserInput("");
      return;
    }

    // Filter by price if needed
    if (subcategory && !priceRange) {
      botResponse("Would you like to filter by price? Type 'yes' or 'no'.");
      setPriceRange(userInput.toLowerCase());
      setUserInput("");
      return;
    }

    if (priceRange && priceRange === "yes") {
      botResponse("Please provide a price range (e.g., 1000-1500).");
      setPriceRange(userInput);
      setUserInput("");
      return;
    }

    if (priceRange && priceRange !== "yes") {
      const [minPrice, maxPrice] = priceRange.split("-").map(price => parseInt(price, 10));
      const filteredProducts = mockProducts[category][subcategory].filter(product => product.price >= minPrice && product.price <= maxPrice);
      if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
          botResponse(`${product.name} - $${product.price} (${product.brand})`);
        });
      } else {
        botResponse("No products found within this price range.");
      }
      setUserInput("");
      return;
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className={message.sender === "bot" ? "bot-message" : "user-message"}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleUserInput} className="user-input-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type here..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;
