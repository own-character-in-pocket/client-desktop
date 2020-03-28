const task = taskList => taskList.join(" && ");

module.exports = {
  hooks: {
    "pre-commit": task(["lint-staged"])
  }
};
