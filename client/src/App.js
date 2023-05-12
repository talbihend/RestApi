import './App.css';
import { useEffect } from 'react';
import { getUsers } from './redux/actions';
import { useDispatch } from 'react-redux';
import UserList from './Components/UserList';
import AddNewUser from './Components/AddNewUser';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import UserCard from './Components/UserCard';
import OneUser from './Components/OneUser';


function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getUsers())
  })
  return (
    <div className="App">
    
     <Router>
     <h1 className='title'>MongoDB, React</h1>

      <Routes>
        <Route path="/" element={
          <div>
            <AddNewUser  />
            <UserList/>
          </div>
        }/>
        <Route path="/get/:_id" element={  <OneUser/>  }/>
      </Routes>

     </Router>

    </div>
  );
}

export default App;
