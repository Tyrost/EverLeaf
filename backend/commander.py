import pandas as pd
from connection import Connection

class Commander(Connection):

    def __init__(self):
        super().__init__()

    # User Routes
    def create_user(self, user_id, username):
        existing = self.users.find_one({"user_id": user_id})
        if existing:
            return {"error": "User already exists"}, 409

        self.users.insert_one({
            "user_id": user_id,
            "username": username
        })

        return {"message": "Profile created", "userId": user_id}, 200

    # Farm Routes
    def get_all_farms(self):
        return list(self.farming_data.find({}, {"_id": 0}))
    
    def get_all_farms_overview(self):
        farms_raw = list(self.farming_data.find({}, {"_id": 0}))
        farms = []

        for farm in farms_raw:
            farms.append({
                "name": farm.get("name"),
                "coordinates": [
                    farm.get("longitude"), farm.get("latitude")
                ],
                "health_index": 60.0,
                "location": farm.get("location"),
            })

        return farms

    def get_farm(self, farm_id):
        return self.farming_data.find_one({"farm_id": farm_id})

    # Seeder
    def seed_database(self):
        csv_path = "data/farming_data.csv"
        df = pd.read_csv(csv_path)

        if self.farming_data.count_documents({}) > 0:
            return

        for _, row in df.iterrows():
            doc = {col: (None if pd.isna(val) else val) for col, val in row.items()}
            self.farming_data.insert_one(doc)
