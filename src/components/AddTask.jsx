export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    // console.log(e.target.task.value);
    // console.log(date);

    if (task.id) {
      
      const updatedTaskList = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()}   ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updatedTaskList);
      setTask({});
    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()}   ${date.toLocaleDateString()}`,
      };

      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };
  const buttonText = task.id ? "Update" : "Add";
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="add tasks"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{buttonText}</button>
      </form>
    </section>
  );
};
