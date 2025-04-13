from flask import Flask, send_file, jsonify
import os

app = Flask(__name__)  # ✅ Correct: __name__, not _name_


# Route to download the pickle chat history
@app.route("/download-chat-history", methods=["GET"])
def download_chat_history():
    file_path = "chat_history.pkl"
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    else:
        return jsonify({"error": "Chat history not found."}), 404


if __name__ == "__main__":  # ✅ Correct: __name__ and "__main__"
    app.run(host="0.0.0.0", port=5000)
