import React from 'react'

class AboutArtist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      bio: '',
      image: '',
    }
  }
  render() {
    return(
      <div>
        <div class="row">
          <img src={this.props.image} alt={this.props.name} height="400px" width="auto"/>
          <h1>{this.props.name}</h1>
          <p>{this.props.bio}</p>
        </div>
      </div>
    );
  }
}

export default AboutArtist