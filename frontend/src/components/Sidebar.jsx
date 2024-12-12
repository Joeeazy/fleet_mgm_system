import React from "react";
import {
  Home,
  Truck,
  Users,
  Calendar,
  Settings,
  FileText,
  AlertTriangle,
  Fuel,
  BaggageClaim,
  //   Tool
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-base-200 text-base-content border-r border-primary/20 sticky">
      <div className="p-4 bg-primary">
        <h1 className="text-xl font-bold flex items-center gap-2 text-primary-content">
          <Truck className="w-6 h-6" />
          Roadrims Logistics
        </h1>
      </div>

      <ul className="menu p-4">
        <Link to="/dashboard">
          <li>
            <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
              <Home className="w-5 h-5" />
              Dashboard
            </a>
          </li>
        </Link>

        <Link to="vehiclesPage">
          <li>
            <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
              <BaggageClaim className="w-5 h-5" />
              Orders
            </a>
          </li>
        </Link>

        <Link to="vehiclesPage">
          <li>
            <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
              <Truck className="w-5 h-5" />
              Vehicles
            </a>
          </li>
        </Link>

        <Link to="/driversPage">
          <li>
            <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
              <Users className="w-5 h-5" />
              Drivers
            </a>
          </li>
        </Link>

        <Link to="/schedule">
          <li>
            <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
              <Calendar className="w-5 h-5" />
              Schedule
            </a>
          </li>
        </Link>

        <li>
          <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
            <Fuel className="w-5 h-5" />
            Fuel Logs
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
            {/* <Tool className="w-5 h-5" /> */}
            Maintenance
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
            <AlertTriangle className="w-5 h-5" />
            Incidents
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
            <FileText className="w-5 h-5" />
            Reports
          </a>
        </li>
        <li>
          <a className="flex items-center gap-2 hover:bg-primary/10 active:bg-primary/20">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
