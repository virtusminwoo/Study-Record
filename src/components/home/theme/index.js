import React from 'react';
import messages from './messages';
import ThemeTd from '../themeTd'
import './index.css';


const Theme = () => {

        return (
            <div className="theme">
                <div className="themeTextGroup">
                    <h1>{messages.themeText.textH1}</h1>
                    <p>{messages.themeText.textP}.</p>
                </div>
                <div className="themeTableGroup">
                    <table className="themeTable">
                        <tbody>
                            <tr>
                                <ThemeTd src={messages.themePhoto1.src} title={messages.themePhoto1.title} description={messages.themePhoto1.description} />
                                <ThemeTd src={messages.themePhoto2.src} title={messages.themePhoto2.title} description={messages.themePhoto2.description} />
                                <ThemeTd src={messages.themePhoto3.src} title={messages.themePhoto3.title} description={messages.themePhoto3.description} />
                            </tr>
                            <tr>
                                <ThemeTd src={messages.themePhoto4.src} title={messages.themePhoto4.title} description={messages.themePhoto4.description} />
                                <ThemeTd src={messages.themePhoto5.src} title={messages.themePhoto5.title} description={messages.themePhoto5.description} />
                                <ThemeTd src={messages.themePhoto6.src} title={messages.themePhoto6.title} description={messages.themePhoto6.description} />
                            </tr>
                        </tbody>
                    </table>
                </div> 
            </div>
        )
    }

export default Theme;