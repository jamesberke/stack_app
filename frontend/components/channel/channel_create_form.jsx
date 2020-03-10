import { connect } from 'react-redux';
import { createChannel }  from '../../actions/channel_actions';
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
                        })
    };

    render() {
        return (
            <div className="channel-create-form-container">
                <form className="channel-create-form">
                    <label>Name:
                        <input type="text"
                                className="channel-name-input"
                                value={this.state.name}
                                onChange={this.update('name')}
                                placeholder="Channel Name"/>
                    </label>
                    <label>Description:
                        <input type="text"
                                className="channel-description-input"
                                value={this.state.description}
                                onChange={this.update('description')}
                                placeholder="Channel Description"/>
                    </label>
                </form>
            </div>
        )
    };
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    createChannel: channel => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelCreateForm)