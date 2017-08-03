import React, {Component} from 'react'

class Wine extends Component {
  render(){
    return(
      <div data-wines-index={this.props.wine._id}>
        <strong>
          {`${this.props.wine.year}
          ${this.props.wine.name}
          (${this.props.wine.country})`}
        </strong>
        <div>{this.props.wine.description}</div>
      </div>
    )
  }
}

export default Wine
