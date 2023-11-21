import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <div className="flex justify-between mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Shop
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">User Information</h2>
          <p>Level: 1</p>
          <p>Points: 100</p>
        </div>
        <hr className="mb-4" />
        <div>
          <h2 className="text-xl font-bold">Task List</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Task</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Task 1</td>
                <td className="border px-4 py-2">Completed</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Task 2</td>
                <td className="border px-4 py-2">In Progress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;