var Contents = React.createClass({

  render: function() {
    return (
      <div className="contents row">
        <ContentPost />
      </div>
    );
  }
});


var ContentPost = React.createClass({
  render: function() {
    var backgroundImage = { "background-image": "url(http://www.seplus.jp/sezemi/github/images/github.png)"}
    return (
      <div className="content_post" style={backgroundImage}>
        ツイート内容
        <span className="name">
          <a>
            <span>投稿者</span>よごけん
          </a>
        </span>
      </div>
    );
  }
});
