<script>
    import { TasksCollection } from '../api/TasksCollection';

    let newTask = '';

    // submit new task, add it to the database, which will then also display it
    const handleSubmit = () => {
      // Insert a task into the collection
      TasksCollection.insert({
        text: newTask,
        createdAt: new Date(), // current time
      });

      // Clear form
      newTask = '';
    }
</script>


<form class="task-form" on:submit|preventDefault={handleSubmit}>
<!--    input field to add your text-->
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
<!--    submit button-->
    <button type="submit">Add Task</button>
</form>
