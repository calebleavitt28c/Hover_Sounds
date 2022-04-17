import React from 'react'

class AboutArtist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return(
      <div className="mt-2 border-2 dark:border-primary h-[18.65rem]">
        <div>
          <img className="object-fill" src={this.props.image} alt={this.props.name} />
          <h1>{this.props.name}</h1>
          <p>{this.props.bio}</p>
        </div>
      </div>
    );
  }
}

export default AboutArtist