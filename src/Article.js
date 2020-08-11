import React, {Component} from 'react'

class Article extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="article">
                <div className="article-image">
                    <img src={this.props.image} alt=""/>
                </div>
                <div className="article-text">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Article