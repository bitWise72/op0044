from flask import Flask, request, jsonify
from data_fetcher import fetch_user_data
from summarizer import generate_summary
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

@app.route('/get-summary', methods=['POST'])
def get_summary():
    user_ids = request.json.get('user_ids')
    if not user_ids:
        return jsonify({"error": "No user IDs provided"}), 400

    data = fetch_user_data(user_ids)
    summary = generate_summary(data)
    return jsonify({"summary": summary})

if __name__ == '__main__':
    app.run(debug=True)
