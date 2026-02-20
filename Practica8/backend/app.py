from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Permite peticiones desde Angular

# 🔹 Conexión a MongoDB (local)
cliente = MongoClient("mongodb://localhost:27017/")
db = cliente["cartelera_cultural"]
coleccion = db["eventos"]

@app.route("/")
def inicio():
    return "API Cartelera Cultural funcionando"

@app.route("/eventos", methods=["GET"])
def obtener_eventos():
    try:
        eventos = list(coleccion.find({}, {"_id": 0}))
        print("EVENTOS ENCONTRADOS:", eventos)  # 👈 depuración
        return jsonify(eventos)
    except Exception as e:
        print("ERROR MONGO:", e)
        return jsonify({"error": "Error al obtener eventos"}), 500

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
