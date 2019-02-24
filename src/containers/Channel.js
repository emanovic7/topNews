import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChannel, activateChannel } from '../actions'


// let Channel = ({ channelName, channelString, getChannel, active }) => (
//   <div onClick={getChannel} className=" col-lg-2 col-md-4 col-sm-6 ">
//     <p>{channelName}</p>
//   </div>
// );



let Channel = ({ channelName, channelString, getChannel, active }) => (
    <div  className=" col-lg-2 col-md-4 col-sm-6 ">
        <div className="channel-button" onClick={getChannel}
            style={{ backgroundColor: active === channelString ? 'orange' : '' }}>
            <p>{channelName}</p>
        </div>
    </div>
)

const mapStateToProps = (state) => ({active: state.channel})

const mapDispatchToProps = (dispatch, ownProps) => ({
   getChannel: () => {dispatch(getChannel(ownProps.channelString));
   }
})


export default connect(mapStateToProps, mapDispatchToProps)(Channel);
