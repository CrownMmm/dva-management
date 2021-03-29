import React from 'react';
import { connect } from 'dva';

function IndexPage() {
    return (
        <div >
            hello world
        </div>
    );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
