from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/login')
def hello():
    return "Hello World2!"

if __name__ == '__main__':
    app.run('139.162.208.159', port='8080')
    # app.run('localhost', port='8080')