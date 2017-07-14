import React from 'react';
import NameField from './NameField';
import EmailField from './EmailField';
import PhoneField from './PhoneField';
import BirthdayField from './BirthdayField';
import SubmitButton from './SubmitButton';
import Button from './Button';
import PropTypes from 'prop-types';

export default class UserForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      dob:"" ,
      nameError: "",
      emailError : "",
      phoneError : "",
      dobError : "" 
    };
    
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.onAdd = this.onAdd.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  handleNameChange(e) {
    this.setState({name : e.target.value});
    console.log("name : "+e.target.value);
  }

  handleEmailChange(e) {
    this.setState({email : e.target.value});
    console.log("email : "+e.target.value);
  }

  handlePhoneChange(e) {
    this.setState({phone : e.target.value});
    console.log("phone : "+e.target.value);
  }

  handleBirthdayChange(e) {
    this.setState({dob : e.target.value});
    console.log("dob : "+e.target.value);
  }

  invalidForm() {
    let invalid = false;
    if (!(/^\w+[a-zA-z\s]*$/.test(this.state.name))) {
      this.setState({nameError : "please enter valid name" });
      invalid = true;
      console.log("inavlid name");
    } else {
       this.setState({nameError : "" });
        console.log("valid name");
    }
    if(!(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(this.state.email))) {
      this.setState({emailError : "please enter valid email address" });
      invalid = true;
      console.log("inavlid email");
    } else {
       this.setState({emailError : "" });
        console.log("valid email");
    }
    if(!(/^[7-9]{1}[0-9]{9}$/.test(this.state.phone))) {
      this.setState({phoneError : "please enter valid phone number" });
      invalid = true;
      console.log("inavlid phone");
    } else {
       this.setState({phoneError : "" });
        console.log("valid phone");
    }
     if((this.state.dob)==="") {
      this.setState({dobError : "please enter valid birth date" });
      invalid = true;
      console.log("inavlid dob");
    } else {
       this.setState({dobError : "" });
        console.log("valid dob");
    }

    return invalid;
  }

  onAdd(e) {
    if(e)
      e.preventDefault();

    if (this.invalidForm())
      return;

    const user = {...this.state};
    delete user.nameError;
    delete user.phoneError;
    delete user.emailError;
    delete user.dobError;

    this.props.onAdd(user);
  }

  onCancel(e) {
    if(e) 
      e.preventDefault();
    this.props.onCancel();
  }

  render() {
    return (
      <form className="col-lg-6">
        <NameField name={this.state.name} onChange={this.handleNameChange} error={this.state.nameError}/>
        <EmailField email={this.state.email} onChange={this.handleEmailChange} error={this.state.emailError}/>
        <PhoneField phone={this.state.phone} onChange={this.handlePhoneChange} error={this.state.phoneError}/>
        <BirthdayField dob={this.state.dob} onChange={this.handleBirthdayChange} error={this.state.dobError}/>
        <SubmitButton label="add" action={this.onAdd}/>&nbsp; 
        <Button className="btn btn-danger" action={this.onCancel} label="cancel"/>
      </form>
    )
  }
}

UserForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
}