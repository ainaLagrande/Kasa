import React, { useState } from 'react';
import chevronDown from '../assets/chevron_down.svg'

const DropDown = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    return <div className="dropDown_container">
        <div className="dropDown_box">
            <div className="dropDown_item">
                <div className="dropDown_header" onClick={() => isExpanded ? setIsExpanded(false) : setIsExpanded(true)}>
                    <span className="title">{title}</span>
                    <img src={chevronDown} alt="fleche" className={isExpanded ? 'arrow arrow-expanded' : 'arrow'}/>
                </div>
                <div className={isExpanded ? 'content content-expanded' : 'content content-hidden'}>
                {typeof content === 'string' ? (
                    <p>{content}</p>
                ): (<ul>
                    {content.map((content) => (
                    <li key={content}>{content}</li>
                  ))}
                  </ul>
                )}
                </div>
            </div>

        </div>
    </div>
}
export default DropDown;