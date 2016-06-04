require('rc-pagination/assets/index.css');
import React, {Component} from 'react';
import Pagination from 'rc-pagination';
class Pager extends Component {
    render() {
        const {total, pageSize, current, onChange} = this.props;
        return (
            <Pagination
                className="pagers"
                total={total}
                pageSize={pageSize}
                current={current}
                onChange={onChange}/>
        );
    }
}

export default Pager;