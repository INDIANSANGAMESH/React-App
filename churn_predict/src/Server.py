import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS  # Allows React frontend to connect

# Initialize the Flask app
app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Load the pickled model
try:
    with open("model1.pkl", "rb") as model_file:
        model = pickle.load(model_file)
except FileNotFoundError:
    print("Error: The file 'model1.pkl' was not found. Check the file path and ensure the model is available.")
    exit()

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get JSON data from React frontend
        data = request.json
        
        # Convert values to float based on received JSON keys
        input_values = [float(data[key]) for key in data]
        
        # Convert input to NumPy array (adapt based on your model's format)
        input_array = np.array(input_values).reshape(1, -1)
        
        # Make prediction
        prediction = model.predict(input_array)
        
        # Return prediction as JSON response
        return jsonify({"prediction": prediction.tolist()})
    except Exception as e:
        # Handle errors gracefully
        return jsonify({"error": str(e)})

if __name__ == "__main__":  # Correct syntax here
    # Run Flask app with debug mode enabled
    app.run(debug=True)