import React from 'react'

class TopEvent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      <>
        <div className="row">
          <div className="text-center">
            <h1>{this.props.place}.</h1>
          </div>
          <div className="text-center">
            <img src={this.props.profile} alt={this.props.name} height="75px" width="auto"/>
          </div>
          <div className="text-center">
            <h3>{this.props.name}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default TopEvent