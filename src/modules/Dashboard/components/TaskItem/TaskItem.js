import React, { useContext } from 'react'
import './TaskItem.css'
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LowChip from '../../../../common/components/Chips/LowChip';
import MediumChip from '../../../../common/components/Chips/MediumChip';
import HighChip from '../../../../common/components/Chips/HighChip';
import { DataContext } from '../../Dashboard';
import { Link } from 'react-router-dom';

export default function TaskItem(props) {

  const data = useContext(DataContext);
  const priority = props.value;

  return (
    <>
          {data.filter((task) => priority === 'All' ? task.status === false : task.priority === priority && task.status === false).map((task) => {
            return(
              <div className='task-item'>
                <div className='task-item__title'>{task.title}</div>
                <div className='task-item__info'>
                  {
                    (task.priority === 'Low' && <LowChip />)
                  || (task.priority === 'Medium' && <MediumChip />)
                  || (task.priority === 'High' && <HighChip />)
                  }
                  <div className='task-term'>Before: {task.date}</div>
                </div>
                <Link to={`/taskpage/${task.id}`}>
                  <IconButton color="primary" aria-label="upload picture" component="label" className='task-item__chevron'>
                    <ChevronRightIcon />
                  </IconButton>
                </Link>
              </div>
            );
          })}

    </>
  )
}
