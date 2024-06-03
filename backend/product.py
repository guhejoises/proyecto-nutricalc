class Product:
    def __init__(self, nombre, apelPate, apelMate, correo, numero, gender, weight,
      dateOfBirth, height, circunferencia_brazo, pliegue_triceps, actiFisica, acidoUrico,
      albumina, colesterol, globulina, hematocrito, proteinas, tension, triglicerido):
        
        self.nombre = nombre
        self.apelPate = apelPate
        self.apelMate = apelMate
        self.correo = correo
        self.numero = numero
        self.gender = gender
        self.weight = weight
        self.dateOfBirth = dateOfBirth
        self.height = height
        self.circunferencia_brazo = circunferencia_brazo
        self.pliegue_triceps = pliegue_triceps
        self.actiFisica = actiFisica
        self.acidoUrico = acidoUrico
        self.albumina = albumina
        self.colesterol = colesterol
        self.globulina = globulina
        self.hematocrito = hematocrito
        self.proteinas = proteinas
        self.tension = tension
        self.triglicerido = triglicerido

    def toDBCollection(self):
        return{
            'nombre' : self.nombre,
            'apelPate' : self.apelPate,
            'apelMate' : self.apelMate,
            'correo' : self.correo,
            'numero' : self.numero,
            'gender' : self.gender,
            'weight' : self.weight,
            'dateOfBirth' : self.dateOfBirth,
            'heigth' : self.height,
            'actiFisica' : self.actiFisica,
            'datosAntopometricos' : {
                'circunferencia_brazo' : self.circunferencia_brazo,
                'pliegue_triceps' : self.pliegue_triceps,
            },
            'datosBiometricos' : {
                'acidoUrico' : self.acidoUrico,
                'albumina' : self.albumina,
                'colesterol' : self.colesterol,
                'globulina' : self.globulina,
                'hematocrito' : self.hematocrito,
                'proteinas' : self.proteinas,
                'tension' : self.tension,
                'triglicerido' : self.triglicerido
            }
        }