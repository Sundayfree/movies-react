import React, { Component } from 'react';
import { Rate } from 'antd';
export class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div onClick={this.showDetail} style={{border:'1px solid #ccc',width:'190px',textAlign:'center', boxShadow:'0 0 6px #ddd',padding:'3px',margin:'2px'}}>
        <img src={this.props.images.small} alt="" style={{width:'110px',height:'140px'}}/>
        <h4>Movie Title:{this.props.title}</h4>
        <h4>Release Year:{this.props.year}</h4>
        <h4>Movie Genre:{this.props.genres.join(',')}</h4>
        <Rate disabled defaultValue={this.props.rating.average} />
      </div>
    );
  }
  showDetail=()=>{
    this.props.history.push(`/movie/detail/${this.props.id}`)
 }

}

export default MovieItem;
