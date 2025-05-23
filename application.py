from flask import Flask, request, jsonify, render_template, url_for
import pickle
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize Flask application
application = Flask(__name__)
app = application

# Load model and scaler safely
try:
    model = pickle.load(open('models/ridge.pkl', 'rb'))
    scaler = pickle.load(open('models/scalar.pkl', 'rb'))
    logger.info("Model and scaler loaded successfully")
except Exception as e:
    logger.error(f"Error loading model or scaler: {e}")
    model = None
    scaler = None

@app.route('/')
def index():
    """Render the landing page"""
    return render_template('index.html')

@app.route('/about')
def about():
    """Render the about page"""
    return render_template('about.html')

@app.route('/visualization')
def visualization():
    """Render the data visualization page"""
    return render_template('visualization.html')

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    """Handle the prediction form and model inference"""
    prediction = ''
    
    if request.method == 'POST':
        try:
            # Get the data from the form
            data = request.form.to_dict()
            logger.info(f"Received form data: {data}")
            
            # Convert the data to a DataFrame
            data = pd.DataFrame(data, index=[0])
            
            # Convert the data to float
            data = data.astype(float)
            
            # Scale the data
            data = scaler.transform(data)
            
            # Make the prediction
            prediction = model.predict(data)
            
            # Format the prediction to 3 decimal places
            prediction = round(float(prediction[0]), 3)
            
            logger.info(f"Prediction successful: {prediction}")
            
        except Exception as e:
            logger.error(f"Error during prediction: {e}")
            prediction = "Error: Could not make prediction"
    
    # Render the template with the prediction result
    return render_template('home.html', prediction=prediction)

@app.errorhandler(404)
def page_not_found(e):
    """Handle 404 errors"""
    return render_template('index.html'), 404

@app.errorhandler(500)
def server_error(e):
    """Handle 500 errors"""
    logger.error(f"Server error: {e}")
    return render_template('index.html', error="An internal server error occurred"), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)