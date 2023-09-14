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
            prompt="Create 5 different multiple-choice questions based on the following textbook information:\n" + user_text +
                        "\nEach question must structured in the following way:\n"
                        "The questions number (Then the contents of the question)\n\n"
                        "A: Distractor 1\n"
                        "B: Distractor 2\n"
                        "C: Distractor 3\n"
                        "D: Distractor 4\n"
                        "E: Distractor 5\n\n"
                        "Answer: A (Answer clarification)\n"
                        "The distractors must be close in meaning to each other. This must be done for all 10 questions",
            max_tokens=1000,  
        )
        return jsonify({"generated_text": response.choices[0].text})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(debug=True)
