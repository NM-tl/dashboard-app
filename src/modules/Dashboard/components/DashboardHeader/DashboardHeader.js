import React from 'react';
import './DashboardHeader.css';
import IconButton from '@mui/material/IconButton';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import CurrentTime from '../../../../common/components/CurrentTime/CurrentTime';
import { auth } from '../../../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import '../../../../common/css/Buttoms/Buttoms.css';
import PriorityCounters from './components/PriorityCounters.js/PriorityCounters';

export default function DashboardHeader() {

    const navigate = useNavigate();

    const logout = async () => { 
      await signOut(auth);
      localStorage.clear();
      navigate('/autherization')
    };

  return (
    <div className='dashboard-header'>
        <div className='dashboard-header__wrapper'>
        <CurrentTime />
        <div className='tasks-counters'>
            <PriorityCounters />
           
        </div>
        <div className='user-control'>
            <IconButton aria-label="logout" onClick={logout} className="btn">
            <PowerSettingsNewIcon  style={{color: 'white', fontSize: '20px'}} />
            </IconButton>
        </div>
        </div>
    </div>
  )
}
