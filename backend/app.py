from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from product import Product
import databasePacientes as dbase

db = dbase.dbConnectionPacientes()

app = Flask(__name__)
CORS(app)  # Habilitar CORS para permitir solicitudes desde React

#Method Post
@app.route('/api/guardar_datos', methods=['POST'])
def receive_data():
    data = request.json
    products = db['pacientes']
    nombre = data.get("nombre")
    apelPate = data.get("apelPate")
    apelMate = data.get("apelMate")
    correo = data.get("correo")
    numero = data.get("numero")
    gender = data.get("gender")
    weight = data.get("weight")
    dateOfBirth = data.get("dateOfBirth")
    height = data.get("height")
    circunferencia_brazo = data.get("circunferencia_brazo")
    pliegue_triceps = data.get("pliegue_triceps")
    actiFisica = data.get("actiFisica")
    acidoUrico = data.get("acidoUrico")
    albumina = data.get("albumina")
    colesterol = data.get("colesterol")
    globulina = data.get("globulina")
    tension = data.get("tension")
    hematocrito = data.get("hematocrito")
    proteinas = data.get("proteinas")
    triglicerido = data.get("triglicerido")

    # Inserta los datos en MongoDB
    product = Product(nombre, apelPate, apelMate, correo, numero, gender, weight,
      dateOfBirth, height, circunferencia_brazo, pliegue_triceps, actiFisica, acidoUrico,
      albumina, colesterol, globulina, hematocrito, proteinas, tension, triglicerido)
    
    result = products.insert_one(product.toDBCollection())

    # Verificar si la inserción fue exitosa
    if result.inserted_id:
        return jsonify({"message": "Datos insertados con éxito", "inserted_id": str(result.inserted_id)}), 200
    else:
        return jsonify({"message": "Error al insertar los datos"}), 500

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True)
