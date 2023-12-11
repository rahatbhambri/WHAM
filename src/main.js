
import { createApp } from 'vue';

import allResources from './components/allResources.vue';
import addResource from './components/addResource.vue';
import editResource from './components/editResource' ;
import App from './App.vue' ;

const app = createApp(App);

app.component('add-resource', addResource) ;
app.component('all-resource', allResources);
app.component("edit-resource", editResource) ;


app.mount('#app');
