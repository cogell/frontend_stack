var React = require('react');

var HelloWorld = React.createClass({
  render: function () {

    var input = <input type="text" placeholder="Your name here"/>;
    var date = this.props.date.toTimeString();

    return (
      <p>
        Hello, {input}!
        It is {date}
      </p>
    );
  }
});

var renderHello = function() {
  React.render( <HelloWorld date={new Date()}/>, document.getElementById('example'));
};

setInterval(function(){
  renderHello();
}, 500);
