import { Mongo } from 'meteor/mongo';

// interface variable to the mongo database. Meteor automatically handles the connection to the database
export const TasksCollection = new Mongo.Collection('tasks');
