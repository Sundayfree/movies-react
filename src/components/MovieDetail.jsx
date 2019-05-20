import React, { Component } from 'react';
import { Button, Icon, Spin } from 'antd';
import FetchJsonp from 'fetch-jsonp';

let style = {
  textAlign: 'center',
  background: 'rgba(0,0,0,0.05)',
  borderRadius: '4px',
  marginBottom: '20px',
  padding: '30px 50px',
  margin: '0'
};

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: true
    };
    this.goback = this.goback.bind(this);

  }
  componentWillMount() {
    FetchJsonp(
      `https://api.douban.com/v2/movie/subject/${this.props.match.params.id}`
    )
      .then(response => response.json())
      .then(data => {
       
        this.setState({
          data:data,
          isLoading:false
        });
      });
  }

  goback() {
    this.props.history.go(-1);
  }
  loadSummary=()=> {
    return this.state.isLoading ? (
      <div style={style}>
        <Spin />
      </div>
    ) : (
      <div style={{textAlign:'center'}}> 
        <h1>{this.state.data.title}</h1>
        <img src={this.state.data.images.large} alt="" />
        <p style={{textIndent:'2em'}}> {this.state.data.summary}</p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <Button type="primary" style={{ margin: '5px' }} onClick={this.goback}>
          <Icon type="left" />
          Go back
        </Button>
       {this.loadSummary()}
      </div>
    );
  }
}

export default MovieDetail;
