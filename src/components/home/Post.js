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
      <div class="row">
        <div class="column">
          <img src={this.props.profile} height="75px" width="auto">
        </div>
        <div class="column">
          <h3>{this.props.name}</h3>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src=this.prop.image height="400px" width="auto">
        </div>
        <div class="column">
          <p>{this.props.caption}</p>
        </div>
      </div>
    );
  }
}