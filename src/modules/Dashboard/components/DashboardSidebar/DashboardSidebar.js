import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../../common/css/Buttoms/Buttoms.css'
import '../../../../common/css/Buttoms/MenuButtoms/MenuButtoms.css'
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckIcon from '@mui/icons-material/Check';
import DashboardIcon from '@mui/icons-material/Dashboard';


export default function DashboardSidebar() {

const navigate = useNavigate();

const addTaskHandler = (e) => {
    navigate('/addtask');
}

const doneTasksHandler = (e) => {
    navigate('/donetasks');
}

const dashboardHandler = (e) => {
    navigate('/dashboard');
}

  return (
    <div className='dashboard-sidebar'>
        <div className='userInfo'>
            <div className='user-avatar'>
                <img style={{ width: '64px', height: '64px', borderRadius: '50%' }} src={ localStorage.getItem('profilePicture') } />
            </div>
            <div className='user-name'>
                <h4>{localStorage.getItem('name')}</h4>
            </div>
            <div className='user-email'>
                <h4>{localStorage.getItem('email')}</h4>
            </div>
        </div>
            <div className='dashboard-menu'>
                <button className='btn menu-btn disabled'><PersonIcon className='menu-btn__icon' />Edit Profile</button>
                <button className='btn menu-btn' onClick={dashboardHandler}><DashboardIcon />Dashboard</button>
                <button className='btn menu-btn' onClick={addTaskHandler}><CreateIcon />Add Task</button>
                <button className='btn menu-btn' onClick={doneTasksHandler}><CheckIcon />Done Tasks</button>
                <button className='btn menu-btn disabled'><ShowChartIcon />View Statistic</button>
                <button className='btn menu-btn disabled'><EmojiEventsIcon />My Rewards</button>
            </div>
    </div>
  )
}
