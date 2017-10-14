import React from 'react';
import Li from '../../../common/Li'
import messages from './messages';
import './index.css';

const NavSite = () => {
    
        return(
            <div className="navSite">
                <div className="navSiteUlGroup">
                    <div className="navSiteUlCommon navSiteUl1">
                        <h4>{messages.NavSiteUl1.title}</h4>
                        <Li items={messages.NavSiteUl1.items} />
                    </div>
                    <div className="navSiteUlCommon navSiteUl2">
                        <h4>{messages.NavSiteUl2.title}</h4>
                        <Li items={messages.NavSiteUl2.items} />
                    </div>
                    <div className="navSiteUlCommon navSiteUl3">
                        <h4>{messages.NavSiteUl3.title}</h4>
                        <Li items={messages.NavSiteUl3.items} />
                    </div>
                    <div className="navSiteUlCommon navSiteUl4">
                        <h4>{messages.NavSiteUl4.title}</h4>
                        <Li items={messages.NavSiteUl4.items} />
                    </div>
                    <div className="navSiteUlCommon navSiteUl5">
                        <h4>{messages.NavSiteUl5.title}</h4>
                        <Li items={messages.NavSiteUl5.items} />
                    </div>
                    <div className="navSiteUlCommon navSiteUl6">
                        <h4>{messages.NavSiteUl6.title}</h4>
                        <Li items={messages.NavSiteUl6.items} />
                    </div>
                    <div className="navSiteUlCommon navSiteUl7">
                        <h4>{messages.NavSiteUl7.title}</h4>
                        <Li items={messages.NavSiteUl7.items} />
                    </div>
                </div>
            </div>
            )
        }

export default NavSite;