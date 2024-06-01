from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def hello():
    return jsonify(message="Hello from Flask!")

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
