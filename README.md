Here's the updated `README.md` file without any bold words:

---

# E-commerce Chatbot for Product Search and Purchase Assistance

This project implements a comprehensive sales chatbot designed for an e-commerce platform specializing in a specific product category (e.g., electronics, books, or textiles). The chatbot enables users to interact with the system to search for products, explore categories, and receive product recommendations based on their queries. The system also includes a mock e-commerce server and an API to process user queries and return relevant product data.

## Objective

The goal of this project is to enhance the user experience of an e-commerce platform by providing a chatbot interface that:
- Helps users search for products.
- Allows users to explore categories and subcategories.
- Provides product details based on specific user inputs (e.g., price, brand).
- Simulates an e-commerce backend with mock data.

## Features

- User Interface: 
  - Chatbot interface for users to interact with the platform.
  - The chatbot asks users what they need help with and responds based on their queries.
  - Dynamic product search and display based on categories and subcategories.
  - Ability to specify price ranges and brands, with filtered product results.

- Backend:
  - A Flask-based Python backend that simulates product data.
  - The backend handles user queries and provides filtered product information.
  - Mock inventory of 100+ products stored in a relational database (SQLite or PostgreSQL).

- Session Management:
  - User sessions are maintained to ensure continuous interaction.
  - Chat logs are stored for further analysis.

- Responsive Design:
  - The chatbot UI is fully responsive, optimized for desktop, tablet, and mobile devices.

## Tech Stack

### Frontend:
- React.js: For building the interactive user interface.
- HTML5 & CSS3: For structuring and styling the page.
- JavaScript: For handling dynamic interactions.

### Backend:
- Python (Flask): For creating a RESTful API and handling user queries.
- SQLite/PostgreSQL: For storing mock product data in a relational database.

### Tools & Libraries:
- Axios: For making API requests from the frontend to the backend.
- Bootstrap: For responsive layout and UI components.
- React Router: For routing between different components in React.

## Getting Started

To run this project on your local machine, follow these steps:

### Prerequisites

1. Install Node.js and npm (if not already installed).
2. Install Python 3.x (if not already installed).
3. Set up a virtual environment for Python.

### Frontend (React App)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-chatbot.git
   cd ecommerce-chatbot
   ```

2. Install the dependencies for the frontend:

   ```bash
   cd frontend
   npm install
   ```

3. Run the React app:

   ```bash
   npm start
   ```

   The React app will start and can be accessed on `http://localhost:3000`.

### Backend (Flask API)

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Set up a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install the required Python libraries:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask app:

   ```bash
   python app.py
   ```

   The Flask API will start and can be accessed on `http://localhost:5000`.

### Database Setup

1. The mock product data is populated in an SQLite database. You can modify the `populate_db.py` script to change or add more mock products if needed.
2. Ensure the backend API is running before testing the chatbot.

## Usage

1. Open the React app in your browser (`http://localhost:3000`).
2. Start interacting with the chatbot by typing "hi" to begin the conversation.
3. The chatbot will ask what you need help with (e.g., "laptop").
4. It will then display products based on the specified category or subcategory.
5. Users can enter price ranges and brands to further filter the results.

### Sample Conversation:

- User: "hi"
- Bot: "Hello! How can I help you today?"
- User: "I want a laptop"
- Bot: "Which subcategory are you interested in? (e.g., Gaming, Business, etc.)"
- User: "Gaming"
- Bot: "Here are the gaming laptops we have: [List of gaming laptops with details]."

## File Structure

```
ecommerce-chatbot/
├── backend/
│   ├── app.py            # Main Flask app
│   ├── product_routes.py # API routes for product search
│   ├── populate_db.py    # Script to populate mock product data
│   └── requirements.txt  # List of required Python packages
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Chatbot.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── Chatbot.css
│   └── package.json      # Node.js dependencies
└── README.md             # Project documentation
```

## Challenges and Solutions

1. Handling User Queries: We had to ensure the chatbot accurately recognized user queries and returned relevant product information. This was achieved by using a combination of string matching and category filtering.
   
2. Maintaining Sessions: We needed to handle session continuity across multiple interactions. This was done using React's state management to store and retrieve user inputs.

3. API Integration: The API needed to filter and return products based on categories, subcategories, price, and brand. This was solved by structuring the backend with query parameters and a mock database.

## Future Enhancements

- Natural Language Processing (NLP): Integrate NLP capabilities for more intelligent query understanding.
- Product Recommendations: Implement machine learning algorithms to suggest products based on user preferences and browsing history.
- Real-time Chat: Improve the chat experience by integrating real-time features like WebSockets for live conversations.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Key Sections in the `README.md`:

1. Project Overview: Provides an introduction and objectives of the project.
2. Tech Stack: Lists the technologies used in both frontend and backend.
3. Getting Started: Step-by-step guide to run the project locally.
4. Usage: Instructions for interacting with the chatbot.
5. File Structure: Breakdown of the project files.
6. Challenges and Solutions: Key problems faced during development and how they were solved.
7. Future Enhancements: Ideas for improving the system further.
8. License: Legal licensing information.

