import React from 'react';
import './base.scss';
import data from './mytown_data.json';
function MyAppHome() {
    return (
        <>
            <div className="my-home-nav">
                <div className="logo"><div className="logo-text"><i className="fa fa-home"></i>My Town</div></div>
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
            no_result: false,
            search_keyword: ''
        };
        this.oncitychange = this.oncitychange.bind(this);
        this.oncategorychange = this.oncategorychange.bind(this);
        this.noresultchange = this.noresultchange.bind(this);
    }
    oncitychange = (e) => {
        var list = data.blist.filter(city =>
            city.city === e.target.value
        );
        this.setState({
            search_result: list
        })
        document.getElementById('cat_sel').value = '';
        var es = [];
        var as = [];
        as['value'] = "";
        es['target'] = as;
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
    searchSpace = (event) => {
        let keyword = event.target.value;
        if (keyword === '')
            this.setState({ search_keyword: '' });
        else
            this.setState({ search_keyword: keyword });
    }
    render() {
        const productsu = this.state.search_result.filter((category) => {
            if (this.state.search_filter !== '') {
                return category.category === this.state.search_filter
            }
            else if (category.name.toLowerCase().includes(this.state.search_keyword.toLowerCase()) || category.add.toLowerCase().includes(this.state.search_keyword.toLowerCase())) {

                return category;
            }
            else {
                return null
            }
        });
        const products = productsu.filter((category) => {
            if (category.name.toLowerCase().includes(this.state.search_keyword.toLowerCase()) || category.add.toLowerCase().includes(this.state.search_keyword.toLowerCase())) {
                return category;
            }
            else {
                return true
            }
        }
        ).map((lister) => {
            return (
                <div className="result-block">
                    <div className="section-a">
                        <div className="title-block">
                            <h3>{lister.name}</h3>
                            <p>{lister.add}</p>
                        </div>
                        <div className="link-block">
                            <a href={"tel:" + lister.mob}><i className="fa fa-phone fa-2x" aria-hidden="true"></i></a>
                            <a><i className="fa fa-map-marker fa-2x"></i></a>
                        </div>
                    </div>
                </div>
            )
        });
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
                            <input type="text" placeholder="Type Something" onKeyUp={this.searchSpace} />
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                <div className="result">
                    <div className="list">
                        {this.state.search_result.length === 0 && this.state.search_filter === '' ? <>
                            <h1>Choose A City</h1>
                        </> :
                            <>{products}</>}
                        {this.state.no_result === true ? <><h1>Result Not Found</h1></> : null}
                    </div>
                </div>
            </div>
        )
    }
}
export default MyAppHome;