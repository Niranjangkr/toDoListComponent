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

const tasks = [
    [
        { icon: <AddIcon />, text: 'Add a task' },
        { icon: <CheckCircleOutlineIcon />, text: 'Complete it' },
    ],
    [
        { icon: <AddIcon />, text: 'Add a task' },
        { icon: <EventIcon />, text: 'Give it a due date' },
        { icon: <AccessAlarmIcon />, text: 'Schedule a reminder' },
        { icon: <FlagIcon />, text: 'Give tasks a priority level' },
    ],
    [
        { icon: <AddIcon />, text: 'Add a task' },
        { icon: <TimelineIcon />, text: 'Break it into subtasks' },
        { icon: <FormatListBulletedIcon />, text: 'Move tasks into projects' },
        { icon: <PersonIcon />, text: 'Share your projects' },
        { icon: <FlagIcon />, text: 'Give tasks a priority level' },
        { icon: <AccessAlarmIcon />, text: 'Set up reminders' },
        { icon: <ChatBubbleIcon />, text: 'Discuss in comments' },
        { icon: <CheckCircleOutlineIcon />, text: 'Complete tasks' },
    ],
    [
        { icon: <AddIcon />, text: 'Add a task' },
        { icon: <TimelineIcon />, text: 'Break it into subtasks' },
        { icon: <FormatListBulletedIcon />, text: 'Move tasks into projects' },
        { icon: <PersonIcon />, text: 'Share your projects' },
        { icon: <AccessAlarmIcon />, text: 'Set up reminders' },
        { icon: <ExtensionIcon />, text: 'Add some extensions' },
        { icon: <ChatBubbleIcon />, text: 'Create filter views' },
        { icon: <WaterDropIcon />, text: 'Complete tasks' },
    ],
];

export default tasks;