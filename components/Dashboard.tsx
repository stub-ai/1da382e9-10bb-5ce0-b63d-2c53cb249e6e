import React from 'react';

const Dashboard = () => {
  const tasks = [
    { title: 'Task 1', status: 'Completed', points: 10, dueDate: '2023-01-01' },
    { title: 'Task 2', status: 'In Progress', points: 20, dueDate: '2023-02-01' },
    // Add more tasks as needed
  ];

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
                <th className="px-4 py-2">Points</th>
                <th className="px-4 py-2">Due Date</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{task.title}</td>
                  <td className="border px-4 py-2">{task.status}</td>
                  <td className="border px-4 py-2">{task.points}</td>
                  <td className="border px-4 py-2">{task.dueDate}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;