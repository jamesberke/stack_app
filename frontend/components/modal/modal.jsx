import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ChannelCreateForm from '../channel/channel_create_form';
import React from 'react';
import SearchContainer from '../search/search_container';

const Modal = ({ modal, closeModal }) => {

    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'createChannel':
            component = <ChannelCreateForm />;
            break;  
        case 'channelSearch':
            component = <SearchContainer />; 
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