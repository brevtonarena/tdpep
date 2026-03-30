from predict import predict
from milestone import generate_milestones

data = {
    "features": 12,
    "complexity": 2,
    "team_size": 3,
    "experience": 2,
    "bug_risk": 3
}

duration, effort = predict(data)
milestones, effort_dist, checkpoints = generate_milestones(duration, effort)

print("Duration:", duration)
print("Effort:", effort)
print("Milestones:", milestones)
print("Effort Distribution:", effort_dist)
print("Checkpoints:", checkpoints)