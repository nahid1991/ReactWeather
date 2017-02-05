var React = require('react');

var WeatherForm = React.createClass({
  componentDidMount: function(){
    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
  },

  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';

      this.props.onSearch(location);
    }
  },

  render: function(){
    return(
    <div>
      <form onSubmit={this.onFormSubmit}>
        <input type="search" id="pac-input" ref="location" placeholder="Search weather by city"/>
        <button className="button hollow expanded">Get Weather</button>
      </form>
    </div>);
  }
});

module.exports = WeatherForm;
