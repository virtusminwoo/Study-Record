import React from 'react';
import { Link } from 'react-router-dom';

const ThemaSearchPhotoTd = (props) => {

        return(
            <td>
                <figure>
                    <Link to='/roomsearch'>
                        <img src={props.photo} alt="" />
                            <div className="ThemaSentence">
                                <h3>{props.title}</h3>
                                <hr />
                                <p>{props.description}</p>
                            </div>
                    </Link>
                </figure>
            </td>
        )
    }
    

export default ThemaSearchPhotoTd;