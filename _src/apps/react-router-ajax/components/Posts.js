var React = require('react');
var Post = require('./post/post.component');

var Posts = React.createClass({

  render: function () {
    return (
      <Post/>
    );
  }

});

module.exports = Posts;
