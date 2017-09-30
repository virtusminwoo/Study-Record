import React from 'react';

const TemaSearchPhotoFirstLine = (props) => {
            return(
                <td>
                    <figure>
                        <a href={props.TemaPhotoFirstLineData.link}>
                            <img src={props.TemaPhotoFirstLineData.photo} alt="" />
                                <div className="TemaSentence">
                                    <h3>{props.TemaPhotoFirstLineData.title}</h3>
                                    <hr />
                                    <p>{props.TemaPhotoFirstLineData.description}</p>
                                </div>
                        </a>
                    </figure>
                </td>
            )
        }
    

export default TemaSearchPhotoFirstLine;