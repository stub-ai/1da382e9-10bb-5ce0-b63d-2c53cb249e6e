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
  const [showDialog, setShowDialog] = useState(false);
  const [showShopDialog, setShowShopDialog] = useState(false);
  const [taskData, setTaskData] = useState<Task>({ id: '', title: '', description: '', dueDate: '', status: '', points: 0, subTasks: [] });
  const [taskArray, setTaskArray] = useState<Task[]>([]);
  const [userInfo, setUserInfo] = useState<UserInfo>({ points: 0, level: 1 });
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);

  const tasks: Task[] = [
    { id: '1', title: 'Task 1', description: 'Description for Task 1', status: 'Completed', points: 10, dueDate: '2023-01-01', subTasks: [] },
    { id: '2', title: 'Task 2', description: 'Description for Task 2', status: 'In Progress', points: 20, dueDate: '2023-02-01', subTasks: [] },
    // Add more tasks as needed
  ];

  const shopItems: ShopItem[] = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    // Add more items as needed
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    if (editMode) {
      const updatedTasks = [...taskArray];
      updatedTasks[editIndex] = taskData;
      setTaskArray(updatedTasks);
      setEditMode(false);
      setEditIndex(-1);
    } else {
      setTaskArray([...taskArray, taskData]);
    }
    setShowDialog(false);
  };

  const handleEditTask = (index: number) => {
    setEditMode(true);
    setEditIndex(index);
    setTaskData(taskArray[index]);
    setShowDialog(true);
  };

  const handleDeleteTask = (index: number) => {
    const updatedTasks = [...taskArray];
    updatedTasks.splice(index, 1);
    setTaskArray(updatedTasks);
  };

  const handleBuyItem = (item: ShopItem) => {
    // Implement buying logic here
    console.log(`Bought ${item.name}`);
  };

  return (
    <div className="md:flex-row flex flex-col">
      <div className="p-4 md:w-1/2">
        <div className="mb-4 justify-between flex">
          <button onClick={() => setShowDialog(true)} className="px-4 py-2 font-bold text-white rounded bg-blue-500 hover:bg-blue-700">
            Add
          </button>
          <button onClick={() => setShowShopDialog(true)} className="px-4 py-2 font-bold text-white rounded bg-blue-500 hover:bg-blue-700">
            Shop
          </button>
        </div>
        {showShopDialog && (
          <div className="overflow-y-auto inset-0 z-10 fixed" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="sm:block sm:p-0 text-center px-4 pb-20 pt-4 min-h-screen justify-center items-end flex">
              <div className="bg-opacity-75 bg-gray-500 inset-0 fixed" aria-hidden="true"></div>
              <span className="sm:h-screen sm:align-middle sm:inline-block" aria-hidden="true">&#8203;</span>
              <div className="sm:w-full sm:max-w-lg sm:align-middle sm:my-8 align-bottom overflow-hidden text-left shadow-xl rounded-lg bg-white inline-block">
                <div className="sm:pb-4 sm:p-6 pb-4 pt-5 px-4 bg-white">
                  <div className="sm:items-start sm:flex">
                    <div className="sm:text-left sm:ml-4 sm:mt-0 mt-3 text-center">
                      <h3 className="text-gray-900 font-medium leading-6 text-lg" id="modal-title">
                        Shop
                      </h3>
                      <div className="mt-2">
                        {shopItems.map((item, index) => (
                          <div key={index} className="mb-2 items-center justify-between flex">
                            <span>{item.name} - {item.price} points</span>
                            <button onClick={() => handleBuyItem(item)} className="px-2 py-1 font-bold text-white rounded bg-green-500 hover:bg-green-700">
                              Buy
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:flex sm:flex-row-reverse sm:px-6 sm:py-3 py-3 px-4 bg-gray-50">
                  <button onClick={() => setShowShopDialog(false)} type="button" className="sm:text-sm sm:w-auto sm:mt-0 mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;