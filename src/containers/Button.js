import React, { Component } from 'react';
import { connect } from 'react-redux'



let Button = ({getPosts, channel}) => (
  <button onClick={() => { getPosts(channel) }}>
    Get Posts
  </button>
)

const mapStateToProps = (state) => ({
  return {channel: state.channel}
})


const mapDispatchToProps = (dispatch) => {getPosts: fetchPosts}


export default (mapStateToProps, mapDispatchToProps)(Button);
