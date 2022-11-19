import React, { useEffect, useState } from 'react';
import './TaskTimer.css';
import { db } from '../../../../firebase-config';
import {
  updateDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function TaskTiemer(props) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false)

    const [display, setDisplay] = useState(false);
    const [content, setContent] = useState('start')

    const toggleTimer = () => {
      setIsActive(!isActive);
      setContent(!isActive ? 'stop' : 'start')
    };

    useEffect(() => {
      let interval = null;
      if (isActive) {

        interval = setInterval(() => {
          setSeconds(seconds => (seconds + 1) % 60);
          seconds === 59 ? setMinutes(minutes => (minutes + 1) % 60) : console.log('');
          minutes === 59 ? setHours(hours => (hours + 1) % 60) : console.log(''); 
        ;}, 1000);
      
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }, [isActive, seconds, minutes, hours]
  )


    const { status, id } = props.value.value;
    const navigate = useNavigate();

    const updateStatus = async (id, status) => {
    const currDoc = doc(db, "Tasks", id);
    const newStatus = {status: !status};
    await updateDoc(currDoc, newStatus);

    navigate('/donetasks')
    } ;
   

  return (
    <div className='task-timer'>
        <div className='task-timer__container'>
          <button className={isActive ? 'btn stop-btn' : 'btn start-btn'} onClick={toggleTimer}>{content}</button>
          <div className='timer-container'>
              <div className={isActive ? 'timer-container text start' : 'timer-container text stop'}>timer</div>
              <div>{hours > 9 ? hours : '0' + hours}:{minutes > 9 ? minutes : '0' + minutes}:{seconds > 9 ? seconds : '0' + seconds}</div>
          </div>
        </div>
        <div className='task-status__container'>
          <button className='btn finish-btn disabled' onClick={() => {
            updateStatus(id, status);
            }}>Finish Task
          </button>
        </div>
    </div>
    
  )
}
