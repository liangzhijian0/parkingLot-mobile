import {connect} from 'react-redux';
import SelectParkingLots from "../components/SelectParkingLots";
import ParkingLotDashboardAPI from '../API/ParkingLotDashboardAPI'

const mapStateToProps = (state, ownProps) => {
  let lotsList = state;
  

  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    SelectParkingLotsHandler: (parkingBoyId,parkingLotId) => {
      ParkingLotDashboardAPI.putServerData(parkingBoyId,parkingLotId);
    },
    getParkingLotsHandler: () => {
      ParkingLotDashboardAPI.getServerData(parkingLots => dispatch({type:'GET_ALL_PARKINGLOTS',parkingLots}));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectParkingLots);