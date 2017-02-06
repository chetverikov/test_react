const React = require('react');
const Component = React.Component;

const {combineReducers} = require('redux');
const {Provider} = require('react-redux');
const {createStore, renderDevTools} = require( '../store_enhancers/devTools');

const Dashboard = require('./Dashboard');
const reducers = require('../reducers');

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {() => <Dashboard /> }
        </Provider>

        {renderDevTools(store)}
      </div>
    );
  }
}

module.exports = App;
