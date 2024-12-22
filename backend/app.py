from flask import Flask, jsonify, request

app = Flask(__name__)

# Mock dataset for products
mock_products = {
    "electronics": {
        "laptops": [
            {"name": "Dell XPS 13", "price": 1200, "brand": "Dell"},
            {"name": "MacBook Pro", "price": 1500, "brand": "Apple"},
            {"name": "HP Spectre x360", "price": 1350, "brand": "HP"},
            {"name": "Lenovo ThinkPad X1", "price": 1100, "brand": "Lenovo"},
            {"name": "Asus ROG Zephyrus", "price": 1600, "brand": "Asus"}
        ],
        "smartphones": [
            {"name": "iPhone 14", "price": 999, "brand": "Apple"},
            {"name": "Samsung Galaxy S22", "price": 899, "brand": "Samsung"},
            {"name": "Google Pixel 7", "price": 749, "brand": "Google"},
            {"name": "OnePlus 9 Pro", "price": 1069, "brand": "OnePlus"},
            {"name": "Xiaomi Mi 11", "price": 749, "brand": "Xiaomi"}
        ],
        "accessories": [
            {"name": "Apple AirPods Pro", "price": 250, "brand": "Apple"},
            {"name": "Sony WH-1000XM4", "price": 350, "brand": "Sony"},
            {"name": "Logitech MX Master 3 Mouse", "price": 100, "brand": "Logitech"}
        ]
    },
    "books": {
        "fiction": [
            {"name": "The Great Gatsby", "price": 15, "brand": "Penguin"},
            {"name": "1984", "price": 12, "brand": "Harvill Secker"},
            {"name": "Moby Dick", "price": 18, "brand": "Random House"},
            {"name": "To Kill a Mockingbird", "price": 14, "brand": "HarperCollins"},
            {"name": "Pride and Prejudice", "price": 10, "brand": "Penguin Classics"}
        ],
        "nonFiction": [
            {"name": "Sapiens", "price": 20, "brand": "Harper"},
            {"name": "Educated", "price": 16, "brand": "Random House"},
            {"name": "Becoming", "price": 18, "brand": "Crown Publishing"}
        ]
    },
    "clothing": {
        "shirts": [
            {"name": "Cotton Shirt", "price": 30, "brand": "H&M"},
            {"name": "Denim Shirt", "price": 45, "brand": "Levi's"},
            {"name": "Flannel Shirt", "price": 50, "brand": "Uniqlo"},
            {"name": "T-shirt", "price": 20, "brand": "Nike"}
        ],
        "jeans": [
            {"name": "Slim Fit Jeans", "price": 60, "brand": "Levi's"},
            {"name": "Straight Leg Jeans", "price": 55, "brand": "Wrangler"},
            {"name": "Skinny Jeans", "price": 50, "brand": "American Eagle"}
        ]
    },
    "furniture": {
        "sofas": [
            {"name": "Leather Sofa", "price": 800, "brand": "IKEA"},
            {"name": "Sectional Sofa", "price": 1200, "brand": "Ashley Furniture"},
            {"name": "Modern Sofa", "price": 1000, "brand": "Wayfair"}
        ],
        "tables": [
            {"name": "Wooden Dining Table", "price": 400, "brand": "IKEA"},
            {"name": "Glass Coffee Table", "price": 200, "brand": "Wayfair"},
            {"name": "Wooden Coffee Table", "price": 300, "brand": "Walmart"}
        ]
    }
}

@app.route('/api/products', methods=['GET'])
def get_products():
    category = request.args.get('category')
    subcategory = request.args.get('subcategory')
    min_price = request.args.get('min_price', type=int)
    max_price = request.args.get('max_price', type=int)

    # Validate the category and subcategory
    if category not in mock_products or subcategory not in mock_products[category]:
        return jsonify({"error": "Invalid category or subcategory"}), 400

    # Get products based on category and subcategory
    products = mock_products[category][subcategory]

    # Filter products by price range if specified
    if min_price is not None and max_price is not None:
        products = [product for product in products if min_price <= product['price'] <= max_price]

    return jsonify(products)

if __name__ == '__main__':
    app.run(debug=True)
