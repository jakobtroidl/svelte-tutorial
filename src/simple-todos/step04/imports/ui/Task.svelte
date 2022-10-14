<script>
    // task is the class that wraps an individual checkable to-do item
  import { TasksCollection } from '../api/TasksCollection';

  export let task;

  const toggleChecked = () => { // update in the database when a task gets checked toogle the checked boolean value
    // Set the checked property to the opposite of its current value
    TasksCollection.update(task._id, {
      $set: { isChecked: !task.isChecked }
    });
  };

  const deleteThisTask = () => {
    TasksCollection.remove(task._id); // remove the task from the database
  };
</script>

<li>
<!--    input field to toggle the check status of the task-->
    <input
            type="checkbox"
           readonly
           checked={!!task.isChecked}
           on:click={toggleChecked}
    />
<!--    text that contains the description of the task-->
    <span>{ task.text }</span>
<!--    delete button of the task-->
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>
