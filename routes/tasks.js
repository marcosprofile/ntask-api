module.exports = app => {
  const Task = app.models.tasks;

  app.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.findAll();
      res.json({ tasks });
    } catch (err) {
      res.status(500).json(err);
    }
  });
};
