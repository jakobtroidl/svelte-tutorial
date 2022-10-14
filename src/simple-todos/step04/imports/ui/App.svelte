<script>
  import { TasksCollection } from '../api/TasksCollection';
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';
    // TaskCollection find fetches all the tasks from the database
  $m: tasks = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch()
</script>


<div class="container">
<!--    Todo list is the heading of the page-->
    <header>
      <h1>Todo List</h1>
    </header>

    <TaskForm />
<!--    Display all tasks in an unordered list-->
    <ul>
      {#each tasks as task (task._id)}
          <Task task={task} />
      {/each}
    </ul>
</div>
