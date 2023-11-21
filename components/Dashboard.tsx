import React, { useState, ChangeEvent } from 'react';

interface SubTask {
  id: string;
  title: string;
  points: number;
}

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
  points: number;
  subTasks?: SubTask[];
}

interface UserInfo {
  points: number;
  level: number;
}

const Dashboard = () => {
  const [taskArray, setTaskArray] = useState<Task[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({ points: 0, level: 1 });

  const pointsToLevel = (points: number) => {
    return Math.floor(points / 100) + 1;
  };

  const handleTaskStatusChange = (index: number, status: string) => {
    const updatedTasks = [...taskArray];
    updatedTasks[index].status = status;
    if (status === 'Completed') {
      const newPoints = userInfo.points + updatedTasks[index].points;
      setUserInfo({
        points: newPoints,
        level: pointsToLevel(newPoints),
      });
    }
    setTaskArray(updatedTasks);
  };

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">User Info</h2>
        <p>Points: {userInfo.points}</p>
        <p>Level: {userInfo.level}</p>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Tasks</h2>
        {taskArray.map((task, index) => (
          <div key={task.id} className="mb-2">
            <h3 className="text-xl">{task.title}</h3>
            <p>{task.description}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
            <p>Points: {task.points}</p>
            <button onClick={() => handleTaskStatusChange(index, 'Completed')}>
              Mark as Completed
            </button>
            {task.subTasks && task.subTasks.map(subTask => (
              <div key={subTask.id}>
                <h4>{subTask.title}</h4>
                <p>Points: {subTask.points}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;