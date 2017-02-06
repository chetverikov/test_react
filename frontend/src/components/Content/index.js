const React = require('react');
const { Component } = React;
const styles = require('./styles.css');

const DepartmentsList = require('../DepartmentList');

class Content extends Component {

  render () {
    return (
      <div className={`col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 ${styles.main}`}>
        <h1 class="page-header">Dashboard</h1>

        <DepartmentsList />
      </div>
    );
  }
}

module.exports = Content;
