import React, { Component } from 'react';
import MovieItem from './MovieItem'
import FetchJsonp from 'fetch-jsonp'
import { Spin ,Pagination} from 'antd';

let style = {
  textAlign: 'center',
  background: 'rgba(0,0,0,0.05)',
  borderRadius: '4px',
  marginBottom: '20px',
  padding: '30px 50px',
  margin: '0'
};

export class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: parseInt(props.match.params.page) || 1,
      pageSize: 12,
      total: 0,
      isLoading: true,
      movieType:props.match.params.type

    };
    this.loadList=this.loadList.bind(this);
    this.loadMovieByTypeAndPage=this.loadMovieByTypeAndPage.bind(this);
    this.loadNewPage=this.loadNewPage.bind(this)
  }

  componentWillMount() {
      this.loadMovieByTypeAndPage();
  }
  componentWillReceiveProps(nextProps){
    this.setState({
        isLoading:true,
        currentPage:parseInt(nextProps.match.params.page) || 1,
        movieType:nextProps.match.params.type
    },()=>{
        this.loadMovieByTypeAndPage();
    })
  }
  
  loadMovieByTypeAndPage(){
    const start= this.state.pageSize*(this.state.currentPage-1) 

    const url=`https://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`

      FetchJsonp(url)
      .then(response=>response.json())
      .then(data=>{
          this.setState({
              isLoading:false,
              movies:data.subjects,
              total:data.total
          })
      })
  }
  loadList (){
    return this.state.isLoading ? (
      <div style={style}>
        <Spin />
      </div>
    ) : (
        <div style={{display:'flex',flexWrap:'wrap'}}>
        {this.state.movies.map(item=>{
            return(
                <MovieItem {...item} key={item.id} history={this.props.history}/>
            )
        })}
        <Pagination 
            defaultCurrent={this.state.currentPage} 
            pageSize={this.state.pageSize}
            total={this.state.total} 
            onChange={this.loadNewPage}
            />
    </div>
    );
  };
  loadNewPage(page){
    this.props.history.push(`/movie/${this.state.movieType}/${page}`)
  }
  render() {
    return (
        <div>
            {this.loadList()}
        </div>
       
    )
  }
}

export default MovieList;
