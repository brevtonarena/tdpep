import joblib
import numpy as np
import pandas as pd

duration_model = joblib.load("duration_model.pkl")
effort_model = joblib.load("effort_model.pkl")
scaler = joblib.load("scaler.pkl")

def preprocess_input(data):
    features = data["features"]
    complexity = data["complexity"]
    team_size = data["team_size"]
    experience = data["experience"]
    bug_risk = data["bug_risk"]

    complexity_score = features * complexity
    team_efficiency = team_size / complexity

    df = pd.DataFrame([{
        "features": features,
        "complexity": complexity,
        "team_size": team_size,
        "experience": experience,
        "bug_risk": bug_risk,
        "complexity_score": complexity_score,
        "team_efficiency": team_efficiency
    }])

    scaled = scaler.transform(df)

    scaled_df = pd.DataFrame(scaled, columns=df.columns)

    return scaled_df

def predict(data):
    X = preprocess_input(data)

    duration = duration_model.predict(X)[0]
    effort = effort_model.predict(X)[0]

    return duration, effort

