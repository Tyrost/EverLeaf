import pandas as pd
from database.Connection import Connection
import random
from constants import FARM_FIELDS

class Commander(Connection):

    def __init__(self):
        super().__init__()

    def generate_farm_id(self):
        num = random.randint(0, 99999999)
        farm_id = f"FARM{num:08d}"
        
        while self.farming_data.find_one({"farm_id": farm_id}):
            num = random.randint(0, 99999999)
            farm_id = f"FARM{num:08d}"

        return farm_id

    # User Routes
    def get_user(self, user_id):
        user = self.users.find_one({"user_id": user_id})
        if user:
            user.pop("_id", None)
        return user

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
    
    def get_all_farms_basic(self):
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
        farm = self.farming_data.find_one({"farm_id": farm_id})
        if farm:
            farm.pop("_id", None)
        return farm
    
    def create_farm(self, farm_data):
        farm_id = self.generate_farm_id()
        farm_data["farm_id"] = farm_id

        self.farming_data.insert_one(farm_data)

        return {"message": "Farm created", "farmId": farm_id}, 200
    
    def update_farm(self, farm_id, farm_data):
        self.farming_data.find_one_and_update(
            {"farm_id": farm_id},
            {"$set": farm_data},
            return_document=True
        )

        return {"message": "Farm updated"}, 200

    # Seeder
    def seed_database(self):
        csv_path = "data/farming_data.csv"
        df = pd.read_csv(csv_path)

        if self.farming_data.count_documents({}) > 0:
            return

        for _, row in df.iterrows():
            doc = {col: (None if pd.isna(val) else val) for col, val in row.items()}
            self.farming_data.insert_one(doc)