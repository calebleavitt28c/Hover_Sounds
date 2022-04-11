import React from 'react'

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: '',
      name: '',
      image: '',
      caption: '',
    }
  }
  render() {
    return(
      <>
      <div className="row">
        <div className="column">
          <img src={this.props.profile} alt={this.props.name} height="75px" width="auto"/>
        </div>
        <div className="column">
          <h3>{this.props.name}</h3>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <img src={this.props.image} alt={this.props.name} height="400px" width="auto"/>
        </div>
        <div className="column">
          <p>{this.props.caption}</p>
        </div>
      </div>
      </>
    );
  }
}

export default Post