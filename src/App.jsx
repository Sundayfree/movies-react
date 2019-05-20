import React, { Component } from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import style from './css/app.css';

import AboutContainer from './components/AboutContainer';
import MovieContainer from './components/MovieContainer';

const { Header, Content, Footer } = Layout;

export class App extends Component {
 
  render() {
    return (
      <HashRouter>
        <Layout className="layout" style={{height:'100%'}}>
          <Header>
            <div className={style.logo} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.hash.split('/')[1]]}
              style={{ lineHeight: '64px' }}
            >
            
              <Menu.Item key="movie">
                <Link to='/movie/in_theaters/1'> Movies</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to='/about'>About</Link>
              </Menu.Item>
            </Menu>
          </Header>
          {/* middle */}
          <Content style={{ background: '#fff',height:'100%'}}>
            
            <Route path='/about' component={AboutContainer}></Route>
            <Route path='/movie' component={MovieContainer}></Route>
          </Content>

          {/* footer */}
          <Footer style={{ textAlign: 'center' }}>
            LuLu  2019 Created by Liu
          </Footer>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
