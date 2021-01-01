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
class CustomerRegistration extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2>Public User Registration</h2>
                                <form className="form">
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="uname" placeholder="User Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="UAddress" placeholder="Address" required />
                                    </div>
                                    <div className="form-group">

                                        Gender: <input type="radio" name="gender" placeholder="gender" required />Male
                                      <input type="radio" name="gender" placeholder="gender" required />Female
                                      </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="cno" placeholder="Contact No" required />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="button">Save</button>

                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="button">Edit</button>

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
class UserBookings extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2>My Bookings</h2>
                                <table className="table m-n">
                                    <tr>
                                        <th>Business Name</th>
                                        <th>Category</th>
                                        <th>Address</th>
                                        <th>Booking Time</th>
                                        <th>Booking Status</th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
class MyReviews extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>My Reviews</h2>
                            <table className="table">
                                <tr>
                                    <th>Business Name</th>
                                    <th>Category</th>
                                    <th>City</th>
                                    <th>Review</th>
                                    <th>Ratings</th>
                                    <th>Actions</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class BRegistration extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
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
                                <div className="form-group">
                                    <button className="btn btn-lg btn-success" type="button">Premium Membership</button>

                                </div>


                            </form>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
class PremiumMembershipForm extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>Premium Membership Registration</h2>
                            <form className="form">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="membershipid" placeholder="Membership ID" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="duration" placeholder="Membership Duration" required />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name="duration" id="duration">
                                        <option>Choose category</option>
                                        <option>6 Months</option>
                                        <option>1 Year</option>         
                                    </select>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="button">Proceed </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
class ViewMyAccountForm extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>My Account</h2>
                            <form className="form">
                                <div className="form-group">
                                    <input className="form-control" type="text" name="bname" placeholder="Busness Name" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="ename" placeholder="Enterprenour Name" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="category" placeholder="Category" required />
                                </div>

                                <div className="form-group">
                                    <input type="text" className="form-control" name="address_bar1" placeholder="Address Line 1" required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="address_bar2" placeholder="address Line 2" required />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" name="city" placeholder="City" required />
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
                            </form>
                            <div className="form-group">
                                <input type="text" className="form-control" name="bankaddress" placeholder="Bank Address" required />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-lg btn-success" type="button">Edit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
class EditAccountDetails extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>Edit Account Details</h2>
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
                                    <button className="btn btn-lg btn-success" type="button">Save</button>

                                </div>
                                <div className="form-group">
                                    <button className="btn btn-lg btn-success" type="button">Back</button>

                                </div>


                            </form>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
class ManageBookings extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6"></div>
                            <h2>Manage Bookings</h2>
                            <table className="table table-bordered bg-white">
                                <tr>
                                    <th>SI.No</th>
                                    <th>User Name</th>
                                    <th>Category</th>
                                    <th>Address</th>
                                    <th>Contact No</th>
                                    <th>Booking Time</th>
                                    <th>Booking Date</th>
                                    <th>Actions</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

class CustomerReview extends React.Component{
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <h2>Reviews</h2>
                        <table className="table">
                            <tr>
                                <th>Customer Id</th>
                                <th>Review</th>
                                <th>Ratings</th>
                                <th>Actions</th>
                            </tr>
                            {
                                data.reviews.map((review) => {
                                    return (

                                        <tr>
                                            <td>{review.cid}</td>
                                            <td>{review.review}</td>
                                            <td>{review.rating}</td>
                                        </tr>


                                    )
                                })
                            }
                             </table>
                    </div>
                </section>
            </div>
        )
    }

}

export { BusinessUserRegistration, CustomerRegistration, CustomerReview,ManageBookings, EditAccountDetails, ViewMyAccountForm, UserBookings, MyReviews, PremiumMembershipForm }
