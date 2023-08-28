import React, { useState, useEffect } from 'react'
import './stepper.css'
import CodeIcon from '@mui/icons-material/Code';
import Content from './Content';

const Stepper = () => {
    const steps = ['Ease', 'Organize', 'Delegate', 'Customize'];
    const [currentStep, setCurrentStep] = useState(3)
    const videoRef = React.createRef();

    useEffect(() => {
        const handleScroll = (event) => {
            if (event.deltaY > 0) {
                setCurrentStep(prevStep => Math.min(prevStep + 1, steps.length ));
            } else {
                setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     if (videoRef.current) {
    //         videoRef.current.currentTime = currentStep * 5; 
    //         if (currentStep === 0) {
    //             videoRef.current.pause();
    //         } else {
    //             videoRef.current.play();
    //         }
    //     }
    // }, [currentStep]);

    return (
        <>
            <div className='stepper' >
                <div className='video'  ref={videoRef} controls >
                    <video ref={videoRef} muted>
                        <source src="complexity-video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className='timeline'>
                    {
                        steps.map((step, i) => (
                            <div key={i}>
                                <div className={`step-item active`} key={i}>
                                    <div className='stop' style={{ visibility: currentStep === i + 1 ? 'visible' : 'hidden' }}><CodeIcon htmlColor='white' className='codeIcon' /></div>
                                    <div style={{ visibility: currentStep === i + 1 ? 'hidden' : 'visible', backgroundColor:currentStep > i + 1 ? 'orange' : ''}} className='stop-empty'></div>
                                    <p className='tag' style={{ visibility: currentStep === i + 1 ? 'visible' : 'hidden' }}>{step}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='task'>
                    <Content containerNo={currentStep} />
                </div>
            </div>
        </>
    )
}

export default Stepper


