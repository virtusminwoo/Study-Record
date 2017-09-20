import React, { Component } from 'react';

class TemaSearchPhotoFirstLine extends Component{
        render(){
            return(
                <td>
                    <figure>
                        <a href={this.props.TemaPhotoFirstLineData.link}>
                            <img src={this.props.TemaPhotoFirstLineData.photo} alt="" />
                                <div className="TemaSentence">
                                    <h3>{this.props.TemaPhotoFirstLineData.title}</h3>
                                    <hr />
                                    <p>{this.props.TemaPhotoFirstLineData.description}</p>
                                </div>
                        </a>
                    </figure>
                </td>
            )
        }
    }

export default TemaSearchPhotoFirstLine;