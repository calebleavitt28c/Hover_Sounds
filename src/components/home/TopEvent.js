class TopEvent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      place: '',
      profile: '',
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
            <img src={this.props.profile} height="75px" width="auto"/>
          </div>
          <div class="column">
            <h3>{this.props.name}</h3>
          </div>
        </div>
      </>
    );
  }
}