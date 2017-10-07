import React from 'react';

const ThemaSearchTable = (props) => {

        return(
                <table className="ThemaSearchTable">
                    <tbody>
                        <tr>
                            {props.photoLine} 
                        </tr>
                    </tbody>
                </table>
        )
    }
    
    
export default ThemaSearchTable;