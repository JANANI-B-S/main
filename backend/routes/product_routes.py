from flask import Blueprint, request, jsonify

product_routes = Blueprint("product_routes", __name__)

# Simulated product database (mock inventory)
products = [
    {"id": 1, "name": "Laptop", "category": "Electronics"},
    {"id": 2, "name": "Shoes", "category": "Fashion"},
    {"id": 3, "name": "Shirt", "category": "Fashion"},
    {"id": 4, "name": "Phone", "category": "Electronics"},
]

@product_routes.route("/api/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message").lower()

    if "electronics" in user_message:
        product_list = [p["name"] for p in products if p["category"] == "Electronics"]
        reply = f"Here are some electronics: {', '.join(product_list)}."
    elif "fashion" in user_message:
        product_list = [p["name"] for p in products if p["category"] == "Fashion"]
        reply = f"Here are some fashion items: {', '.join(product_list)}."
    else:
        reply = "I can help you with product categories like Electronics and Fashion. What would you like to explore?"

    return jsonify({"reply": reply})
