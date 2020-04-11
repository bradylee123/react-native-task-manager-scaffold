class Task {
    constructor(
      id,
      milestoneId,
      title,
      duration,
      sessions
    ) {
      this.id = id;
      this.milestoneId = milestoneId;
      this.title = title;
      this.duration = duration;
      this.sessions = sessions;
    }
  }
  
export default Task;