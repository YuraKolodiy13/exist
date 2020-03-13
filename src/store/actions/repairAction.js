import {

  SEARCH_BY_VIN_SUCCESS, SEARCH_DETAIL, SECOND_SEARCH_BY_VIN,
} from "./actionType";
import axios from "axios/index";
import store from '../store'

export const searchByVin = vin => async dispatch => {
  const res = await axios.get(`http://localhost:4041/api/v1/laximo/oem/vehicle/?task=vin&vin=${vin}`);
  dispatch({
    type: SEARCH_BY_VIN_SUCCESS,
    payload: res.data.data
  })
};

export const secondSearchByVin = () => async dispatch => {
  let generalInfo = store.getState().repair.generalInfo;
  const res = await axios.get(`http://localhost:4041/api/v1/laximo/oem/groups/?catalog=${generalInfo.list[0]['@catalog']}&oem=undefined&product_id=undefined&ssd=%24%${generalInfo.search_info.ssd}%24&task=qdetails&vehicle_id=${generalInfo.list[0]['@vehicleid']}&wizard=${generalInfo.search_info.wizard}&wizard2=${generalInfo.search_info.wizard2}`);
  console.log(res, 444)
  dispatch({
    type: SECOND_SEARCH_BY_VIN,
    payload: res.data.data
  })
};

export const searchDetail = groupId => async dispatch => {
  let fullInfo = store.getState().repair.fullInfo;
  const res = await axios.get(`http://localhost:4041/api/v1/laximo/oem/detail/?catalog=${fullInfo.search_info.catalog}&category_id=undefined&quick_group_id=${groupId}&ssd=%24%${fullInfo.search_info.ssd}%24&task=qdetails&vehicle_id=${fullInfo.search_info.vehicleId}`);
  dispatch({
    type: SEARCH_DETAIL,
    payload: res.data.data
  })
};