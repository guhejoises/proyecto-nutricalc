from pymongo import MongoClient
import certifi
from pymongo.errors import ConnectionFailure

MONGO_URI = 'mongodb+srv://jimimorison03:BjQDS0zuK3v9tKzA@cluster0.hcqwrty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
ca = certifi.where()

def dbConnectionPacientes():
    try:
        client = MongoClient(MONGO_URI, tlsCAFile=ca)
        db = client["pacientes"]
        return db
    except ConnectionFailure:
        print('Error de conexión con la base de datos')
        return None
