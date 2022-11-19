import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Authorization from './modules/Authorization/Authorization';
import Dashboard from './modules/Dashboard/Dashboard';
import AddTask from './modules/AddTask/AddTaskPage';
import DoneTasks from './modules/DoneTasks/DoneTasksPage';
import TaskPage from './modules/TaskPage/TaskPage';
import DoneTaskPage from './modules/DoneTaskPage/DoneTaskPage';


function App() {
  return (
    
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/authorization" element={<Authorization />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/taskpage/:id" element={<TaskPage />} />
            <Route exact path="/addtask" element={<AddTask />} />
            <Route exact path="/donetasks" element={<DoneTasks />} />
            <Route exact path="/donetask/:id" element={<DoneTaskPage />} />
            <Route path="*" element={<Navigate to="/authorization" replace />} />
          </Routes>
        </Router>
      </div>
    
  );
}

export default App;
