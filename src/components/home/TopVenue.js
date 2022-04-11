import React from 'react'

class TopVenue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      <>
        <div className="row">
          <div className="column">
            <h1>{this.props.place}.</h1>
          </div>
          <div className="column">
            <h3>{this.props.name}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default TopVenue