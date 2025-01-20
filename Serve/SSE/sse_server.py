from flask import Flask, Response, render_template
from flask_cors import CORS
import time
from jinja2 import Template, Environment, FileSystemLoader

app = Flask(__name__)
env = Environment(loader=FileSystemLoader('templates')) 
# CORS(app)
# CORS(app, resources={r"/stream": {"origins": "http://127.0.0.1:3000"}})
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/stream')
def stream():
    def generate():
        count = 0
        while True:
            data = {"message": f"Message {count}"}
            yield f"data: {data}\n\n"
            count += 1
            time.sleep(1)  # Simulate data updates

    return Response(generate(), mimetype="text/event-stream")

if __name__ == '__main__':
    app.run(debug=True)