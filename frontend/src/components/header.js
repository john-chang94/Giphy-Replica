import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 id="title">GIPHY</h1>
                </div>
                <div className="row">
                    <input type="text" className="search" placeholder=" Search keywords or categories..." onChange={(e) => this.setState({ search: e.target.value })} />
                    <img className="searchButton" onClick={this.props.searchGifs.bind(this, this.state.search)} src="https://giphy.com/static/img/animations/search_animation_go.gif" />
                </div>
            </div>
        )
    }
}

export default Header;