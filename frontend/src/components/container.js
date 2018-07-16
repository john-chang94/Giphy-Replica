import React from 'react';
import axios from 'axios';
import Header from './header';
import Content from './content';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            gifs: []
         }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/gifs/trending')
        .then((response) => {
            console.log(response.data.data)
            this.setState({
                gifs: response.data.data
            })
        })
    }

    searchGifs(search) {
        axios.get(`http://localhost:5000/gifs/search?name=${search}`)
        .then((response) => {
            console.log(response.data.data)
            this.setState({
                gifs: response.data.data
            })
        })
        console.log(search)
    }

    render() { 
        return ( 
            <div className="mainBackground">
                <Header searchGifs={this.searchGifs.bind(this)} />
                <Content gifs={this.state.gifs} />
            </div>
         )
    }
}
 
export default Container;