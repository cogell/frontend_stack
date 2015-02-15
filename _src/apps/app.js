/* @flow */

var React = require('react');

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hi, world! I am a CommentBox.
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.body
);
