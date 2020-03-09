import ChannelHeader from './channel_header';
import { connect } from 'react-redux';
import { fetchMessage } from '../../actions/message_actions';

const mapStateToProps = state => ({
    currentChannel: state.entities.channels.currentChannel
});

const mapDispatchToProps = dispatch => ({
    fetchMessage: messageId => dispatch(fetchMessage(messageId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHeader)