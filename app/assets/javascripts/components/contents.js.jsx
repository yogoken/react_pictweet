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
    var backgroundImage = { "backgroundImage": "url(http://www.seplus.jp/sezemi/github/images/github.png)"}
    return (
      <div className="content_post" style={backgroundImage}>
        <More />
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

var More = React.createClass({
  render: function() {
    var backgroundImage = { "backgroundImage": "url(https://bermuda-store.net/assets/bermuda_store/arrow_left-0b674062302023af70410061703455b0.png)"}
    return (
      <div className="more" style={backgroundImage}>
      </div>
    );
  }
});
