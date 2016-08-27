var CommentContainer = React.createClass({
  getInitialState: function() {
    return {comments: []};
  },
  render: function() {
    return (
      <div className="container">
        <CommentList comments={this.state.comments}/>
        <CommentForm />
      </div>
    );
  }
});
