import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title, description, imageUrl,newsUrl,author,date} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <img src={imageUrl?imageUrl:"https://www.nj.com/resizer/cdGsuNGjh2u9Qu5g4U1CG6DMGWk=/1280x0/filters:focal(2915x1735:2925x1725)/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4PUH5APLWFFBDBUKOGLB2U2SYU.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
           <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>  
      </div>
    )
  }
}

export default NewsItem