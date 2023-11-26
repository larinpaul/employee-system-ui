import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Routes>
            {/* <Route path="/" element={<EmployeeList />}></Route>
            <Route index element={<EmployeeList />}></Route>
            <Route path="/employeeList" element={<EmployeeList />}></Route>
            <Route path="/addEmployee" element={<AddEmployee />}></Route>     */}
            <Route path="/" element={<EmployeeList />}/>
            <Route index element={<EmployeeList />}></Route>
            <Route path="/employeeList" element={<EmployeeList />}/>
            <Route path="/addEmployee" element={<AddEmployee />}/>   
            <Route 
                path="/editEmployee/:id"
                element={<UpdateEmployee />}
            />
        </Routes>
    </BrowserRouter>
    </>
  ); 
}

export default App;
