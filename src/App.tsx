import React from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {Layout, Menu} from 'antd'
import {ContainerOutlined, MessageOutlined, ProfileOutlined, UserOutlined} from '@ant-design/icons'
import logo from './assets/images/logo.svg'
import loadable from '@loadable/component'
import Preloader from './components/common/Preloader/Preloader'
import {compose} from 'redux'
import {connect, Provider} from 'react-redux'
import {HashRouter, NavLink, Route, withRouter} from 'react-router-dom'
import {UsersPage} from './components/Users/UsersContainer'
import {LoginPage} from './components/Login/LoginPage'
import News from './components/News/News'
import {TopHeader} from './components/Header/Header'
import {RootState} from './lib/store/root-reducer'
import {store} from './lib/store/store'
import {initializeApp} from './features/authentication/modules/initialization/actions'


const { Header, Content, Footer, Sider } = Layout;



const ProfileContainer = loadable(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = loadable(() => import('./components/Dialogs/DialogsContainer'))


class App extends React.Component<MapPropsType & DispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }


  render() {
            if (!this.props.initialized) {
                return <Preloader/>
            }
    return (
        <Layout>
          <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log(broken);
              }}
              onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
              }}
          >
              <div className="logo">
                  <img src={logo} />
              </div>
            <Menu theme='dark' mode="inline" defaultSelectedKeys={['4']} >
              <Menu.Item key="1" icon={<ProfileOutlined />}>
                  <NavLink to={'/profile'}>Profile</NavLink>
              </Menu.Item>
              <Menu.Item key="2" icon={<MessageOutlined />}>
                  <NavLink to={'/dialogs'}>Messages</NavLink>
              </Menu.Item>
              <Menu.Item key="3" icon={<UserOutlined />}>
                  <NavLink to={'/users'}>Users</NavLink>
              </Menu.Item>
              <Menu.Item key="4" icon={<ContainerOutlined />}>
                  <NavLink to={'/news'}>News</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header className="site-layout-sub-header-background" style={{ padding: 0, background: '#3f5c80' }}>
                <TopHeader/>
            </Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                  <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                  <Route path={'/users'} render={() => <UsersPage pageTitle={'Developers'}/>}/>
                  <Route path={'/login'} render={() => <LoginPage />}/>
                  <Route path={'/news'} render={() => <News/>}/>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center', background: '#3f5c80' }}>©2021 Created by Sherkhan Tulkibay

            </Footer>
          </Layout>
        </Layout>
    )
  }
}


const mapStateToProps = (state: RootState) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const DevelopersApp: React.FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default DevelopersApp



// types start
type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}
// types end