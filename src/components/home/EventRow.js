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
      // make full event clickable
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td class="px-6 py-4">{this.props.artist}</td>
        <td class="px-6 py-4">{this.props.venue}</td>
        <td class="px-6 py-4">{this.props.date}</td>
        <td class="px-6 py-4">{this.props.time}</td>
      </tr>
    );
  }
}

export default EventRow