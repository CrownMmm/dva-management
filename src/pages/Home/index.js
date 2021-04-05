import React, { Component } from 'react';
import { connect } from 'dva';
import style from './index.scss';


class index extends Component {
    render() {
        return (
            <div className={style.home}>
                <div className={style.background}>
                    <h1>欢迎大家来到ming的美食项目</h1>
                    <h2>这里有大家喜欢的pizza和小吃!</h2>
                </div>
            </div>
        );
    }
}

export default connect(({ home }) => ({ ...home }))(index);
