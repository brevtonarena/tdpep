import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.metrics import mean_squared_error
import joblib

def gradient_descent(X, y, lr=0.01, epochs=100):
    m, n = X.shape
    weights = np.zeros(n)
    bias = 0

    for _ in range(epochs):
        y_pred = np.dot(X, weights) + bias

        dw = (1/m) * np.dot(X.T, (y_pred - y))
        db = (1/m) * np.sum(y_pred - y)

        weights -= lr * dw
        bias -= lr * db

    return weights, bias


# load data
df = pd.read_csv("processed_data.csv")

X = df.drop(columns=["duration", "effort"])
y_duration = df["duration"]
y_effort = df["effort"]

# train test split
X_train, X_test, y_train_dur, y_test_dur, y_train_eff, y_test_eff = train_test_split(
    X, y_duration, y_effort, test_size=0.2, random_state=42
)

X_np = X_train.values
y_np = y_train_dur.values

weights, bias = gradient_descent(X_np, y_np)

print("\n🔹 Gradient Descent Results")
print("Weights:", weights)
print("Bias:", bias)

# model training
models = {
    "Linear": LinearRegression(),
    "Ridge": Ridge(alpha=1.0),
    "Lasso": Lasso(alpha=0.1)
}

best_model = None
best_score = float("inf")

print("\n🔹 Model Performance (Duration Prediction)")

for name, model in models.items():
    model.fit(X_train, y_train_dur)
    preds = model.predict(X_test)

    mse = mean_squared_error(y_test_dur, preds)
    print(f"{name} MSE: {mse:.2f}")

    if mse < best_score:
        best_score = mse
        best_model = model

# train effort model
effort_model = LinearRegression()
effort_model.fit(X_train, y_train_eff)

# save model
joblib.dump(best_model, "duration_model.pkl")
joblib.dump(effort_model, "effort_model.pkl")

print("\nBest Model Selected:", type(best_model).__name__)
print("Models saved successfully!")