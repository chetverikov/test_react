const React = require('react');
const { Component } = React;
const styles = require('./styles.css');

class DepartmentList extends Component {

  render () {
    return (
      <div>
        <h2 className="sub-header">List of departments</h2>
          <table className="table table-striped">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>11</td>
              <td>Lorem</td>
              <td>ipsum</td>
            </tr>
            <tr>
              <td>22</td>
              <td>amet</td>
              <td>consectetur</td>
            </tr>
            <tr>
              <td>33</td>
              <td>Integer</td>
              <td>nec</td>
            </tr>
            </tbody>
          </table>
      </div>
    );
  }
}

module.exports = DepartmentList;
