import React from 'react';
import { Link } from 'react-router-dom';

const ThemaSearchPhotoSecondLine = (props) => {

        return(
            <td>
                <figure>
                    <Link to='/roomsearch'>
                        <img src={props.ThemaPhotoSecondLineData.photo} alt="" />
                            <div className="ThemaSentence">
                                <h3>{props.ThemaPhotoSecondLineData.title}</h3>
                                <hr />
                                <p>{props.ThemaPhotoSecondLineData.description}</p>
                            </div>
                    </Link>
                </figure>
            </td>
        )
    }
    

export default ThemaSearchPhotoSecondLine;