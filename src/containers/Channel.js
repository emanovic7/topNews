import React, { Component } from 'react';
import { connect } from 'react-redux';


let Channel = ({ channelName, channelString, active }) => (
  <div onClick={getChannel}>
    <p>{channelName}</p>
  </div>
)

const mapStateToProps = (state) => {
  return{
    active: state.channel
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getChannel: () => dispatch(getChannel(ownProps.channelString))}
}


export default connect(mapStateToProps, mapDispatchToProps)(Channel);
