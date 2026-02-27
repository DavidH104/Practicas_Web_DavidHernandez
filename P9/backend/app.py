from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

client = MongoClient("mongodb://localhost:27017/")
db = client["escuelaDB"]
coleccion = db["alumnos"]

@app.route("/")
def inicio():
    return "API funcionando"

@app.route("/alumnos", methods=["GET"])
def obtener_alumnos():
    alumnos = list(coleccion.find({}, {"_id": 0}))
    return jsonify(alumnos)

@app.route("/alumnos", methods=["POST"])
def insertar_alumno():
    datos = request.json
    coleccion.insert_one(datos)
    return jsonify({"mensaje": "Alumno insertado correctamente"})

if __name__ == "__main__":
    app.run(debug=True)