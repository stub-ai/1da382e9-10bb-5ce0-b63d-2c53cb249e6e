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

interface ShopItem {
  name: string;
  price: number;
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
      {/* Add your JSX here */}
    </div>
  );
};

export default Dashboard;