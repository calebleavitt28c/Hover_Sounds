import React from 'react'

class AboutVenue extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      bio: '',
      address: '',
    }
  }
  render() {
    return(
      <div>
        <div class="row">
          {/* google map + this.props.address */}
          <h1>{this.props.name}</h1>
          <p>{this.props.bio}</p>
        </div>
      </div>
    );
  }
}

export default AboutVenue