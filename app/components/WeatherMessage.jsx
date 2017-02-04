var React = require('react');


var WeatherMessage = ({temp,location}) => {
  return (
      <h1 class="text-center">It is {temp}&#x2103; in {location}</h1>
    );
}

module.exports = WeatherMessage;
