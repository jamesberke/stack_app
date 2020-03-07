import { connect } from 'react-redux';
import ChannelShow from './channel_show';

const mapStateToProps = state => ({
    messages: Object.values(state.messages)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelShow);