import React, {Component} from 'react';
import ContactImg from '../assets/images/contact-image.png'
import MacaronsHomeImg from '../assets/images/macarons-image.png'

class ContactForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                comment: ''
            }
        };

        this.submitHandle = this.submitHandle.bind(this);
        this.inputChangeHandle = this.inputChangeHandle.bind(this);
    }

    resetInput(){
        this.setState({
            form: {
                name: '',
                email: '',
                phone: '',
                subject: '',
                comment: ''
            }
        });
    }

    inputChangeHandle(event){
        const { value, name } = event.target;

        const { form } = this.state;

        form[name] = value;

        this.setState({
            form: {...form}
        });
    }

    submitHandle(event){
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form);

        this.resetInput();
    }

    render(){
        const { name, email, phone, subject, comment } = this.state.form;

        return (
            <div>
                <div className='row'>
                    <div className='col s12'>
                        <img className='titleImg' src={ContactImg}/>
                    </div>
                </div>

                <div className='row'>
                    <div className='col s4'>
                        <h5>Visit us!</h5>
                        <p>Monday - Friday | 10am - 9pm <br/>
                            Saturday | 10am- 8pm <br/>
                            Sunday | 11am - 7pm <br/>
                            Closed Thanksgiving Day, Christmas Day and Easter Day</p>
                        <p>1625 Post St <br/>
                            San Francisco, CA 94115</p>
                        <p>949-800-3111</p>
                        <a href='#'>order@mboutique.com</a>
                        <p>Send your questions, comments and flavor suggestions or place an order!!!</p>
                    </div>

                    <div className='col s4'>
                        <h5>Contact Form</h5>
                        <form id='contactFormSubmit' onSubmit={this.submitHandle}>
                            <input name='name' id='name' type='text' className='validate' placeholder='Name' value={name} onChange={this.inputChangeHandle}/>
                            <input name='email' id='email' type='email' className='validate' placeholder='Email' value={email} onChange={this.inputChangeHandle}/>
                            <input name='phone' id='phone' type='tel' className='validate' placeholder='Phone' value={phone} onChange={this.inputChangeHandle}/>
                            <input name='subject' id='subject' type='text' className='validate' placeholder='Subject' value={subject} onChange={this.inputChangeHandle}/>
                            <textarea name='comment' rows="4" cols="50" form="contactFormSubmit" value={comment} onChange={this.inputChangeHandle}/>
                            <button type='submit' form='contactFormSubmit'>Send</button>
                        </form>
                    </div>

                    <div className='col s4 center-align'>
                        <img className='macaronsMainImg' src={MacaronsHomeImg}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;