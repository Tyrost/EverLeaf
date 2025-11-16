import os
from pymongo import MongoClient
import certifi
from dotenv import load_dotenv

load_dotenv()

class Connection:

    def __init__(self):
        self.__connection = self.__init_conn()
        self.db = self.__connection["db"]
        self.users = self.db["users"]
        self.farming_data = self.db["farming_data"]

    def __init_conn(self):
        MONGO_URI = os.getenv("MONGO_URI")
        return MongoClient(
            MONGO_URI,
            tls=True,
            tlsCAFile=certifi.where()
        )

    def gather_session(self):
        return self.__connection
