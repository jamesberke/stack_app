import { connect } from 'react-redux';
import { createChannel }  from '../../actions/channel_actions';
import { closeModal } from '../../actions/modal_actions';
import React from 'react';

class ChannelCreateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", 
                        description: "",  
                        is_private: false, 
                        is_dm: false
                    };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    update(field) {
        return e => this.setState({ [field]: e.target.value,})
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createChannel(this.state)
        this.setState({ name: "",
                        description: "",
                        is_private: false,
                        is_dm: false
                        });
        this.props.closeModal();
    };

    render() {
        return (
            <div className="channel-create-form-container">
                <form className="channel-create-form"
                        onSubmit={this.handleSubmit}>
                    <h2 className="channel-create-title">
                        Start a new channel
                    </h2>
                    <label>Name:
                        <input required
                                type="text"
                                className="channel-name-input"
                                value={this.state.name}
                                onChange={this.update('name')}
                                placeholder="Channel Name"/>
                    </label>
                    <label>Description:
                        <textarea type="text"
                                className="channel-description-input"
                                value={this.state.description}
                                onChange={this.update('description')}
                                placeholder="Channel Description"/>
                    </label>
                    <input type="submit"
                            className="channel-create-submit"
                            value="Create Channel"/>
                </form>
            </div>
        )
    };
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    createChannel: channel => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCreateForm)