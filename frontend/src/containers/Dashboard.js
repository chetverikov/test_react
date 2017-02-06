const React = require('react');
const { Component } = React;

const styles = require('./Dashboard.css');

const {Content, Navbar, Sidebar } = require('../components');

class Dashboard extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Content />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Dashboard;
