jest.dontMock('./post.component');

var React = require('react/addons');
var Post = require('./post.component');
var TestUtils = React.addons.TestUtils;

describe('post.component', function() {

  it('prints "Hello, Cedric" by default', function () {
    var post = TestUtils.renderIntoDocument(
      <Post />
    );
    expect(post.getDOMNode().textContent).toEqual('Hello, Cedric');
  });

  it('prints "Hello, <name>" where name is a passed in prop', function() {
    var post = TestUtils.renderIntoDocument(
      <Post name="TestGuy" />
    );
    expect(post.getDOMNode().textContent).toEqual('Hello, TestGuy');
  });

});
