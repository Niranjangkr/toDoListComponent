import React from 'react'
import tasks from '../constants';

const Content = ({ containerNo }) => {
    const data = tasks.find((task, index) => index + 1 === containerNo);
    const renderTask = () => (
        <div className="container">
            <div className="textbox">
                <ul>
                    {data.map((element, index) => (
                        <li key={index} className='text-li'>
                            <span className='icon'>{element.icon}</span> {element.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return <div>{renderTask()}</div>;
};

export default Content;