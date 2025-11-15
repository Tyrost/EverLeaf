# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
from commander import Commander

app = Flask(__name__)
CORS(app)

cmd = Commander()
cmd.seed_database()

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/api/users/profile", methods=["POST"])
def new_user_data():
    data = request.get_json()

    user_id = data.get("user_id")
    username = data.get("username")

    if not user_id:
        return jsonify({"status": "error", "message": "Unauthorized"}), 401

    result, code = cmd.create_user(user_id, username)

    return jsonify({
        "status": "success",
        "response": result
    }), code

@app.route("/api/farms", methods=["GET"])
def get_farms():
    farms = cmd.get_all_farms()
    return jsonify({
        "status": "success",
        "response": farms
    }), 200

@app.route("/api/farms/overview", methods=["GET"])
def get_farms_overview():
    farms = cmd.get_all_farms_overview()
    return jsonify({
        "status": "success",
        "response": farms
    }), 200

@app.route("/api/farms/<farm_id>", methods=["GET"])
def get_farm(farm_id):
    farm = cmd.get_farm(farm_id)
    if not farm:
        return jsonify({"status": "error", "message": "Farm not found"}), 404

    return jsonify({
        "status": "success",
        "response": farm
    }), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
