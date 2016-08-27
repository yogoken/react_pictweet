var Comment = React.createClass({
  render: function() {
    return (
      <p>
        <strong>
          {this.props.nickname}
        </strong><br/>
        {this.props.text}
      </p>
    );
  }
});
