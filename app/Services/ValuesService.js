import store from "../store.js";
import Value from "../Models/Value.js"

let _api = new axios.create({
  baseURL: '//api.nasa.gov/planetary/apod?api_key=SSTaI8UYeACCKAvKweSPpHqwAhwJlwxVll0Y44UH',
  timeout: 10000
})



class ValuesService {
  constructor() {
    this.getData()
  }

  getData() {
    _api.get('')
      .then(res => {
        console.log(res.data)
        let rawData = res.data
        let data = new Value(rawData)
        store.commit('values', data)

      }).catch(err => console.error(err)
      )
  }

}

const service = new ValuesService();
export default service;
