import React from 'react'
import {connect} from 'react-redux'
import './DetailGroup.scss'

const DetailGroup = props => {
  return(
    <div className='detail-group'>
      {Object.keys(props.detailInfo).length > 0 && props.detailInfo.list.map((item, key) =>
        <div className='detail-group__item' key={key}>
          <h4>{item['@name']}</h4>
          {Array.isArray(item.Unit)
            ? props.detailInfo.list[0].Unit.map((item, key) =>
              <div className='detail-group__info' key={key}>
                <p>{item['@name']}</p>
                <div className="detail-group__wrap">
                  <img src={item['@imageurl'].replace('%size%', 175)} alt=""/>
                  <div className="info">
                    <div className="info__row">
                      <span>№ Detail</span>
                      <span>OEM</span>
                      <span>Detail name</span>
                    </div>
                    <div className="info__row info__row--res">
                      <span>{item['@code']}</span>
                      <span>32</span>
                      <span>{item['@name']}</span>
                    </div>
                  </div>
                </div>

              </div>
            )
            : <div className='detail-group__info' key={key}>
                <p>{props.detailInfo.list[0].Unit['@name']}</p>
                <div className="detail-group__wrap">
                  <img src={props.detailInfo.list[0].Unit['@imageurl'].replace('%size%', 175)} alt=""/>
                  <div className="info">
                    <div className="info__row">
                      <span>№ Detail</span>
                      <span>OEM</span>
                      <span>Detail name</span>
                    </div>
                    <div className="info__row info__row--res">
                      <span>{props.detailInfo.list[0].Unit['@code']}</span>
                      <span>32</span>
                      <span>{props.detailInfo.list[0].Unit['@name']}</span>
                    </div>
                  </div>
                </div>
              </div>}
        </div>
      )}
    </div>
  )
};

const mapStateToProps = state => {
  return {
    detailInfo: state.repair.detailInfo
  }
}

export default connect(mapStateToProps)(DetailGroup);