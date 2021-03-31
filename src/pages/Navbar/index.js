import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import style from './index.scss';

export default function index() {
    return (
        <nav className={style.header}  >
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
            <Menu
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

            </Menu>
        </nav>


    );
}
