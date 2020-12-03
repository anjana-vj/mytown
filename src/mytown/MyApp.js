import React from 'react';
import './base.scss';
import data from './mytown_data.json';
function MyAppHome() {
    return (
        <>
            <div className="my-home-nav">
                <div className="logo"><div className="logo-text"><i class="fa fa-home"></i>My Town</div></div>
            </div>
            <SearchEngine />
        </>
    )
}
class SearchEngine extends React.Component {
    constructor() {
        super();
        this.state = {
            search_result: [],
            search_filter: '',
            no_result: false
        };
        this.oncitychange = this.oncitychange.bind(this);
        this.oncategorychange = this.oncategorychange.bind(this);
        this.noresultchange = this.noresultchange.bind(this);
    }
    oncitychange = (e) => {
        var list = data.blist.filter(city => city.city === e.target.value);
        this.setState({
            search_result: list
        })
        document.getElementById('cat_sel').value = '';
        var es = [{ 'target': [{ value: '' }] }];
        this.oncategorychange(es);


    }
    oncategorychange = (e) => {
        var list = e.target.value;
        this.setState({
            search_filter: list
        })

    }
    noresultchange = (u) => {
        this.setState({ no_result: u });
    }
    render() {
        return (
            <div className="content-area">
                <div className="search-box">
                    <form>
                        <div className="block-a">
                            <select onChange={this.oncitychange}>
                                <option>Choose City</option>
                                {data.city.map((city_list) => {
                                    return (
                                        <option>{city_list.city}</option>
                                    )
                                })}
                            </select>
                            <select id="cat_sel" onChange={this.oncategorychange}>
                                <option value="">Category All</option>
                                {data.clist.map((c_list) => {
                                    return (
                                        <option>{c_list.domain}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="block-b">
                            <input type="text" placeholder="Type Something" />
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                <div className="result">
                    <div className="list">
                        {this.state.search_result.length === 0 && this.state.search_filter === '' ? <>
                            <h1>Choose A City</h1>
                        </> :
                            <>

                                {this.state.search_result.filter((category) => {
                                    if (this.state.search_filter !== '') {
                                        return category.category === this.state.search_filter
                                    }
                                    else {
                                        return true
                                    }
                                }
                                ).map((lister) => {
                                    return (
                                        <div>
                                            <h3>{lister.name}</h3>
                                            <p>{lister.add}</p>
                                            <a href={"tel:" + lister.mob}>Call</a>
                                        </div>
                                    )
                                })}</>}
                        {this.state.no_result === true ? <><h1>Result Not Found</h1></> : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default MyAppHome;