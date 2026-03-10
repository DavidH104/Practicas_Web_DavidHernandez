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

    result = collection.delete_one({"_id": ObjectId(id)})

    return result


def update_game(id,data):

    result = collection.update_one(

        {"_id": ObjectId(id)},

        {
            "$set": {
                "nombre": data["nombre"],
                "genero": data["genero"],
                "precio": data["precio"],
                "imagenUrl": data["imagenUrl"]
            }

        }

    )

    return result