from flask import Flask
from routes.data_processing import data_processing_blueprint
from routes.ai_chatbot import ai_chatbot_blueprint

app = Flask(__name__)

app.register_blueprint(data_processing_blueprint)
app.register_blueprint(ai_chatbot_blueprint)

if __name__ == '__main__':
    app.run(debug=True) 