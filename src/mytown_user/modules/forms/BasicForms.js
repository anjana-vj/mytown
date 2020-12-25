import React from 'react';
//import { NavLink } from 'react-router-dom';
import data from '../../../mytown/mytown_data.json';

class BusinessUserRegistration extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                            <h2>Registration</h2>
                            <form className="form">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="bname" placeholder="Busness Name" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="ename" placeholder="Enterprenour Name" required />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name="category" id="category">
                                        <option disabled selected>Choose category</option>
                                        {data.clist.map((categories) => {
                                            return (
                                                <option>{categories.domain}</option>
                                            )
                                        })}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="address_bar1" placeholder="Address Line 1" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="address_bar2" placeholder="address Line 2" required />
                                </div>

                                <div className="form-group">
                                    <select className="custom-select" name="City" >
                                        <option disabled selected>Choose City</option>
                                        {data.city.map((cities) => {
                                            return (
                                                <option>{cities.city}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="pin" placeholder="pin" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="cno" placeholder="contact number" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="bankacno" placeholder="Bank Account no" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="bankaddress" placeholder="Bank Address" required />
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-success" type="button">Register</button>

                                </div>
                            </form>
                        </div>
                    </div>
                    </div>  
                </section>
            </div>

        )
    }
}


export { BusinessUserRegistration }
