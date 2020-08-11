import React, { Component } from 'react';
import Article from './Article';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles:[
        {
          description: "Oil settled higher on Monday, supported by data suggesting Chinese factories were returning to pre-pandemic levels, signs of rising energy demand and hopes for an agreement in the United States on ...",
          image: "https://images.gnews.io/c0b3b01d298aac98badb7b84f528a972",
          publishedAt: "2020-08-10 17:22:00 UTC",
          title: "Oil settles higher on Chinese factory data, U.S. stimulus hopes",
          url: "https://finance.yahoo.com/news/oil-prices-back-rise-u-003254628.html"
        },
        {
          description: "Occidental, which borrowed heavily to finance last year's $38 billion purchase of rival Anadarko Petroleum, cut the value of its oil and gas properties by $6.6 billion, joining BP, Chevron and Total ...",
          image: "https://images.gnews.io/c13b408f114055c00ccfa9ab018556e2",
          publishedAt: "2020-08-10 17:10:00 UTC",
          title: "Occidental posts $8 billion loss, outlines oil production cuts",
          url: "https://finance.yahoo.com/news/occidental-petroleum-posts-fourth-straight-202523983.html"
        },
        {
          description: "Events are being closely watched by Russia, whose oil exports run through Belarus to the West and which has long regarded the country as a buffer zone against NATO, and by the Wes ...",
          image: "https://images.gnews.io/838859f8f9e99541281a3e0a1d38843b",
          publishedAt: "2020-08-10 17:06:00 UTC",
          title: "Bloody Clashes in Belarus as West Condemns Crackdown After Election",
          url: "https://www.usnews.com/news/world/articles/2020-08-10/at-least-one-killed-dozens-injured-in-belarus-clashes-after-election-human-rights-group"
        }
      ]
    }
  }

  render(){
    return (
      <div className="wrap">
            <div className="header-container">
                <div className="header-text">
                    News
                </div>
                <div className="header-bars">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        <main>
            <div className="container">
              {
                this.state.articles.map((article)=>{
                  var props = {
                    ...article
                  }
                  return(
                    <Article {...props}/>
                  )
                })
              }
                 
            </div>
        </main>
    </div>
    );
  }
}

export default App;
