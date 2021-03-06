var React = require('react');
var {Link, IndexLink, hashHistory} = require('react-router');


var Nav = React.createClass({
  componentDidMount: function(){
    // Create the search box and link it to the UI element.
    var input = document.getElementById('search');
    var searchBox = new google.maps.places.SearchBox(input);
  },

  onSearch: function(e){
      e.preventDefault();

      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);
      console.log(encodedLocation);

      if(location.length > 0){
        console.log(location);
        this.refs.search.value = '';
        // browserHistory.push('/?location='  + encodedLocation);
        window.location.hash = '#/?location=' + encodedLocation;
      }
  },

  render: function(){
    return (
      <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Weather App</li>
              <li>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
              </li>
              <li>
                <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
              </li>
              <li>
                <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</IndexLink>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <form onSubmit={this.onSearch}>
              <ul className="menu">
                <li>
                  <input type="search"  id="search" placeholder="Search weather by city" ref="search"/>
                </li>
                <li>
                  <input type="submit" className="button" value="GET WEATHER"/>
                </li>
              </ul>
            </form>
          </div>
      </div>
    );
  }
});

module.exports = Nav;
