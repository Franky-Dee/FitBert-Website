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
            prompt="Create 5 difficult multiple-choice quiz questions based on the following textbook information:" + user_text +
            "Each multiple-choice quiz question must be in the following format: Question 1. (Then the contents of the question),A: Distractor 1.B: Distractor 2.C: Distractor 3.D: Distractor 4. E: Distractor 5.Answer: A. (Answer clarification).The distractors must be close in meaning to each other. ",
            max_tokens=1000,  # Adjust as needed
        )
        return jsonify({"generated_text": response.choices[0].text})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=True)
