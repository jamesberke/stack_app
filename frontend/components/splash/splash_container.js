import { connect } from "react-redux";
import Splash from "./splash";


const mapStateToProps = ({ session, entities: { users } }) => ({
        currentUser: users[session.id]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);