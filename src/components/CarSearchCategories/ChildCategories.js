import React, {Fragment} from 'react'
import {searchDetail} from "../../store/actions/repairAction";
import {connect} from 'react-redux'

const ChildCategories = props => {
  return(
    <ul hidden>
      {props.item.map((item, key) =>
        <Fragment key={key}>
          <li>
            {Array.isArray(item.row) && <ChildCategories item={item.row} searchDetail={props.searchDetail}/>}
            {Array.isArray(item.row)
              ? <span>{item['@name']}</span>
              : <span onClick={() => props.searchDetail(item['@quickgroupid'])}>{item['@name']}</span>
            }
          </li>
        </Fragment>
      )}
    </ul>
    )
};


const mapDispatchToProps = {
  searchDetail: searchDetail
};

export default connect(null, mapDispatchToProps)(ChildCategories)