import React from 'react'

class TopVenue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      place: '',
      name: '',
    }
  }
  render() {
    return(
      <>
        <div class="row">
          <div class="column">
            <h1>{this.props.place}.</h1>
          </div>
          <div class="column">
            <h3>{this.props.name}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default TopVenue