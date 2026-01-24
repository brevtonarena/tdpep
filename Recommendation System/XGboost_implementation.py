import random
import numpy as np
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score
from xgboost import XGBClassifier

random.seed(42)
np.random.seed(42)

# Synthetic Data Generation
# Total skill set
SKILLS = [
    "python", "java", "c++", "ml", "dl", "nlp", "cv",
    "sql", "docker", "kubernetes", "react", "node",
    "aws", "linux", "git"
]

DIFFICULTY_MAP = {"easy": 0, "medium": 1, "hard": 2}

#Users dataframe
NUM_USERS = 300
users = []

for user_id in range(NUM_USERS):
    num_skills = np.random.randint(2, 7)
    skills = random.sample(SKILLS, num_skills)
    prs = np.random.poisson(lam=15)
    if prs < 5:
        exp = 0
    elif prs < 20:
        exp = 1
    else:
        exp = 2
    users.append({
        "user_id": user_id,
        "skills": skills,
        "total_prs": prs,
        "experience_level": exp
    })

users_df = pd.DataFrame(users)

#Projects dataframe
NUM_PROJECTS = 15
projects = []

for product_id in range(NUM_PROJECTS):
    req_skills = random.sample(SKILLS, np.random.randint(3, 6))
    contributors = np.random.randint(3, 50)
    milestones = np.random.randint(3, 15)
    difficulty = random.choice(["easy", "medium", "hard"])
    popularity = contributors * 0.7 + milestones * 0.3 + np.random.normal(0, 3)
    projects.append({
        "project_id": product_id,
        "required_skills": req_skills,
        "contributors": contributors,
        "milestones": milestones,
        "difficulty": difficulty,
        "difficulty_num": DIFFICULTY_MAP[difficulty],
        "popularity_score": popularity
    })

projects_df = pd.DataFrame(projects)

# Feature Engineering
rows = []

for i, u in users_df.iterrows():
    for i, p in projects_df.iterrows():
        user_skills = set(u["skills"])
        project_skills = set(p["required_skills"])
        matched = len(user_skills & project_skills)
        skill_match_ratio = matched / len(project_skills)
        missing_skills = len(project_skills - user_skills)

        base_prob = (
            0.45 * skill_match_ratio +
            0.2 * (u["experience_level"] / 2) +
            0.15 * (p["difficulty_num"] == u["experience_level"]) +
            0.1 * (p["popularity_score"] / 50)
        )

        noise = np.random.normal(0, 0.15)
        engagement_prob = np.clip(base_prob + noise, 0.05, 0.95)
        engaged = np.random.binomial(1, engagement_prob)

        rows.append({
            "skill_match_ratio": skill_match_ratio,
            "missing_skills_count": missing_skills,
            "user_total_prs": u["total_prs"],
            "user_experience_level": u["experience_level"],
            "project_contributors": p["contributors"],
            "project_milestones": p["milestones"],
            "project_difficulty": p["difficulty_num"],
            "project_popularity_score": p["popularity_score"],
            "engagement_label": engaged
        })

data_df = pd.DataFrame(rows)

# Model Training

X = data_df.drop("engagement_label", axis=1)
y = data_df["engagement_label"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

model = XGBClassifier(
    n_estimators=300,
    max_depth=5,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
    eval_metric="logloss",
    random_state=42
)

model.fit(X_train, y_train)

y_pred_proba = model.predict_proba(X_test)[:, 1]
roc_auc = roc_auc_score(y_test, y_pred_proba)

print("ROC-AUC Score:", roc_auc)

# Recommendation Function

def recommend_projects(user_skills, user_prs, model, projects_df, top_k=5):
    if user_prs < 5:
        user_exp = 0
    elif user_prs < 20:
        user_exp = 1
    else:
        user_exp = 2

    rows = []

    for i, p in projects_df.iterrows():
        project_skills = set(p["required_skills"])
        matched = len(set(user_skills) & project_skills)
        skill_match_ratio = matched / len(project_skills)
        missing_skills = len(project_skills - set(user_skills))

        rows.append({
            "skill_match_ratio": skill_match_ratio,
            "missing_skills_count": missing_skills,
            "user_total_prs": user_prs,
            "user_experience_level": user_exp,
            "project_contributors": p["contributors"],
            "project_milestones": p["milestones"],
            "project_difficulty": p["difficulty_num"],
            "project_popularity_score": p["popularity_score"],
            "project_id": p["project_id"]
        })

    feature_df = pd.DataFrame(rows)
    scores = model.predict_proba(feature_df.drop("project_id", axis=1))[:, 1]
    feature_df["score"] = scores

    return feature_df.sort_values("score", ascending=False).head(top_k)[
        ["project_id", "score"]
    ]
    
# Test Recommendation
new_user_skills = ["python", "ml", "sql", "git"]
new_user_prs = 20

recommendations = recommend_projects(
    new_user_skills,
    new_user_prs,
    model,
    projects_df,
    top_k=5
)

print(recommendations)
