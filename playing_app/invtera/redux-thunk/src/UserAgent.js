import React from 'react'
import { connect } from 'react-redux'
import actions from './actions'

class UserAgent extends React.Component {
  componentDidMount () {
    this.props.loadUA()
    console.log('########## componentDidMount')
  }
  
  render () {
    if (this.props.isFetching) { return <span>Loading</span> }
    if (this.props.error) { return <span>Error</span> }
    return <span>User-Agent: {JSON.stringify(this.props.data['user-agent'])}</span>
  }
}

const mapStateToProps = (state) => {
  console.log('########## mapStateToProps')
  return {
    isFetching: state.ua.isFetching,
    data: state.ua.data
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('########## mapDispatchToProps')
  return {
    loadUA: () => dispatch(actions.loadUA())
  }
}

const texto = () => {
  console.log('########## mapDispatchToProps')
  return "ok"
}



export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)
