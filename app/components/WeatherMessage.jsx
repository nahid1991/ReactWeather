var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    return (
      <div>
        <h3>It is 40 in Philadelphia</h3>
      </div>);
  }
});

module.exports = WeatherMessage;
