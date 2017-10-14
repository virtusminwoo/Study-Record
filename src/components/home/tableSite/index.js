import React from 'react';
import Table from '../../../common/Table'
import messages from './messages';
import './index.css';

const TableSite = () => {
    
        return (
            <div className="tableSite">
                <hr className="tableSiteHr" />
                <Table tableClassName="tableSiteTable" items={messages.tableSiteTd.items} />
            </div>
        )
    }

export default TableSite;