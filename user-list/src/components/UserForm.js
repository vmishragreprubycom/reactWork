import React from 'react';
import NameField from './NameField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';
import BirthdayField from './BirthdayField';
import SubmitButton from './SubmitButton';
import Button from './Button';
import PropTypes from 'prop-types';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    const empty = {
      name: "",
      email: "",
      phone: "",
      dob:"" ,
      nameError: "",
      emailError : "",
      phoneError : "",
      dobError : "" 
    };
    
    this.state = props.user || empty;

    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.onAdd = this.onAdd.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  handleNameChange(event) {
    this.setState({name : event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email : event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({phone : event.target.value});
  }

  handleBirthdayChange(event) {
    this.setState({dob : event.target.value});
  }

  invalidForm() {
    let invalid = false;
    if (!(/^\w+[a-zA-z\s]*$/.test(this.state.name))) {
      this.setState({nameError : "please enter valid name" });
      invalid = true;
    } else {
       this.setState({nameError : "" });
    }
    if(!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.state.email))) {
      this.setState({emailError : "please enter valid email address" });
      invalid = true;
    } else {
       this.setState({emailError : "" });
    }
    if(!(/^[7-9]{1}[0-9]{9}$/.test(this.state.phone))) {
      this.setState({phoneError : "please enter valid phone number" });
      invalid = true;
    } else {
       this.setState({phoneError : "" });
    }
     if((this.state.dob)==="") {
      this.setState({dobError : "please enter valid birth date" });
      invalid = true;
    } else {
       this.setState({dobError : "" });
    }

    return invalid;
  }

  onAdd(event) {
    if(event)
      event.preventDefault();

    if (this.invalidForm())
      return;

    const user = {...this.state};
    delete user.nameError;
    delete user.phoneError;
    delete user.emailError;
    delete user.dobError;

    this.props.onAdd(user);
  }

  onCancel(event) {
    if(event) 
      event.preventDefault();
    this.props.onCancel();
  }

  onUpdate(event) {
    if(event)
      event.preventDefault();

    if (this.invalidForm())
      return;

    const user = {...this.state};
    delete user.nameError;
    delete user.phoneError;
    delete user.emailError;
    delete user.dobError;

    this.props.onUpdate(user);
  }

  render() {
    return (
      <form className="col-lg-6">
        <NameField name={this.state.name} onChange={this.handleNameChange} error={this.state.nameError}/>
        <EmailField email={this.state.email} onChange={this.handleEmailChange} error={this.state.emailError}/>
        <PhoneField phone={this.state.phone} onChange={this.handlePhoneChange} error={this.state.phoneError}/>
        <BirthdayField dob={this.state.dob} onChange={this.handleBirthdayChange} error={this.state.dobError}/>
        {
          this.props.user ?
            <SubmitButton label="update" action={this.onUpdate}/> :
            <SubmitButton label="add" action={this.onAdd}/>
        }
        &nbsp;
        <Button className="btn btn-danger" action={this.onCancel} label="cancel"/>
      </form>
    )
  }
}

UserForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func,
  onUpdate: PropTypes.func
}