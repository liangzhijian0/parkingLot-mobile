import axios from "axios";

const RobOrderAPI = {
  initServerData(dispatch, action) {
    this.getServerData(dispatch, action);
  },
  getServerData(successCallBack) {
    console.log(111)
    let getDataUrl = 'https://dino-parking-system-backend.herokuapp.com/orders/noRob';
    axios
      .get(getDataUrl)
      .then((response) => {
        const data = response
          .data
          .map(serverData => {
            const img = 'http://www.iconpng.com/png/delivering-icons/car171.png';
            const {plateNumber,id,parkDate} = serverData;
            
            return {plateNumber,img,id,parkDate};
          })
          ;
        successCallBack([...data])
      })
      .catch(function (error) {
      })
      .then(function () {});
  },

  sendServerData(id,successCallBack) {
    let self = this;
    // const parkingBoyId = localStorage.getItem("id");
    const parkingBoyId = 2;
    console.log(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`)
    axios.
    put(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`, {"parkingBoyId":2,"status":"waitPark"})
    .then(function (response) {
        console.log('success');
        alert("rob order successfully!")
        self.getServerData(successCallBack)
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }

}

export default RobOrderAPI;