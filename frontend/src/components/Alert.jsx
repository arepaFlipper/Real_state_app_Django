import React from 'react'
import propTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  return (
    (alerts !== null && alerts.length > 0) && alerts.map(alert => {
      return (
        <div key={alert.id} className={`alert alert--${alert.alertType}`}>
          {alert.msg}
        </div>
      )
    })
  )
};

Alert.propTypes = {
  alerts: propTypes.array.isRequired
}
const mapStateToProps = state => {
  console.log(`🟠%cAlert.jsx:23 - state`, 'font-weight:bold; background:#629d00;color:#fff;'); //DELETEME
  console.log(state); // DELETEME
  return ({
    alerts: state.alert,
  })
}

export default connect(mapStateToProps)(Alert);
