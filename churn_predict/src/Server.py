import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS  # type: ignore # Allows React frontend to connect

app = Flask(__name__) # type: ignore
CORS(app)  # Enable Cross-Origin Resource Sharing

# Load the pickled model
with open("model1.pkl", "rb") as model_file:
    model = pickle.load(model_file)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json  # Get JSON data from React
    input_values = [float(data[key]) for key in data]  # Convert values to float

    # Convert input to NumPy array (adapt based on your model's format)
    input_array = np.array(input_values).reshape(1, -1)

    # Make prediction
    prediction = model.predict(input_array)

    return jsonify({"prediction": prediction.tolist()})  # Convert NumPy output to list

if __name__ == "_main_": # type: ignore
    app.run(debug=True)