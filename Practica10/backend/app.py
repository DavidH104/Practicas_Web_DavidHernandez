from flask import Flask, request, jsonify
from flask_cors import CORS
from models.game_model import get_all_games, create_game, delete_game, update_game

app = Flask(__name__)
CORS(app)

@app.route('/games', methods=['GET'])
def get_games():
    return jsonify(get_all_games()), 200

@app.route('/games', methods=['POST'])
def add_game():
    data = request.json
    game_id = create_game(data)
    return jsonify({"message": "Videojuego agregado", "id": game_id}), 201

@app.route('/games/<id>', methods=['DELETE'])
def remove_game(id):
    result = delete_game(id)
    if result.deleted_count > 0:
        return jsonify({"message": "Juego eliminado"}), 200
    return jsonify({"message": "No encontrado"}), 404

@app.route('/games/<id>', methods=['PUT'])
def edit_game(id):
    data = request.json
    update_game(id, data)
    return jsonify({"message": "Actualizado"}), 200

if __name__ == '__main__':
    app.run(debug=True)