import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EventIcon from '@mui/icons-material/Event';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FlagIcon from '@mui/icons-material/Flag';
import TimelineIcon from '@mui/icons-material/Timeline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExtensionIcon from '@mui/icons-material/Extension';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Slider = () => {
    return (
        <div className="wrapper">
            <div id="progress-bar-container">
                <ul>
                    <li class="step step01 active"><div class="step-inner">Ease In</div></li>
                    <li class="step step02"><div class="step-inner">Organize</div></li>
                    <li class="step step03"><div class="step-inner">Delegate</div></li>
                    <li class="step step04"><div class="step-inner">Customize</div></li>
                </ul>

                <div id="line">
                    <div id="line-progress"></div>
                </div>
            </div>
        </div>
    )
}


export default Slider