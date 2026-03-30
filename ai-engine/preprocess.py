import pandas as pd
from sklearn.preprocessing import StandardScaler
import joblib

df = pd.read_csv("project_data.csv")

# Encode categorical
df["complexity"] = df["complexity"].map({
    "Low": 1,
    "Medium": 2,
    "High": 3
})

# Handle missing values
df = df.dropna()

# Derived features
df["complexity_score"] = df["features"] * df["complexity"]
df["team_efficiency"] = df["team_size"] / df["complexity"]

# Scale
scaler = StandardScaler()
feature_cols = ["features", "complexity", "team_size", "experience", "bug_risk",
                "complexity_score", "team_efficiency"]

df[feature_cols] = scaler.fit_transform(df[feature_cols])

# Save scaler
joblib.dump(scaler, "scaler.pkl")

df.to_csv("processed_data.csv", index=False)

print("Preprocessing complete")