import React from "react";
import ReactQuill from "react-quill";
import { connect } from "react-redux";
import { createMessage } from "../../actions/message_actions";
import "react-quill/dist/quill.snow.css";


class MessageForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {body: ""};
        this.reactQuillRef = null;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.modules = {
            toolbar: {
                container: [
                    [
                        'bold', 
                        'italic', 
                        'underline', 
                        'strike', 
                        'blockquote',
                        'code-block',
                        { 'list': 'ordered' }, 
                        { 'list': 'bullet' }
                    ]
                ]
            }
        };

        this.formats = [
            'bold',
            'italic',
            'underline',
            'strike',
            'blockquote',
            'codeblock',
            'list',
            'bullet'
        ];
    };

    update(content, delta, source, editor) {
        return this.setState({ 'body': editor.getHTML(), 
                                ['channel_id']: this.props.currentChannel.id
                            });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.createMessage(this.state);
        this.setState({body: ""});
    }

    getPlaceholder() {
        if (this.props.currentChannel) {
            if (this.props.currentChannel.isDm) {
                return 'New Direct Message'
            } else {
                return `Message # ${this.props.currentChannel.name}`
            }
        };  
    }

    render() {
        return (
            // <form className="message-form-container" onSubmit={this.handleSubmit}>
            //     <input className="message-form-input" 
            //             type="text" 
            //             value={this.state.body} 
            //             onChange={this.update('body')} 
            //             placeholder={this.getPlaceholder()}>
            //     </input>
            // </form>
            <div className='message-form-container'>
                <ReactQuill ref={el => this.reactQuillRef = el}
                            className='message-form-input'
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats} 
                            onChange={this.update}
                            value={this.state.body}
                            placeholder={this.getPlaceholder()}
                            />
            </div>
        )
    };

}

const mapStateToProps = state => ({
    currentChannel: state.entities.channels[state.session.currentChannel],
    users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
    createMessage: message => dispatch(createMessage(message))
})

export default connect (mapStateToProps, mapDispatchToProps)(MessageForm);