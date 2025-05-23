# Forest Fire Weather Index (FWI) Prediction

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?logo=github)](https://github.com/viraj-gavade/End-To-End-Ml-Project)
![Forest Fire Prediction](https://img.shields.io/badge/ML-Forest%20Fire%20Prediction-brightgreen)
![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Flask](https://img.shields.io/badge/Flask-2.0%2B-lightgrey)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8)

## 📝 My Learning Journey

This is my first end-to-end machine learning project that I built while learning ML concepts. While it may not be extraordinary or groundbreaking, it represents an important milestone in my learning journey. Being able to build a complete solution—from data analysis to model deployment—gives me confidence that I'm making progress in my understanding of machine learning and web development.

As someone who's still learning, I'm proud of creating something functional that demonstrates practical application of the concepts I've been studying. Everyone starts somewhere, and this project is my starting point!

## 🔥 Project Overview

This project is an end-to-end machine learning application that predicts the Forest Fire Weather Index (FWI) based on meteorological data. The FWI is a metric used by fire management agencies worldwide to estimate fire danger and potential fire behavior.

### Features

- **Data-driven predictions**: Uses a Ridge Regression model trained on the Algerian Forest Fires dataset
- **Interactive UI**: Modern user interface built with Tailwind CSS and JavaScript
- **Responsive design**: Works well on both desktop and mobile devices
- **Data visualizations**: Interactive charts showing relationships between weather parameters and fire risk
- **Instant feedback**: Get immediate prediction results with color-coded risk levels

## 🛠️ Technologies Used

- **Backend**: Python, Flask
- **Machine Learning**: Scikit-learn, Pandas, NumPy
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Data Visualization**: Chart.js
- **Development Tools**: VS Code, Git

## 📊 The Dataset

The model is trained on the Algerian Forest Fires dataset, which contains meteorological data from two regions in Algeria:
- Bejaia region
- Sidi-Bel Abbes region

The data spans from June 2012 to September 2012 and includes various weather parameters that influence fire risk.

## 📋 Input Features

The application takes the following inputs to make predictions:

- **Temperature**: Day temperature in degrees Celsius
- **RH**: Relative humidity in percentage
- **Ws**: Wind speed in km/h
- **Rain**: Outside rain in mm
- **FFMC**: Fine Fuel Moisture Code index from the FWI system
- **DMC**: Duff Moisture Code index from the FWI system
- **ISI**: Initial Spread Index from the FWI system
- **Classes**: 0 for not fire, 1 for fire
- **Region**: 0 for Bejaia region, 1 for Sidi-Bel Abbes region

## 🧠 Machine Learning Model

The project uses a **Ridge Regression** model, which is a linear regression technique with L2 regularization. This helps in preventing overfitting and provides more stable predictions. The model is trained on the dataset and optimized for accurate FWI predictions.

Key steps in the modeling process:
1. Data preprocessing and exploratory analysis
2. Feature engineering and selection
3. Model training and hyperparameter tuning
4. Model evaluation and validation
5. Model serialization for deployment

## 🚀 How to Run the Project

### Prerequisites
- Python 3.8+
- pip package manager

### Installation

1. Clone this repository or download the source code

2. Navigate to the project directory
```
cd "path\to\End-To-End-Ml-Project"
```

3. Install required dependencies
```
pip install -r requirements.txt
```

4. Run the Flask application
```
python application.py
```

5. Access the application in your web browser at `http://localhost:5000`

## 📱 Application Features

- **Home Page**: Introduction to the project with links to prediction and visualization pages
- **Prediction Form**: Input form for entering weather parameters to get FWI predictions
- **Data Visualizations**: Interactive charts showing the relationships between various parameters and FWI
- **About Page**: Detailed information about the project, dataset, and methodologies used

## 🔮 Future Improvements

As I continue learning, I plan to enhance this project with:

- More advanced ML models like Random Forests or Gradient Boosting
- Real-time weather data integration
- Geographic visualization of fire risk using maps
- Time series forecasting for predicting future fire risk
- User accounts and saved predictions

## 📚 Learning Resources

Some of the key resources that helped me build this project:

- Krish Naik's Machine Learning Bootcamp
- Scikit-learn documentation
- Flask official documentation
- Tailwind CSS tutorials

## 🙏 Acknowledgements

Special thanks to Krish Naik for the excellent machine learning bootcamp that guided me through this project, and to the open-source community for providing the tools and resources that made this project possible.

---

Built with ❤️ while learning machine learning concepts.

*This project is for educational purposes only and should not be used for critical fire management decisions.*
