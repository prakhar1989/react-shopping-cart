var React = require('react'),
    App = require('./components/Application'),
    products = require('./data');

var AppComponent = React.createFactory(App);

React.render(
    AppComponent({products: products}), 
    document.getElementById('app')
);
