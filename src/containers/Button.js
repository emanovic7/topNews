import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'



let Button = ({getPosts, channel}) => (
  <button
    onClick={() => { getPosts(channel) }}
    className='btn btn-primary btn-lg btn-block' >
    Get Posts
  </button>
)

const mapStateToProps = (state) => ({
 channel: state.channel
})

const mapDispatchToProps = { getPosts: fetchPosts }


export default connect(mapStateToProps, mapDispatchToProps)(Button);
