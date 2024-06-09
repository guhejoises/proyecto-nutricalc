from flask import Flask, request, jsonify, Response
from flask_cors import CORS
from pymongo import MongoClient
import certifi
import traceback
from pymongo.errors import ConnectionFailure

app = Flask(__name__)
CORS(app)  # Habilitar CORS para permitir solicitudes desde React

#prueba
# Conexión a la base de datos MongoDB
MONGO_URI = 'mongodb+srv://jimimorison03:BjQDS0zuK3v9tKzA@cluster0.hcqwrty.mongodb.net/?retryWrites=true&w=majority'
ca = certifi.where()


def dbConnectionPacientes():
    try:
        client = MongoClient(MONGO_URI, tls=True, tlsCAFile=ca)
        db = client["pacientes"]
        return db
    except ConnectionFailure as e:
        print(f'Error de conexión con la base de datos: {e}')
        return None


db = dbConnectionPacientes()

if db is None:
    print("Error al conectar con la base de datos. Asegúrate de que la URI y la conexión SSL son correctas.")
    exit(1)


# Guardar elemento
@app.route('/api/guardar_datos', methods=['POST'])
def receive_data():
    try:
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
        product = {
            "nombre": nombre,
            "apelPate": apelPate,
            "apelMate": apelMate,
            "correo": correo,
            "numero": numero,
            "gender": gender,
            "weight": weight,
            "dateOfBirth": dateOfBirth,
            "height": height,
            "circunferencia_brazo": circunferencia_brazo,
            "pliegue_triceps": pliegue_triceps,
            "actiFisica": actiFisica,
            "acidoUrico": acidoUrico,
            "albumina": albumina,
            "colesterol": colesterol,
            "globulina": globulina,
            "tension": tension,
            "hematocrito": hematocrito,
            "proteinas": proteinas,
            "triglicerido": triglicerido
        }

        result = products.insert_one(product)

        # Verificar si la inserción fue exitosa
        if result.inserted_id:
            return jsonify({"message": "Datos insertados con éxito", "inserted_id": str(result.inserted_id)}), 200
        else:
            return jsonify({"message": "Error al insertar los datos"}), 500
    except Exception as e:
        traceback.print_exc()
        return jsonify({"message": "Error interno del servidor", "error": str(e)}), 500


# Eliminar elemento
@app.route('/delete/<string:correo>', methods=['DELETE'])
def delete(correo):
    try:
        paciente = db['pacientes']
        result = paciente.delete_one({'correo': correo})

        if result.deleted_count == 1:
            return jsonify({"message": "Paciente eliminado con éxito"}), 200
        else:
            return jsonify({"message": "Error al eliminar el paciente"}), 404
    except Exception as e:
        traceback.print_exc()
        return jsonify({"message": "Error interno del servidor", "error": str(e)}), 500


# Editar elemento
@app.route('/edit/<string:correo_edit>', methods=['POST'])
def edit(correo_edit):
    try:
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
            "datosAntopometricos": {
                "circunferencia_brazo": data.get("circunferencia_brazo"),
                "pliegue_triceps": data.get("pliegue_triceps"),
            },
            "datosBiometricos": {
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
    except Exception as e:
        traceback.print_exc()
        return jsonify({"message": "Error interno del servidor", "error": str(e)}), 500


# Obtener elemento
@app.route('/obtener', methods=['GET'])
def obtener():
    try:
        products = db['pacientes']
        search_query = request.args.get('query', '')

        if search_query:
            # Buscar pacientes cuyo correo contenga la palabra de búsqueda
            pacientes = products.find({"correo": {"$regex": search_query, "$options": "i"}})
        else:
            # Obtener todos los pacientes
            pacientes = products.find()

        pacientes_list = []
        for paciente in pacientes:
            paciente['_id'] = str(paciente['_id'])  # Convertir ObjectId a string
            pacientes_list.append(paciente)

        return jsonify(pacientes_list), 200
    except Exception as e:
        traceback.print_exc()
        return jsonify({"message": "Error interno del servidor", "error": str(e)}), 500



# Obtener elementos
@app.route('/obtener_elementos', methods=['GET'])
def obtener_elementos():
    try:
        products = db['pacientes']

        # Obtener todos los documentos de la colección
        pacientes = products.find()

        # Convertir los documentos a una lista de diccionarios
        pacientes_list = []
        for paciente in pacientes:
            paciente['_id'] = str(paciente['_id'])  # Convertir ObjectId a string
            pacientes_list.append(paciente)

        return jsonify(pacientes_list), 200
    except Exception as e:
        traceback.print_exc()
        return jsonify({"message": "Error interno del servidor", "error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
