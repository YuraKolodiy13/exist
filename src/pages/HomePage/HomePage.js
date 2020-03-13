import React, {Component} from 'react'
import {connect} from "react-redux";
import Loader from "../../components/Loader/Loader";
import {searchByVin, secondSearchByVin} from "../../store/actions/repairAction";
import './HomePage.scss'
import CarSearchCategories from "../../components/CarSearchCategories/CarSearchCategories";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import DetailGroup from "../../components/DetailGroup/DetailGroup";

class HomePage extends Component{

  constructor(props){
    super(props);
    this.state = {
      vin: ''
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.searchByVin(this.state.vin);
  };

  onBlur = e => {
    e.target.closest('.MuiFormControl-root').classList.remove('trigger')
  };

  render(){
    const {generalInfo, fullInfo} = this.props;
    if(this.props.loading){
      return <Loader/>
    }
    return(
      <div className='search'>
        <ValidatorForm
          onSubmit={(e) => this.onSubmit(e)}
          className='search__from trigger__wrap'
          onError={() => document.querySelector('.search__from').classList.remove('trigger__wrap')}
        >
          <TextValidator
            id="outlined-basic"
            label="Vin"
            name='vin'
            className='trigger'
            variant="outlined"
            value={this.state.vin}
            onChange={(e) => this.setState({vin: e.target.value})}
            validators={['required', 'minStringLength:17', 'maxStringLength:17']}
            errorMessages={['this field is required', 'VIN must contain 17 characters', 'VIN must contain 17 characters']}
            onBlur={this.onBlur}
          />
        </ValidatorForm>

          {!Object.keys(fullInfo).length
            ? Object.keys(generalInfo).length && generalInfo.list.length
              ?<div className="info">
                <div className="info__row">
                  <span>Brand</span>
                  <span>Model</span>
                  <span>Year</span>
                  <span>Engine</span>
                </div>
                <div className="info__row info__row--res" onClick={this.props.secondSearchByVin}>
                  <span>{generalInfo.search_info.brand}</span>
                  <span>{generalInfo.list[0]['@name']}</span>
                  <span>{generalInfo.list[0].attribute[2]['@value']}-{generalInfo.list[0].attribute[3]['@value']}</span>
                  <span>{generalInfo.list[0].attribute[10]['@value']}</span>
                </div>
              </div>
              : null
            :<div className='data-wrapper'>
              <CarSearchCategories fullInfo={fullInfo}/>
              <DetailGroup/>
            </div>
          }

      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    generalInfo: state.repair.generalInfo,
    fullInfo: state.repair.fullInfo,
    loading: state.repair.loading
  }
};
const mapDispatchToProps = {
  searchByVin: searchByVin,
  secondSearchByVin: secondSearchByVin,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)