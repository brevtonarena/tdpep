def generate_milestones(duration, effort):
    duration = float(duration)
    effort = float(effort)

    milestones = {
        "Design": round(duration * 0.2, 2),
        "Development": round(duration * 0.6, 2),
        "Testing": round(duration * 0.2, 2)
    }

    effort_distribution = {
        "Design": round(effort * 0.2, 2),
        "Development": round(effort * 0.6, 2),
        "Testing": round(effort * 0.2, 2)
    }

    checkpoints = [round(duration * i/4, 2) for i in range(1, 5)]

    return milestones, effort_distribution, checkpoints