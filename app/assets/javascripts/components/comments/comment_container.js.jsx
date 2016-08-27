var CommentContainer = React.createClass({
  getInitialState: function() {
    return {comments: []};
  },
  render: function() {
    return (
      <div className="container">
        <h1>Comments</h1>
        <CommentList comments={this.state.comments}/>
        <CommentForm />
      </div>
    );
  }
});
