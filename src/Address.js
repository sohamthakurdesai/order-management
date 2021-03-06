import React from 'react';
import ReactDOM, { render } from 'react-dom';
import CountrySelect from './CountrySelect';
import CustomerDetails from './CustomerDetails';

class Address extends React.Component {

    render(){
        return(
            <form>
                <b><i>Country</i></b><br/>
                <CountrySelect onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Full name</i></b><br/>
                <input type="text" placeholder="Full name" defaultValue="" id="fullName" name="fullName" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Mobile number</i></b><br/>
                <input type="number" defaultValue="" id="mobile" name="mobileNumber" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Pincode</i></b><br/>
                <input type="number" defaultValue="" id="pin" name="pinCode" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Flat/House No.</i></b><br/>
                <input type="text" defaultValue="" id="flatNo" name="flatNo" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Floor</i></b><br/>
                <input type="number" defaultValue="" min="0" max="200" id="floor" name="floor" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Building Name/Wing</i></b><br/>
                <input type="text" defaultValue="" id="buildingName" name="buildingName" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Colony/Street/Locality</i></b><br/>
                <input type="text" defaultValue="" id="locality" name="locality" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Landmark</i></b><br/>
                <input type="text" defaultValue="" id="landmark" name="landmark" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>City</i></b><br/>
                <input type="text" defaultValue="" id="city" name="city" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>State</i></b><br/>
                <input type="text" defaultValue="" id="state" name="state" onChange={e=> this.props.handleChange(e)}/>
                <br/><b><i>Address Type</i></b><br/>
                <select id="addressType" selected="Ship" name="addressType" onChange={e=> this.props.handleChange(e)}>
                    <option value="Ship">Shipping Address</option>
                    <option value="Bill">Billing Address</option>
                </select>
                <br/><br/>
            </form>
        );
    }
    
}

export default Address;