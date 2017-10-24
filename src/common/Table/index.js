import React from 'react';

const TableTd = (props) => {

    const content = props.items.map((item, i) => 
      <td key ={i}> {item} </td>
    );

  return (
      <table className={props.tableClassName}>
                    <tbody>
                        <tr>
                            {content}
                        </tr>
                    </tbody>
                </table>
  );
}


export default TableTd;
