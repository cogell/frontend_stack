var qwest = require('qwest');
var React = require('react');
var Post = require('../post/post.component');

var Posts = React.createClass({
  getInitialState: function () {
    return {
      posts: []
    }
  },

  componentDidMount: function () {

    var url = 'http://staging.moonrakr.co/api/posts/';

    qwest.get( url )
      .then(function (response) {

        if (this.isMounted) {
          this.setState({
            posts: response
          });
        }

      });
  },

  render: function () {

    var posts = this.state.posts.map(function (post) {
      return <Post />;
    });

    return (
      <div>
        { posts }
      </div>
    );
  }

});

module.exports = Posts;
