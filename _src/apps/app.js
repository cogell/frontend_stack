/* @flow */

var React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);


// Playing with flow

function foo(x) {
  return x * 10;
}

foo('Hello, world!');
