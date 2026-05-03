import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBuilding,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaTachometerAlt,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

const AdminSidebar = () => {
  // reusable active style
  const navClass = ({ isActive }) =>
    `flex items-center space-x-4 block py-2.5 px-4 rounded transition-colors ${
      isActive ? "bg-teal-500" : "hover:bg-gray-700"
    }`;

  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 w-64 shadow-lg">
      
      {/* Header */}
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h3 className="text-2xl font-pacific">Employee MS</h3>
      </div>

      {/* Menu */}
      <div className="px-4 mt-4 space-y-1">

        <NavLink to="/admin-dashboard" className={navClass} end>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin-dashboard/employees" className={navClass}>
          <FaUsers />
          <span>Employee</span>
        </NavLink>

        <NavLink to="/admin-dashboard/departments" className={navClass}>
          <FaBuilding />
          <span>Department</span>
        </NavLink>

        <NavLink to="/admin-dashboard/leaves" className={navClass}>
          <FaCalendarAlt />
          <span>Leave</span>
        </NavLink>

        <NavLink to="/admin-dashboard/salary" className={navClass}>
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>

        <NavLink to="/admin-dashboard/settings" className={navClass}>
          <FaCogs />
          <span>Setting</span>
        </NavLink>

      </div>
    </div>
  );
};

export default AdminSidebar;