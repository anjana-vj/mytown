import React from 'react';
import { NavLink } from "react-router-dom";
import './../../firebase';
import firebase from 'firebase';
import $ from 'jquery';
import serializeJSON from 'jquery-serializejson';
window.serializeJSON = serializeJSON;
class CategoriesModule extends React.Component {
    constructor() {
        super();
        this.addCategories = this.addCategories.bind(this)
        this.readCategories = this.readCategories.bind(this)
        this.deleteCategories = this.deleteCategories.bind(this)
        this.input_handlerCategories = this.input_handlerCategories.bind(this)
        this.state = {
            categories: []
        }
    }
    componentDidMount() {
        this.readCategories()
    }
    addCategories = (e) => {
        e.preventDefault();
        var data = {}
        var database = firebase.database();
        var key = database.ref('categories').push().key;
        data['domain'] = this.state.input_handlerCategoriesValue
        data['key'] = key;
        database.ref('categories/' + key).set(data, (error) => {
            if (error) { alert(error); } else {
                this.readCategories();
                this.setState({
                    input_handlerCategoriesValue: ''
                })
                $('#AddCategoriesModuleForm').trigger("reset");
            }
        });
    }
    deleteCategories = (category) => {
        var database = firebase.database();
        var CategoriesRef = database.ref('categories/' + category.key);
        CategoriesRef.remove().then(() => {
            alert('Deleted : ' + category.domain);
        }).catch(err => {
            alert(err);
        });
    }
    readCategories = () => {
        var database = firebase.database();
        var CategoriesRef = database.ref('categories');
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    categories: datas
                })
            } else {
                this.setState({
                    categories: []
                })
            }
        });

    }
    input_handlerCategories = (e) => {
        e.preventDefault();
        this.setState({
            input_handlerCategoriesValue: e.target.value
        })
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row">
                            <div className="col-md-6">

                                <h2>All Categories</h2>

                                <table className="table m-2">
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th className="text-center">actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.categories.map((category) => {
                                                return (
                                                    <>
                                                        <tr key={category.key}>
                                                            <td >{category.domain}</td>
                                                            <td className="text-center">
                                                                <button className="btn btn-sm btn-primary" onClick={() => { alert("Not Available") }}>Edit</button> &nbsp;
                                                            <button className="btn btn-sm btn-danger" onClick={() => {
                                                                    var r = window.confirm("Do you want to delete : " + category.domain);
                                                                    if (r === true) {
                                                                        this.deleteCategories(category);
                                                                    }

                                                                }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className="col-md-5">
                                <form className="form m-2" id="AddCategoriesModuleForm" onSubmit={this.addCategories}>
                                    <h2>Add Category</h2>
                                    <div className="form-group">
                                        <input type="text" defaultValue={this.state.input_handlerCategoriesValue} onChange={this.input_handlerCategories} className="form-control" placeholder="category name" required />

                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-md btn-primary">Add</button>
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

class CitiesModule extends React.Component {
    constructor() {
        super();
        this.addCities = this.addCities.bind(this)
        this.readCities = this.readCities.bind(this)
        this.deleteCities = this.deleteCities.bind(this)
        this.input_handlerCities = this.input_handlerCities.bind(this)
        this.state = {
            cities: []
        }
    }
    componentDidMount() {
        this.readCities()
    }
    addCities = (e) => {
        e.preventDefault();
        var data = {}
        var database = firebase.database();
        var key = database.ref('cities').push().key;
        data['domain'] = this.state.input_handlerCitiesValue
        data['key'] = key;
        database.ref('cities/' + key).set(data, (error) => {
            if (error) { alert(error); } else {
                this.readCities();
                this.setState({
                    input_handlerCitiesValue: ''
                })
                $('#AddCitiesModuleForm').trigger("reset");
            }
        });
    }
    deleteCities = (city) => {
        var database = firebase.database();
        var CitiesRef = database.ref('cities/' + city.key);
        CitiesRef.remove().then(() => {
            alert('Deleted : ' + city.domain);
        }).catch(err => {
            alert(err);
        });
    }
    readCities = () => {
        var database = firebase.database();
        var starCountRef = database.ref('cities');
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    cities: datas
                })
            } else {
                this.setState({
                    cities: []
                })
            }
        });

    }
    input_handlerCities = (e) => {
        e.preventDefault();
        this.setState({
            input_handlerCitiesValue: e.target.value
        })
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row">
                            <div className="col-md-6">

                                <h2>All Cities</h2>

                                <table className="table m-2">
                                    <thead>
                                        <tr>
                                            <th>name</th>
                                            <th className="text-center">actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.cities.map((city) => {
                                                return (
                                                    <>
                                                        <tr key={city.key}>
                                                            <td >{city.domain}</td>
                                                            <td className="text-center">
                                                                <button className="btn btn-sm btn-primary" onClick={() => { alert("Not Available") }}>Edit</button> &nbsp;
                                                            <button className="btn btn-sm btn-danger" onClick={() => {
                                                                    var r = window.confirm("Do you want to delete : " + city.domain);
                                                                    if (r === true) {
                                                                        this.deleteCities(city);
                                                                    }

                                                                }}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>
                            <div className="col-md-5">
                                <form className="form m-2" id="AddCitiesModuleForm" onSubmit={this.addCities}>
                                    <h2>Add City</h2>
                                    <div className="form-group">
                                        <input type="text" defaultValue={this.state.input_handlerCitiesValue} onChange={this.input_handlerCities} className="form-control" placeholder="city name" required />

                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-md btn-primary">Add</button>
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


class AddBusinessDataForm extends React.Component {
    constructor() {
        super();
        this.readCategories = this.readCategories.bind(this)
        this.readCities = this.readCities.bind(this)
        this.addNewBusiness = this.addNewBusiness.bind(this)
        this.state = {
            categories: [],
            cities: []
        }
    }
    componentDidMount() {
        this.readCategories();
        this.readCities();
    }
    readCategories = () => {
        var database = firebase.database();
        var CategoriesRef = database.ref('categories');
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    categories: datas
                })
            } else {
                this.setState({
                    categories: []
                })
            }
        });

    }
    readCities = () => {
        var database = firebase.database();
        var starCountRef = database.ref('cities');
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    cities: datas
                })
            } else {
                this.setState({
                    cities: []
                })
            }
        });

    }
    addNewBusiness = (event) => {
        event.preventDefault();
        var data = $('#AddNewBusinessForm').serializeJSON();
        var database = firebase.database();
        var key = database.ref('cities').push().key;
        data['key'] = key;
        database.ref('business_list/' + key).set(data, (error) => {
            if (error) {
                alert(error);
            }
            else {
                alert("Business Data Added Successfully");
                $('#AddNewBusinessForm').trigger("reset");
            }
        });
    }

    NumberHandle = (event) => {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }
    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2>Business Details</h2>
                                <form className="form" id="AddNewBusinessForm" onSubmit={this.addNewBusiness}>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="bname" placeholder="Business Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="ename" placeholder="Entrepreneur Name" required />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="category" id="category" required defaultValue=''>
                                            <option disabled value="">Choose category</option>
                                            {this.state.categories.map((category) => {
                                                return (
                                                    <option key={category.key} value={category.domain}>{category.domain}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address_line1" placeholder="Address Line 1" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address_line2" placeholder="Address Line 2" required />
                                    </div>

                                    <div className="form-group">
                                        <select className="custom-select" name="city" required defaultValue="" >
                                            <option disabled value=''>Choose City</option>
                                            {this.state.cities.map((city) => {
                                                return (
                                                    <option key={city.key} value={city.domain}>{city.domain}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="pin" pattern=".{6}"
                                            onInput={this.NumberHandle} placeholder="PIN Code" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="mobile" pattern=".{10}"
                                            onInput={this.NumberHandle} placeholder="contact number" required />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-lg btn-success" type="submit">ADD</button>

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
class EditBusinessDataForm extends React.Component {
    constructor() {
        super();
        this.readCategories = this.readCategories.bind(this)
        this.readCities = this.readCities.bind(this);
        this.SaveEditBusiness = this.SaveEditBusiness.bind(this);
        this.readBusinessData = this.readBusinessData.bind(this);
        this.state = {
            categories: [],
            cities: [],
            business_data: []
        }
    }
    componentDidMount() {
        this.readCategories();
        this.readCities();
        this.readBusinessData();
    }
    readBusinessData = () => {
        var database = firebase.database();
        var CategoriesRef = database.ref('business_list/' + this.props.match.params.id);
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                this.setState({
                    business_data: data
                })
            } else {
                this.setState({
                    business_data: []
                })
            }
        });
    }
    readCategories = () => {
        var database = firebase.database();
        var CategoriesRef = database.ref('categories');
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    categories: datas
                })
            } else {
                this.setState({
                    categories: []
                })
            }
        });

    }
    readCities = () => {
        var database = firebase.database();
        var starCountRef = database.ref('cities');
        starCountRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    cities: datas
                })
            } else {
                this.setState({
                    cities: []
                })
            }
        });

    }
    SaveEditBusiness = (event) => {
        event.preventDefault();
        var data = $('#EditNewBusinessForm').serializeJSON();
        var database = firebase.database();
        var key = this.props.match.params.id;
        data['key'] = key;
        database.ref('business_list/' + key).set(data, (error) => {
            if (error) {
                alert(error);
            }
            else {
                alert("Business Data Saved Successfully");
                this.props.history.goBack();
            }
        });
    }
    NumberHandle = (event) => {
        event.target.value = event.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }

    render() {
        return (
            <div id="Minfo_Members_body" className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2>Edit Business Details</h2>
                                <form className="form" id="EditNewBusinessForm" onSubmit={this.SaveEditBusiness}>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="bname" placeholder="Business Name" required defaultValue={this.state.business_data.bname} />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" type="text" name="ename" placeholder="Entrepreneur Name" defaultValue={this.state.business_data.ename} required />
                                    </div>
                                    <div className="form-group">
                                        <select className="custom-select" name="category" id="category" required defaultValue={this.state.business_data.category}>
                                        <option key={0} value={this.state.business_data.category}>{this.state.business_data.category}</option>
                                            {this.state.categories.map((category) => {
                                                return (
                                                    <option key={category.key} value={category.domain}>{category.domain}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address_line1" placeholder="Address Line 1" required defaultValue={this.state.business_data.address_line1} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="address_line2" placeholder="Address Line 2" required defaultValue={this.state.business_data.address_line2} />
                                    </div>

                                    <div className="form-group">
                                        <select className="custom-select" name="city" required defaultValue={this.state.business_data.city}>
                                        <option key={1} value={this.state.business_data.city}>{this.state.business_data.city}</option>
                                            
                                            {this.state.cities.map((city) => {
                                                return (
                                                    <option key={city.key} value={city.domain}>{city.domain}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="pin" pattern=".{6}"
                                            onInput={this.NumberHandle} placeholder="PIN Code" required defaultValue={this.state.business_data.pin} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="mobile" pattern=".{10}"
                                            onInput={this.NumberHandle} placeholder="contact number" required defaultValue={this.state.business_data.mobile} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-md btn-success">Save</button>
                                        &nbsp;
                                        <a href="#cancel" onClick={(e) => { e.preventDefault(); this.props.history.goBack(); }} className="btn btn-md btn-danger text-white">Cancel</a>
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
class AllBusinessList extends React.Component {
    constructor() {
        super()
        this.readBusinessData = this.readBusinessData.bind(this);
        this.deleteBusinessData = this.deleteBusinessData.bind(this);
        this.state = {
            business_list: []
        }
    }
    componentDidMount() {
        this.readBusinessData();
    }
    readBusinessData = () => {
        var database = firebase.database();
        var CategoriesRef = database.ref('business_list');
        CategoriesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const datas = Object.keys(data).map(key => ({
                    ...data[key]
                }));
                this.setState({
                    business_list: datas
                })
            } else {
                this.setState({
                    business_list: []
                })
            }
        });
    }
    deleteBusinessData = (business) => {
        var database = firebase.database();
        var CitiesRef = database.ref('business_list/' + business.key);
        CitiesRef.remove().then(() => {
            alert('Deleted : ' + business.bname);
        }).catch(err => {
            alert(err);
        });
    }
    render() {
        return (
            <div className="scroll-area">
                <section className="content">
                    <div className="container  p-4">
                        <h2>All Accounts</h2>
                        <table className="table table-bordered bg-white">
                            <thead>
                                <tr>
                                    <th>SI.No</th>
                                    <th>Business Name</th>
                                    <th>Category</th>
                                    <th>Address</th>
                                    <th>city</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.business_list.map((business, index) => {
                                        return (

                                            <tr key={business.key}>
                                                <td>{index + 1}</td>
                                                <td>{business.bname}</td>
                                                <td>{business.category}</td>
                                                <td>
                                                    <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0, margin: 0 }}>
                                                        <li>{business.address_line1}</li>
                                                        <li>{business.address_line2}</li>
                                                    </ul>
                                                </td>
                                                <td>{business.city}</td>
                                                <td>
                                                    <NavLink className="btn btn-sm btn-warning" to={'/admin/business/edit/' + business.key}><i className="fa fa-edit"></i> Edit</NavLink>&nbsp;
                                                    <NavLink className="btn btn-sm btn-info" to={'/admin/reviews/single/' + business.key}><i className="fa fa-file"></i> Reviews</NavLink>
                                            &nbsp; <button onClick={() => {
                                                        var r = window.confirm("Do you want to delete : " + business.bname);
                                                        if (r === true) {
                                                            this.deleteBusinessData(business);
                                                        }
                                                    }} className="btn btn-sm btn-danger"><i className="fa fa-close"></i> Remove</button>
                                                </td>
                                            </tr>
                                        )
                                    })

                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }

}
export { CitiesModule, CategoriesModule, AddBusinessDataForm, AllBusinessList, EditBusinessDataForm };
