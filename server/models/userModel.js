const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    min: 4
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6
  },
  totalWordCount: {
    type: Number,
    required: true
  },
  logins: {
    type: Array,
    required: true
  },
  recentWords: {
    type: Array
  },
  notebooks: {
    type: Object
  },
  performanceData: {
    type: Object,
    default: {
      firstTime: true,
      exercisesStarted: 0,
      exercisesCompleted: 0,
      wordsSeen: 0,
      correctAnswers: 0
    }
  }
});

module.exports = mongoose.model("User", userSchema);
