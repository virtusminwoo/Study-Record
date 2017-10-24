import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ThemeTd = (props) => {

        return(
            <td>
                <figure>
                    <Link to='/roomsearch'>
                        <img src={props.src} alt="" />
                            <div className="themeImgText">
                                <h3>{props.title}</h3>
                                <hr />
                                <p>{props.description}</p>
                            </div>
                    </Link>
                </figure>
            </td>
        )
    }
    

export default ThemeTd;