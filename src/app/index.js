import './styles/jumbotron.css';
import 'bootstrap/dist/css/bootstrap.min.css';

let app = require("./modules/app");
let prepareData = require("./modules/prepareData");

let data = prepareData();
app(data, '#root');