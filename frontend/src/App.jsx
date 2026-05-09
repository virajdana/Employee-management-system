import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from './pages/EmployeeDashboard'
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBaseRoutes from "./utils/RoleBaseRoutes";
import DepartmentList from "./components/department/DepartmentList";
import AdminSummary from "./pages/AdminSummary";
import AddDepartment from "./components/department/AddDepartment";
import EditDepartment from "./components/department/EditDepartment";
import List from "./components/employee/List"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={
          <PrivateRoutes>
            <RoleBaseRoutes requiredRole={["admin"]}>
            <AdminDashboard />
            </RoleBaseRoutes>
          </PrivateRoutes>
        }/>
          <Route index element={<AdminSummary/>}></Route>

          <Route path="/admin-dashboard/departments" element={<DepartmentList/>}></Route>
          <Route path="/admin-dashboard/add-department" element={<AddDepartment/>}></Route>
          <Route path="/admin-dashboard/department/:id" element={<EditDepartment/>}></Route>

          <Route path="/admin-dashboard/employees" element={<List/>}></Route>

        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
