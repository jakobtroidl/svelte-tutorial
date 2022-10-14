import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

// insert task is a function that creates an object with property text and inserts it into the database
const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  // the set of tasks that are initially written into the database, if the database is empty
  if (TasksCollection.find().count() === 0) {
    [
      'First Task', // array of task names
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
    ].forEach(insertTask); // iterates over that array and inserts all tasks.
  }
});
