import React from 'react';
import './index.css';

const ArticleInformationTr = (props) => {

        return (
                <tr>
                    <td>{props.frontTdText}</td>
                    <th>{props.frontThFirstData}{props.frontThFirstText}{props.frontThSecondData}{props.frontThSecondText}</th>
                    <td className="articleInformationTableRight">{props.secondTdText}</td>
                    <th>{props.endThFirstData}{props.endThFirstText}{props.endThSecondData}{props.endThSecondText}</th>
                </tr>           
        )
    }

export default ArticleInformationTr;