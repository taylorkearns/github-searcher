var React = require("react")
var ReactDOM = require("react-dom")

console.log("9:37");

var Commit = React.createClass({
  render: function() {
    return(
      <p>{ this.props.message }</p>
    );
  }
});

var CommitList = React.createClass({
  getInitialState: function() {
    return { data: [] }
  },

  loadCommits: function() {
    $.ajax({
      url: this.props.url,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, error) {
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this.loadCommits();
    // setInterval(this.loadCommits, this.props.interval);
  },

  render: function() {
    var latestCommits = this.state.data.slice(0, 5);
    var commits = latestCommits.map(function(commitData) {
      return <Commit key={ commitData.sha } message={ commitData.commit.message } />;
    });

    return (
      <div className="commitBox">{ commits }</div>
    );
  }
})

ReactDOM.render(
  <CommitList
  url="https://api.github.com/repos/taylorkearns/searchable-sample/commits"
  interval={ 60000 } />,

  document.getElementById("root")
)
