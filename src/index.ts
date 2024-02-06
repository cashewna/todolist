import './css/style.css';
import ContentView from './views/ContentView';
import Controller from './controllers/Controller';

const contentView = new ContentView();
const contentController = new Controller(contentView);
contentController.render();