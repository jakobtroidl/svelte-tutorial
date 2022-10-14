import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

Meteor.startup(() => { // entry point for the meteor app
  // eslint-disable-next-line no-new
  new App({
    target: document.getElementById('app'),
  });
});
