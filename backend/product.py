class Product:
    def __init__(self, nombre, apelPate, apelMate):
        self.nombre = nombre
        self.apelPate = apelPate
        self.apelMate = apelMate

    def toDBCollection(self):
        return{
            'nombre' : self.nombre,
            'apelPate' : self.apelPate,
            'apelMate' : self.apelMate
        }