import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initUserSyncAction, stopUserSyncaction } from './state/users'
class Users extends Component {
    componentDidMount() {
        this.props.initUserSyncAction()
    }

    componentWillUnmount(){
        this.props.stopUserSyncaction
    }
    render() {
        return (
            <div>
                {
                    this.props.users === null ?
                        'ŁADOWANIE'
                        :
                        Object.entries(this.props.users)
                            .map(([key, value]) => ({
                                ...value,
                                key
                            }))
                            .map(user =>
                                <div>{user.name}</div>)
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users
})

const mapDispatchToProps = dispatch => ({
    initUserSyncAction: () => dispatch(initUserSyncAction()),
    stopUserSyncaction: () => dispatch(stopUserSyncaction())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)