import React from 'react'

class EventRow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      artist: '',
      venue: '',
      date: '',
      time: '',
    }
  }
  render() {
    return(
      <tr>
        <td>{this.props.artist}</td>
        <td>{this.props.venue}</td>
        <td>{this.props.date}</td>
        <td>{this.props.time}</td>
      </tr>
    );
  }
}

export default EventRow