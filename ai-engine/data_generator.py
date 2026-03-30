import pandas as pd
import numpy as np

np.random.seed(42)

data = []

for _ in range(800):
    features = np.random.randint(3, 25)
    complexity = np.random.choice(["Low", "Medium", "High"])
    team_size = np.random.randint(1, 6)
    experience = np.random.randint(1, 4)  # new feature
    bug_risk = np.random.randint(1, 5)    # new feature

    comp_map = {"Low": 1, "Medium": 2, "High": 3}
    comp_val = comp_map[complexity]

    duration = (
        features * comp_val * 1.5 +
        bug_risk * 2 -
        experience * 1.5 +
        np.random.randint(1, 10)
    )

    effort = duration * team_size * 1.8

    data.append([features, complexity, team_size, experience, bug_risk, duration, effort])

df = pd.DataFrame(data, columns=[
    "features", "complexity", "team_size", "experience", "bug_risk", "duration", "effort"
])

df.to_csv("project_data.csv", index=False)

print("Synthetic data generated")