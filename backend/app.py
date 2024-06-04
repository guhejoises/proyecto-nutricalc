from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from product import Product
import databasePacientes as dbase

db = dbase.dbConnectionPacientes()

app = Flask(__name__)
CORS(app)  # Habilitar CORS para permitir solicitudes desde React

#Guardar elemento
@app.route('/api/guardar_datos', methods=['POST'])
def receive_data():
    data = request.json
    products = db['pacientes']
    
    # Se obtienen los datos del paciente
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
    
    # Verificar si ya existe un paciente con el mismo correo
    if products.find_one({"correo": correo}):
        return jsonify({"message": "El correo electrónico ya está registrado"}), 400

    # Inserta los datos en MongoDB
    product = Product(nombre, apelPate, apelMate, correo, numero, gender, weight,
                      dateOfBirth, height, circunferencia_brazo, pliegue_triceps, actiFisica, 
                      acidoUrico, albumina, colesterol, globulina, hematocrito, proteinas, 
                      tension, triglicerido)
    
    result = products.insert_one(product.toDBCollection())

    # Verificar si la inserción fue exitosa
    if result.inserted_id:
        return jsonify({"message": "Datos insertados con éxito", "inserted_id": str(result.inserted_id)}), 200
    else:
        return jsonify({"message": "Error al insertar los datos"}), 500

#Eliminar elemento
@app.route('/delete/<string:correo>', methods=['DELETE'])
def delete(correo):
    paciente = db['pacientes']
    result = paciente.delete_one({'correo': correo})

    if result.deleted_count == 1:
        return jsonify({"message": "Paciente eliminado con éxito"}), 200
    else:
        return jsonify({"message": "Error al eliminar el paciente"}), 404

#Editar elemento
@app.route('/edit/<string:correo_edit>', methods=['POST'])
def edit(correo_edit):
    data = request.json
    products = db['pacientes']
    
    # Se obtienen los datos del paciente
    update_fields = {
        "nombre": data.get("nombre"),
        "apelPate": data.get("apelPate"),
        "apelMate": data.get("apelMate"),
        "numero": data.get("numero"),
        "gender": data.get("gender"),
        "weight": data.get("weight"),
        "dateOfBirth": data.get("dateOfBirth"),
        "height": data.get("height"),
        "actiFisica": data.get("actiFisica"),
        "datosAntopometricos" : {
            "circunferencia_brazo": data.get("circunferencia_brazo"),
            "pliegue_triceps": data.get("pliegue_triceps"),
        },
        "datosBiometricos" : {
            "acidoUrico": data.get("acidoUrico"),
            "albumina": data.get("albumina"),
            "colesterol": data.get("colesterol"),
            "globulina": data.get("globulina"),
            "tension": data.get("tension"),
            "hematocrito": data.get("hematocrito"),
            "proteinas": data.get("proteinas"),
            "triglicerido": data.get("triglicerido")
        }
    }

    result = products.update_one({'correo': correo_edit}, {'$set': update_fields})

    if result.modified_count == 1:
        return jsonify({"message": "Datos actualizados con éxito"}), 200
    else:
        return jsonify({"message": "Error al actualizar los datos o no se encontraron cambios"}), 404

#Obtener elemento
@app.route('/obtener/<string:correo_obtener>', methods=['GET'])
def obtener(correo_obtener):
    products = db['pacientes']
    
    # Buscar el paciente por correo
    paciente = products.find_one({"correo": correo_obtener})
    
    if paciente:
        # Convertir ObjectId a string
        paciente['_id'] = str(paciente['_id'])
        return jsonify(paciente), 200
    else:
        return jsonify({"message": "Paciente no encontrado"}), 404
    
# Obtener elementos
@app.route('/obtener_elementos', methods=['GET'])
def obtener_elementos():
    products = db['pacientes']
    
    # Obtener todos los documentos de la colección
    pacientes = products.find()
    
    # Convertir los documentos a una lista de diccionarios
    pacientes_list = []
    for paciente in pacientes:
        paciente['_id'] = str(paciente['_id'])  # Convertir ObjectId a string
        pacientes_list.append(paciente)
    
    return jsonify(pacientes_list), 200



if __name__ == '__main__':
    app.run(debug=True)
