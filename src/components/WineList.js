import React, {Component} from 'react'
import Wine from './Wine'

class WineList extends Component {
  render(){

    let wineArray = this.props.wines.map((wine) => {
      return (
        <Wine
          key={wine._id}
          wine={wine}
        />
      )
    })
    return(
      <div className="wines">
        {wineArray}
      </div>
    )
  }
}

export default WineList
