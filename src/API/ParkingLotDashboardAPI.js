// const axios = require('axios');
import axios from "axios";

const ParkingLotBashBoardAPI = {
  // initServerData(dispatch, action) {
  //   this.getServerData(dispatch, action);
  // },
  getServerData(successCallBack) {
    const parkingBoyid = 2;
    let getDataUrl = `https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyid}/parkingLots`;
    axios
      .get(getDataUrl)
      .then((response) => {
        // const data = response
        //   .data
        //   .map(serverData => {
        //     const {parkingLotName, size, carNum, parkingBoyName} = serverData;
        //     return {parkingLotName, size, carNum, parkingBoyName};
        //   });
          successCallBack(response.data)
      })
      .catch(function (error) {
      })
      .then(function () {});
  },

  putServerData(parkingBoyId,parkingLotId) {
    let self = this;
    // const parkingBoyId = localStorage.getItem("id");
    console.log(`https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/parkingLots/${parkingLotId}`)
    axios.
    put(`https://dino-parking-system-backend.herokuapp.com/parkingBoys/${parkingBoyId}/parkingLots/${parkingLotId}`)
    .then(function (response) {
        console.log('success');
        alert("park car successfully!")
    }) 
    .catch(function (error) {
        console.log(error);
    })
  }
}
export default ParkingLotBashBoardAPI;