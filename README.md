# EverLeaf

Super awesome readme

Routes:

@app.route("/api/farms", methods=["GET"])
Gets all farms and their data
response:
    [
        {"farm_id": "FARM0001", "region": "North India", "crop_type": "Wheat", ...},
        {"farm_id": "FARM0002", ...},
        { ... }
    ]

@app.route("/api/farms/basic", methods=["GET"])
Gets basic info about all farms
response:
    [
        {
            "name": "Autumn Acres",
            "coordinates": [
                123.456, 123.456
            ],
            "health_index": 60.0,
            "location": farm.get("location"),
        },
        ...
    ]


@app.route("/api/farms/range/<parameter>", methods=["GET"])
Given a parameter (ex. rainfall_mm), output a range [min, max]
response:
    [0, 250]


@app.route("/api/farms/regression", methods=["GET"])
Given feature_x, feature_y, and x_value, output a list of x points, y points, value (int)
response:
    [
        [x1, x2, ... xn],
        [y1, y2, ... yn],
        value (int),
    ],


@app.route("/api/farms/health", methods=["GET"])
Gets the health of all farms
response:
    [
        {"health_index": 20, "longitude": 123, "latitude": 123 },
        {"health_index": 10, "longitude": 123, "latitude": 123 },
        { ... },
    ]


@app.route("/api/farms/fields/<field>", methods=["GET"])
Given a field (ex. rainfall_mm), output averages for each region based on each region
response:
    [
        {"North India": 75.62},
        {"South USA": 89.91},
        {"Central USA": 212.01},
        ...
    ]


@app.route("/api/farms/<farm_id>", methods=["GET", "PUT"])
Get all info about a specific farm given a farm_id
response:
    [
        {"farm_id": "FARM0001, "region": "North India", ...}
    ]