from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient("mongodb://localhost:27017/")
db = client["videojuegos_db"]
collection = db["games"]

def get_all_games():
    games = list(collection.find())
    for game in games:
        game["_id"] = str(game["_id"])
    return games

def create_game(data):
    result = collection.insert_one(data)
    return str(result.inserted_id)

def delete_game(id):
    return collection.delete_one({"_id": ObjectId(id)})

def update_game(id, data):
    return collection.update_one(
        {"_id": ObjectId(id)},
        {"$set": data}
    )