import React from 'react';
import ReactDOM, { render } from 'react-dom';
import CustomerDetails from './CustomerDetails';
import LoginDetails from './LoginDetails';
import axios from 'axios';

class CustomerCreation extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            customerName: "",
            shippingAddress: "",
            isShippingBillingSame: false,
            billingAddress: "",
            emailAddress: "",
            contactNumber: "",

            countries: "",
            fullName: "",
            mobileNumber: "",
            pinCode: "",
            flatNo: "",
            floor: "",
            buildingName: "",
            locality: "",
            landmark: "",
            city: "",
            state: "",
            addressType: "Ship",

            userName: "",
            password: "",

            confirmPassword: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleBoxChange = this.handleBoxChange.bind(this);
        this.saveFromPopup = this.saveFromPopup.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="myHeader"><i><u>Alfred Hitchcock Memorabilia</u></i></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <fieldset>
                            <CustomerDetails handleChange={this.handleChange} handleBoxChange={this.handleBoxChange} saveFromPopup = {this.saveFromPopup} 
                            billingAddressValue={this.state.billingAddress}
                            shippingAddressValue={this.state.shippingAddress}
                            customerName={this.state.customerName}
                            isShippingBillingSame={this.state.isShippingBillingSame}
                            emailAddress={this.state.emailAddress}
                            contactNumber={this.state.contactNumber}/>

                            <fieldset>
                                <LoginDetails handleChange={this.handleChange} userNameDefault={this.state.userName} passwordDefault={this.state.password}/>
                                <label>
                                Confirm Password*: 
                                <br/><input value = {this.state.confirmPassword} className="login-details" type="password" name="CustomerName" align= "right" name="confirmPassword" onChange= {e => this.handleChange(e)}/>
                                </label>
                            </fieldset>

                            <button type = "button" onClick={this.handleSubmit}>Submit</button>&nbsp;&nbsp;
                            <button type = "button" onClick={this.handleButtonClick}>Cancel</button>
                            <br/><br/>
                        </fieldset>
                    </div>
                </div>
            </div>
        );
    }

    handleSubmit = event =>{

        event.preventDefault();

        const postData = {
            name: this.state.customerName,
            loginId: this.state.userName,
            password: this.state.confirmPassword,
            address: this.state.shippingAddress,
            shippingAddress: this.state.shippingAddress,
            billingAddress: this.state.billingAddress,
            email: this.state.emailAddress,
            contactNumber: this.state.contactNumber,
        }
        
        axios
            .post('http://192.168.100.29:8098/customer', postData)
            .then(
                response => {
                    if(response.data.customerId !=null && response.data.customerId>0){
                        
                        alert("Congratulations!!! you have successfully signed-up. \n" +
                        "Please go to login page and login using your login credentials");

                        this.cancelDataEntry();
                    }
                },
                error => {
                    alert(error);
                }
            )

    }

    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleBoxChange(evt){
        if(evt.target.checked){
            this.setState({billingAddress: this.state.shippingAddress});
        } else {
            this.setState({billingAddress: ""});
        }
    }

    saveFromPopup (){
                
        const countries = this.state.countries;
        const fullName = this.state.fullName;
        const mobileNumber = this.state.mobileNumber;
        const pinCode = this.state.pinCode;
        const flatNo = this.state.flatNo;
        const floor = this.state.floor;
        const buildingName = this.state.buildingName;
        const locality = this.state.locality;
        const landmark = this.state.landmark;
        const city = this.state.city;
        const state = this.state.state;
        const addressType = this.state.addressType;

        const fullAddress = fullName + ", \n" + 
                            "Flat No.- " + flatNo + ", Floor- " + floor + ", \n" +
                            buildingName + ", " + locality + ", \n" +
                            "Landmark : " + landmark + ", \n" +
                            "Pincode : " + pinCode  + ", \n" +
                            city + ", " + state + ", " + countries + "."

        if(addressType == "Ship"){
            this.setState({
                shippingAddress: fullAddress,
            });
        } else {
            this.setState({
                billingAddress: fullAddress,
            });
        }

        this.clearAddress();

    }

    clearAddress(){
        this.setState(
            {
                countries : "",
                fullName : "",
                mobileNumber : "",
                pinCode : "",
                flatNo : "",
                floor : "",
                buildingName : "",
                locality : "",
                landmark : "",
                city : "",
                state : "",
                addressType : "Ship",
            }
        )
    }

    handleButtonClick(){
        this.cancelDataEntry();
        alert("You have cancelled data entry. Please fill the form again if you want to continue.");
    }

    cancelDataEntry(){
        this.setState( 
            {

                customerName: "",
                shippingAddress: "",
                isShippingBillingSame: false,
                billingAddress: "",
                emailAddress: "",
                contactNumber: "",

                countries: "",
                fullName: "",
                mobileNumber: "",
                pinCode: "",
                flatNo: "",
                floor: "",
                buildingName: "",
                locality: "",
                landmark: "",
                city: "",
                state: "",
                addressType: "Ship",

                userName: "",
                password: "",

                confirmPassword: "",
            }
        )
    }

}

export default CustomerCreation;