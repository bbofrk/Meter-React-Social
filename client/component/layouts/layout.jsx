Layout = React.createClass({
  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <div className="srow row-offcanvas row-offcanvas-left pushdown-50">
            <Navbar />
            {this.props.sidbar}
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
});
