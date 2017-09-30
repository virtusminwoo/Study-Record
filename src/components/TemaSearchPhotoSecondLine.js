import React from 'react';

const TemaSearchPhotoSecondLine = (props) => {
            return(
                <td>
                    <figure>
                        <a href={props.TemaPhotoSecondLineData.link}>
                            <img src={props.TemaPhotoSecondLineData.photo} alt="" />
                                <div className="TemaSentence">
                                    <h3>{props.TemaPhotoSecondLineData.title}</h3>
                                    <hr />
                                    <p>{props.TemaPhotoSecondLineData.description}</p>
                                </div>
                        </a>
                    </figure>
                </td>
            )
        }
    

export default TemaSearchPhotoSecondLine;