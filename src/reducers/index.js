export default (state = [], action) => {
    console.log("reducer")
    switch (action.type) {
      case 'GET_ALL_ORDERS': {
          console.log(action.orders);
          let newState = JSON.parse(JSON.stringify(state));
          newState = [...action.orders];
          return newState;
      }
      case 'GET_ALL_PARKINGLOTS': {
        console.log(action.parkingLots);
        let newState = JSON.parse(JSON.stringify(state));
        newState = [...action.parkingLots];
        return newState;
     }
      default:
        return state;
    }
};