import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Address from './Address';
import PopupButton from './PopupButton';

class CustomerDetails extends React.Component {

    render(){
        return(
            <div>
                <h3 className="myHeader">Customer Sign-up</h3>
                <fieldset>
                        <label>Customer Name*:</label>
                        <br/><input value = {this.props.customerName} className="customer-details" placeholder="Customer's full Name" type="text" id="customerName" name="customerName" align= "right" onChange={e=> this.props.handleChange(e)}/>
                        <br/><br/>
                        
                        <PopupButton id="address" description = "Add address" 
                            popUpComponent={Address} 
                            popUpFunction= {this.props.saveFromPopup}
                            popUpChangeHandler={this.props.handleChange}
                        />

                        <br/>
                        <label>Shipping Address*:</label>
                        <br/><textarea resize="none" readOnly="readonly" className="customer-address" placeholder="Click on Add address" value = {this.props.shippingAddressValue} type="text" id="shippingAddress" name="shippingAddress" 
                        onChange={e=> this.props.handleChange(e)}/>
                        <br/>
                        <input type="checkbox" id="isShippingBillingSame" name="isShippingBillingSame"  onChange={e=> this.props.handleBoxChange(e)}/>&nbsp;<label>Billing address same as Shipping Address</label>
                        <br/>
                        <label>Billing Address*:</label>
                        <br/><textarea readOnly="readonly" className="customer-address" value = {this.props.billingAddressValue} placeholder="Click on Add address" type="text" id="billingAddress" name="billingAddress" onChange={e=> this.props.handleChange(e)}/>
                        <br/>
                        <label>Email Address*:</label>
                        <br/><input value = {this.props.emailAddress} className="customer-details" placeholder="username@example.com" type="email" id="emailAddress" name="emailAddress" align= "right" onChange={e=> this.props.handleChange(e)}/>
                        <br/>
                        <label>Contact Number*: </label>
                        <br/><input value = {this.props.contactNumber} className="customer-details" type="number" id="contactNumber" name="contactNumber" align= "right" onChange={e=> this.props.handleChange(e)}/>
                </fieldset>
            </div>
        )
    }

 }

 export default CustomerDetails;