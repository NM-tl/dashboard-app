import React, { useState } from 'react'
import '../../common/css/style.css';
import './AddTaskPage.css';
import DashboardHeader from '../Dashboard/components/DashboardHeader/DashboardHeader';
import DashboardSidebar from '../Dashboard/components/DashboardSidebar/DashboardSidebar';
import '../../common/css/Buttoms/Buttoms.css';
import '../../common/css/Buttoms/AddTaskButtoms/AddTaskButtoms.css';

import { db } from "../../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    doc,
  } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export default function AddTaskPage() {

    const [addTitle, setAddTitle] = useState('');
    const [addPriority, setAddPriority] = useState ('');
    const [addDate, setAddDate] = useState ('');
    const [addDescription, setAddDescription] = useState ('');

    const tasksCollectionRef = collection(db, "Tasks");
    const navigate = useNavigate();

    const createTask = async () => {
        try {
            await addDoc(tasksCollectionRef, { title: addTitle, priority: addPriority, date: addDate, description: addDescription, status: false });
            navigate('/dashboard');
        } catch(error) {
            alert(error);
        }
      };

  return (
    <div className='page'>
    <div className='dashboard'>
        <div className='dashboard-wrapper'>
            <DashboardSidebar />
            <div className='mainHalf'>
                <DashboardHeader />
                <div className='addTask-form'>
                    <div className='addTask-form__header'>
                        <div className='title'>
                        <h4>Task title</h4>
                        <input 
                            type='text' 
                            placeholder='TaskTitle'
                            onChange={(event) => {
                                setAddTitle(event.target.value);
                              }}
                            />
                        </div>
                        <div className='priority'>
                        <h4>Task priority</h4>
                        <select
                            onChange={(event) => {
                                setAddPriority(event.target.value);
                            }}
                        >
                            <option>Low</option>
                            <option selected>Medium</option>
                            <option>High</option>
                        </select>
                        </div>
                        <div className='terms'>
                            <h4>Terms</h4>
                            <input 
                                type='date'
                                onChange={(event) => {
                                    setAddDate(event.target.value);
                                  }}
                                />
                        </div>
                    </div>
                    <div className='addTask-form__info'>
                        <h4>Task Description</h4>
                        <textarea 
                            placeholder='TaskDescription' 
                            onChange={(event) => {
                                setAddDescription(event.target.value);
                              }}
                            />
                    </div>
                    <div className='addTask-form__control'>
                        <button className='btn addTask-form__btn' onClick={() => navigate(-1)}>Back</button>
                        <button className='btn addTask-form__btn' onClick={createTask}>AddTask</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
