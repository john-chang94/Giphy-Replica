import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                {
                    this.props.gifs.map((item, index) => {
                        return (
                            <img className="images" src={item.images.fixed_width.url} key={index} />
                        )
                    })
                }
                </div>
            </div>
         )
    }
}
 
export default Content;