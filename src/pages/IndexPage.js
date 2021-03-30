import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import styles from './IndexPage.scss';

const { Header, Content } = Layout;


function IndexPage() {
    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>header</Header>
            <Content className={styles.content}>main content</Content>
        </Layout>
    );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
