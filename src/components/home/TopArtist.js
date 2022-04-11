import React from 'react'

class TopArtist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      <div className="row">
        <div className="column">
          <h1>{this.props.place}.</h1>
        </div>
        <div className="column">
          {/* <img src={this.props.profile} alt={this.props.name} height="75px" width="auto"/> */}
        </div>
        <div className="column">
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default TopArtist