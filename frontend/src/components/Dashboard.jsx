import React from "react";
import { Activity, Battery, MapPin, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-white text-black">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">RoadRims Logistics Dashboard</h2>

        <div className="flex gap-4">
          <Link to="/addvehicle">
            <button className="btn bg-primary hover:bg-primary/80 text-primary-content border-none">
              Add Vehicle
            </button>
          </Link>

          <button className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-primary-content">
            Generate Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="stats shadow bg-white border border-base-200">
          <div className="stat text-black">
            <div className="stat-figure text-primary">
              <Activity className="w-8 h-8" />
            </div>
            <div className="stat-title">Active Vehicles</div>
            <div className="stat-value text-primary">25</div>
            <div className="stat-desc">↗︎ 14% more than last month</div>
          </div>
        </div>

        <div className="stats shadow bg-white border border-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Battery className="w-8 h-8" />
            </div>
            <div className="stat-title">Maintenance Due</div>
            <div className="stat-value text-primary">4</div>
            <div className="stat-desc">Vehicles need attention</div>
          </div>
        </div>

        <div className="stats shadow bg-white border border-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="stat-title">Total Distance</div>
            <div className="stat-value text-primary">2,540</div>
            <div className="stat-desc">km this week</div>
          </div>
        </div>

        <div className="stats shadow bg-white border border-base-200">
          <div className="stat">
            <div className="stat-figure text-primary">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="stat-title">Alerts</div>
            <div className="stat-value text-primary">3</div>
            <div className="stat-desc">Require immediate action</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card bg-white border border-base-200">
          <div className="card-body">
            <h3 className="card-title text-primary">Recent Activity</h3>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th className="bg-base-200">Vehicle</th>
                    <th className="bg-base-200">Driver</th>
                    <th className="bg-base-200">Status</th>
                    <th className="bg-base-200">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Truck #1234</td>
                    <td>John Doe</td>
                    <td>
                      <span className="badge bg-green-500 text-white">
                        Active
                      </span>
                    </td>
                    <td>Route 66, Mile 120</td>
                  </tr>
                  <tr>
                    <td>Van #5678</td>
                    <td>Jane Smith</td>
                    <td>
                      <span className="badge bg-primary text-primary-content">
                        Maintenance
                      </span>
                    </td>
                    <td>Central Depot</td>
                  </tr>
                  <tr>
                    <td>Truck #9012</td>
                    <td>Mike Johnson</td>
                    <td>
                      <span className="badge bg-red-500 text-white">
                        Issue Reported
                      </span>
                    </td>
                    <td>Highway 95, Mile 45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="card bg-white border border-base-200">
          <div className="card-body">
            <h3 className="card-title text-primary">Maintenance Schedule</h3>
            <div className="overflow-x-auto">
              <table className="table table-zebra">
                <thead>
                  <tr>
                    <th className="bg-base-200">Vehicle</th>
                    <th className="bg-base-200">Service Type</th>
                    <th className="bg-base-200">Due Date</th>
                    <th className="bg-base-200">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Truck #1234</td>
                    <td>Oil Change</td>
                    <td>Mar 15, 2024</td>
                    <td>
                      <span className="badge bg-primary text-primary-content">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Van #5678</td>
                    <td>Brake Service</td>
                    <td>Mar 18, 2024</td>
                    <td>
                      <span className="badge bg-blue-500 text-white">
                        Scheduled
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Truck #9012</td>
                    <td>Tire Rotation</td>
                    <td>Mar 20, 2024</td>
                    <td>
                      <span className="badge bg-green-500 text-white">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
