from flask import Flask,request,jsonify
from flask_cors import CORS

from models.game_model import get_all_games,create_game,delete_game,update_game

app = Flask(__name__)
CORS(app)


@app.route("/games",methods=["GET"])
def get_games():

    games = get_all_games()

    return jsonify(games)


@app.route("/games",methods=["POST"])
def add_game():

    data = request.json

    game_id = create_game(data)

    return jsonify({

        "message":"Juego agregado",
        "id":game_id

    })


@app.route("/games/<id>",methods=["DELETE"])
def delete_game_route(id):

    result = delete_game(id)

    if result.deleted_count > 0:

        return jsonify({"message":"Juego eliminado"})

    else:

        return jsonify({"message":"Juego no encontrado"})


@app.route("/games/<id>",methods=["PUT"])
def update_game_route(id):

    data = request.json

    result = update_game(id,data)

    if result.modified_count > 0:

        return jsonify({"message":"Juego actualizado"})

    else:

        return jsonify({"message":"Sin cambios"})


if __name__ == "__main__":

    app.run(debug=True)