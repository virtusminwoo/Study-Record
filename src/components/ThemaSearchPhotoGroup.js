import React from 'react';
import themaSearchAPI from '../data/themaSearchAPI';
import ThemaSearchPhotoFirstLine from './ThemaSearchPhotoFirstLine';
import ThemaSearchPhotoSecondLine from './ThemaSearchPhotoSecondLine';

const ThemaSearchPhotoGroup = () => {
            return(
                <div className="ThemaSearchPhotoGroup">
                    <table className="ThemaSearchTable">
                        <tbody>
                            <tr>
                            {themaSearchAPI.ThemaPhotoFirstLineData.map((navData, i) => <ThemaSearchPhotoFirstLine key = {i} ThemaPhotoFirstLineData = {navData} />)} 
                            </tr>
                        </tbody>
                    </table>
                    <table className="ThemaSearchTable">
                        <tbody>
                            <tr>
                            {themaSearchAPI.ThemaPhotoSecondLineData.map((navData, i) => <ThemaSearchPhotoSecondLine key = {i} ThemaPhotoSecondLineData = {navData} />)} 
                            </tr>
                        </tbody>    
                    </table>
                </div> 
            )
        }
    
    
export default ThemaSearchPhotoGroup;