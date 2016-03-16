Header = React.createClass({
  render() {
    return (
      <div>
        <span className="navbar-react">
          <i className="fa fa-facebook">akebook</i>
        </span>
        <div className="collapse navbar-collapse" id="navbar">
          <form role="form" id="signin" className="navbar-form navbar-right">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input type="email" ref="email" placeholder="email address" id="email" className="form-control"/>
            </div>
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-lock"></i>
              </span>
              <input type="password" ref="password" className="form-control" placeholder="This is the password"/>
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
});
