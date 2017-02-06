const React = require('react');
const { Component } = React;
const styles = require('./styles.css');

class Sidebar extends Component {

  render () {
    return (
      <div className={`col-sm-3 col-md-2 ${styles.sidebar}`}>
        <ul className={`nav ${styles['nav-sidebar']}`}>
          <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Export</a></li>
        </ul>
      </div>
    );
  }
}

module.exports = Sidebar;
