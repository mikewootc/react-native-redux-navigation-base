import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import ScreenLogin from '../components/ScreenLogin'

function mapStateToProps (state, ownProps) {
    return {}
}

function mapDispatchToProps(dispatch, myProps) {
    return {
        onClick: () => {
            console.log('dispatch ACTION_NAVIGATE');
//            dispatch(
//                NavigationActions.navigate({ routeName: 'ScreenVideoCall' })
//            );
        }
    }
}

export default ScreenLoginCtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenLogin)
