# app.py

from flask import Flask, jsonify, request
from flask_cors import CORS
from commander import Commander
from constants import FARM_FIELDS

app = Flask(__name__)
CORS(app)

cmd = Commander()
cmd.seed_database()

@app.route("/")
def index():
    return "Hello, World!"

@app.route("/api/users", methods=["POST"])
def new_user():
    data = request.get_json()

    user_id = data.get("user_id")

    if not user_id:
        return jsonify({"status": "error", "response": "Unauthorized"}), 401

    result, code = cmd.create_user(user_id, data)

    status = "error" if code >= 400 else "success"

    return jsonify({"status": status, "response": result}), code

@app.route("/api/users/<user_id>", methods=["GET"])
def get_user(user_id):
    user = cmd.get_user(user_id)

    if not user:
        return jsonify({"status": "error","response": "User not found"}), 404

    return jsonify({"status": "success", "response": user}), 200

@app.route("/api/farms", methods=["GET", "POST"])
def farms():
    #
    #
    # Parameters route
    # "x": [. . .], "y": [. . .]
    # TODO Implement get_farm_field(field) in commander.py
    #
    #
    if request.method == "GET":
        params = request.args.get("params")
        if params:
            clean = params.replace("[", "").replace("]", "")
            field_list = [f.strip() for f in clean.split(",") if f.strip()]

            farm_data = cmd.get_farm_params(field_list)

            return jsonify({
                "status": "success",
                "response": farm_data
            }), 200
        else:
            farms = cmd.get_all_farms()
            return jsonify({
                "status": "success",
                "response": farms
            }), 200
    
    elif request.method == "POST":
        data = request.get_json()

        if not data:
            return jsonify({
                "status": "error",
                "response": "Missing farm data"
            }), 400

        farm_data = {
            field: data.get(field)
            for field in FARM_FIELDS
        }

        result, code = cmd.create_farm(farm_data)

        return jsonify({
            "status": "success",
            "response": result
        }), code

@app.route("/api/farms/basic", methods=["GET"])
def get_farms_basic():
    farms = cmd.get_all_farms_basic()
    return jsonify({
        "status": "success",
        "response": farms
    }), 200

@app.route("/api/farms/range/<parameter>", methods=["GET"])
def get_range(parameter):
    range = cmd.get_range(parameter)

    return jsonify({
        "status": "success",
        "response": range
    }), 200

@app.route("/api/farms/regression", methods=["GET"])
def get_regression():
    feature_x = request.args.get("feature_x")
    feature_y = request.args.get("feature_y")
    value = request.args.get("x_value")
    regression = cmd.get_regression(feature_x, feature_y, value)

    return jsonify({
        "status": "success",
        "response": regression
    }), 200

@app.route("/api/farms/health", methods=["GET"])
def get_farms_health():
    farms_data = cmd.get_farms_health()
    return jsonify({
        "status": "success",
        "response": farms_data
    }), 200

@app.route("/api/farms/fields/<field>", methods=["GET"])
def get_farm_field(field):
    #
    #
    # Input field, get 
    # "region": <field avg>
    # ex. "South India": 1.72839
    #
    #
    if request.method == "GET":
        farm_data = cmd.get_farm_field(field)
        if not farm_data:
            return jsonify({"status": "error", "response": "Farm not found"}), 404

        return jsonify({
            "status": "success",
            "response": farm_data
        }), 200

@app.route("/api/farms/<farm_id>", methods=["GET", "PUT"])
def get_farm(farm_id):
    if request.method == "GET":
        farm = cmd.get_farm(farm_id)
        if not farm:
            return jsonify({"status": "error", "response": "Farm not found"}), 404

        return jsonify({
            "status": "success",
            "response": farm
        }), 200
    elif request.method == "PUT":
        data = request.get_json()

        if not data:
            return jsonify({
                "status": "error",
                "response": "Missing farm data"
            }), 400
        
        farm = cmd.get_farm(farm_id)

        if not farm:
            return jsonify({
                "status": "error",
                "response": "Farm not found"
            }), 404
        
        result, code = cmd.update_farm(farm_id, data)
        
        return jsonify({
            "status": "success",
            "response": result
        }), code


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)