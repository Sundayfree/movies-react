import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

import { Layout, Menu } from 'antd';
const { Content, Sider } = Layout;

export class MovieContainer extends Component {
  render() {
    return (
      <Layout style={{ background: '#fff', height: '100%' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={[window.location.hash.split('/')[2]]}
            style={{ height: '100%' }}
          >
            <Menu.Item key="in_theaters">
              <Link to="/movie/in_theaters/1">Current Movies</Link>
            </Menu.Item>
            <Menu.Item key="coming_soon">
              <Link to="/movie/coming_soon/1">Coming Movies</Link>
            </Menu.Item>
            <Menu.Item key="top250">
              <Link to="/movie/top250/1">Top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 10px 0 1px', minHeight: 280 }}>
          <Switch>
            <Route path="/movie/detail/:id" component={MovieDetail} />
            <Route path="/movie/:type/:page" component={MovieList} />
          </Switch>
        </Content>
      </Layout>
    );
  }
}

export default MovieContainer;
