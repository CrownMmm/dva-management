import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'dva/router';

import style from './index.scss';

const menus = [
    {
        key: 'home',
        path: '/home',
        name: '主页'
    },
    {
        key: 'menus',
        path: '/menus',
        name: '菜单'
    },
    {
        key: 'admin',
        path: '/admin',
        name: '管理'
    },
    {
        key: 'about',
        path: '/about',
        name: '关于我们'
    },
    {
        key: 'login',
        path: '/login',
        name: '登录',
        className: style.login,
        isAuthority: true
    },
    {
        key: 'register',
        path: '/register',
        name: '注册',
        className: style.register,
        isAuthority: true
    }
];
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKeys: []
        };
    }

    /**
        * 当页面刷新时，组件会重新加载，会执行 componentDidMount(cdm) 钩子函数
        * 为解决刷新页面菜单与路由不同步问题，解决方法则放在 cdm 钩子函数里执行
        */
    componentDidMount() {
        this.handleSetSelectedKeys(this.props.location.pathname);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { pathname } = this.props.location;
        if (nextProps.location.pathname !== pathname) {
            // 当路由发生改变时, 改变当前菜单选中key值
            this.handleSetSelectedKeys(nextProps.location.pathname);
        }
    }

    handleSetSelectedKeys(pathname) {
        // /admin = ["/","admin"]
        // 根据'/'把路由地址分割成一个数组
        const temp = pathname.split('/');
        // 如果数组的长度小于2,表示的是只有根路径/,设置为Home. 否则取数组中第二个值
        const key = temp && temp.length < 2 ? 'home' : temp[1];
        this.setState({
            selectedKeys: [key]
        });
    }

    render() {
        return (
            <nav className={style.header} >
                <a className={style.logo} href="http://www.baidu.com">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="d-block mx-auto"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                        <line x1="9.69" y1="8" x2="21.17" y2="8" />
                        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                        <line x1="14.31" y1="16" x2="2.83" y2="16" />
                        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                    </svg>
                </a>
                <Menu.Item
                    className={style['menu-left']}
                    mode="horizontal"
                    defaultSelectedKeys={["home"]}
                >
                    <Menu.Item key={"home"}>主页</Menu.Item>
                    <Menu.Item key={"menus"}>菜单</Menu.Item>
                    <Menu.Item key={"admin"}>管理</Menu.Item>
                    <Menu.Item key={"about"}>关于我们</Menu.Item>
                    <Menu.Item className={style.login} key={"login"}>登陆</Menu.Item>
                    <Menu.Item className={style.register} key={"register"}>注册</Menu.Item>
                </Menu.Item>
            </nav>
        );
    }
}
