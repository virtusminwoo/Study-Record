import React from 'react';
import { Link } from 'react-router-dom';

const ThemaSearchPhotoFirstLine = (props) => {

        return(
            <td>
                <figure>
                    <Link to='/roomsearch'>
                        <img src={props.ThemaPhotoFirstLineData.photo} alt="" />
                            <div className="ThemaSentence">
                                <h3>{props.ThemaPhotoFirstLineData.title}</h3>
                                <hr />
                                <p>{props.ThemaPhotoFirstLineData.description}</p>
                            </div>
                    </Link>
                </figure>
            </td>
        )
    }
    

export default ThemaSearchPhotoFirstLine;