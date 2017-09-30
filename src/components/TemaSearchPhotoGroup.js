import React from 'react';
import temaSearchAPI from '../data/temaSearchAPI';
import TemaSearchPhotoFirstLine from './TemaSearchPhotoFirstLine';
import TemaSearchPhotoSecondLine from './TemaSearchPhotoSecondLine';

const TemaSearchPhotoGroup = () => {
            return(
                <div className="TemaSearchPhotoGroup">
                    <table className="TemaSearchTable">
                        <tbody>
                            <tr>
                            {temaSearchAPI.TemaPhotoFirstLineData.map((navData, i) => <TemaSearchPhotoFirstLine key = {i} TemaPhotoFirstLineData = {navData} />)} 
                            </tr>
                        </tbody>
                    </table>
                    <table className="TemaSearchTable">
                        <tbody>
                            <tr>
                            {temaSearchAPI.TemaPhotoSecondLineData.map((navData, i) => <TemaSearchPhotoSecondLine key = {i} TemaPhotoSecondLineData = {navData} />)} 
                            </tr>
                        </tbody>    
                    </table>
                </div> 
            )
        }
    
    
export default TemaSearchPhotoGroup;