from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)

openai.api_key = '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'
CORS(app)

@app.route('/')
def serve_angular_app():
    return app.send_static_file('index.html')

@app.route('/api/process-text', methods=['POST'])
def process_text():
    user_text = request.json['user_text']
    try:
        response = openai.Completion.create(
            engine="text-davinci-002",
            prompt=user_text,
            max_tokens=100,  # Adjust as needed
        )
        return jsonify({"generated_text": response.choices[0].text})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)