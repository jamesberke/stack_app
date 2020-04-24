import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ChannelCreateForm from '../channel/channel_create_form';
import ChannelSearchContainer from '../search/channel_search_container';
import React from 'react';
import UserSearchContainer from '../search/user_search_container';

const Modal = ({ modal, closeModal }) => {

    if (!modal) {
        return null;
    }

    // uses a string variable called modal to determine which comonent to render
    // if info needs to be passed later I cna refactor to send a pojo with a type: key
    // and a data: key
    let component;
    switch (modal) {
        case 'createChannel':
            component = <ChannelCreateForm />;
            break;  
        case 'channelSearch':
            component = <ChannelSearchContainer />; 
            break;
        case 'userSearch':
            component = <UserSearchContainer />;
            break;
        default:
            break;
    }

    return (
        <div className="modal-screen" onClick={closeModal}>
            <div className="modal-render" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )

}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal)