import React, {Component} from 'react'
import WineModel from '../models/Wines.js'
import CreateWinesForm from '../components/CreateWinesForm.js'
import WineList from '../components/WineList'

class WinesContainer extends Component {
  constructor(){
    super()
    this.state = {
      wines: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }
  fetchData(){
    WineModel.all().then( (res) =>{
      this.setState({
        wines: res.wines
      })
    })
  }
  render() {
    return (
        <div className='winesContainer'>
          <CreateWinesForm />
          <WineList
            wines={this.state.wines} />
        </div>
    )
  }
}

export default WinesContainer
