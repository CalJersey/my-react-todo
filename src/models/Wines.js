import $ from 'jquery-ajax'

class WineModel {
  static all(){
    let request = $.ajax({
      url: "http://super-crud.herokuapp.com/wines",
      method: 'GET'
    })
    return request
  }
}

export default WineModel
