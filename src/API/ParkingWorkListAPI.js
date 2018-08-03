import axios from "axios";

const ParkingWorkListAPI = {
//   initServerData(dispatch, action) {
//     this.getServerData(dispatch, action);
//   },
  getServerData(successCallBack) {
    const parkingBoyId = 2;
    let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/orders/?parkingBoyId=${parkingBoyId}`;
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
    // const parkingBoyId = localStorage.getItem("id");
    const parkingBoyId = 2;
    axios.
    post(`https://dino-parking-system-backend.herokuapp.com/orders/${id}`, {"parkingBoyId":2})
    .then(function (response) {
        console.log('success');
        alert("rob order successfully!")
        successCallBack(response.status);
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }

}

export default ParkingWorkListAPI;