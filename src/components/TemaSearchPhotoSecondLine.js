import React, { Component } from 'react';

class TemaSearchPhotoSecondLine extends Component{
        render(){
            return(
                <td>
                    <figure>
                        <a href={this.props.TemaPhotoSecondLineData.link}>
                            <img src={this.props.TemaPhotoSecondLineData.photo} alt="" />
                                <div className="TemaSentence">
                                    <h3>{this.props.TemaPhotoSecondLineData.title}</h3>
                                    <hr />
                                    <p>{this.props.TemaPhotoSecondLineData.description}</p>
                                </div>
                        </a>
                    </figure>
                </td>
            )
        }
    }

export default TemaSearchPhotoSecondLine;