import React, {FC, memo} from 'react';

type PropsType = {
    icon: string;
    text1: string;
    text2?: string;
    title: string;
};

const ContactItem: FC<PropsType> = memo(({icon, text1, text2, title}) => (
    <div className="ContactItem">
        <div className="contact">
            <img src={icon} alt="icon"/>
            <div className="right-items">
                <h6>{title}</h6>
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </div>
    </div>
));

export default ContactItem;
