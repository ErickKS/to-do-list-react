import React, { useState, FormEvent } from "react";
import { TaskSingle } from "./TaskSingle";

import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "phosphor-react";

export interface ListProps {
  id: number;
  description: string;
  done: boolean;
}

export function List() {
  const [tasks, setTasks] = useState<ListProps[]>([
    {
      id: 0,
      description: "Learn React",
      done: false,
    },
  ]);

  const [inputData, setInputData] = useState("");
  const [open, setOpen] = React.useState(false);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    if (inputData === "") {
      alert("You need to insert the task before");
    } else {
      handleAddTask(inputData);
      setOpen(false);
      setInputData("");
    }
  }

  function handleAddTask(taskName: string) {
    let newTaskList = [...tasks];
    let lastTaskList = newTaskList[newTaskList.length - 1];

    newTaskList.push({
      id: newTaskList.length !== 0 ? lastTaskList.id + 1 : 0,
      description: taskName,
      done: false,
    });

    setTasks(newTaskList);
  }

  function handleTaskChange(id: number, done: boolean) {
    let newTaskList = [...tasks];
    for (let i in newTaskList) {
      if (newTaskList[i].id === id) {
        newTaskList[i].done = done;
      }
    }

    console.log(id, newTaskList.length);
    setTasks(newTaskList);
  }

  function handleTaskDeletion(taskId: number) {
    let newTaskList = tasks.filter((tasks) => tasks.id !== taskId);

    setTasks(newTaskList);
  }

  return (
    <div className="max-w-lg w-full px-4">
      <div className="min-h-[576px] h-auto bg-purple-800 p-6 rounded-2xl">
        <div className="flex justify-between items-center bg-purple-600 px-4 py-2 rounded-lg">
          <span className="text-2xl text-white font-medium items-center uppercase">
            To-Do
          </span>

          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger className="w-10 h-10 bg-purple-200 rounded-lg transition-opacity hover:opacity-80 ">
              <Plus size={32} className="text-black mx-auto" />
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="bg-black/40 inset-0 fixed" />

              <Dialog.Content
                className="max-w-md w-full fixed bg-purple-800 border-2 border-purple-200/80 py-8 px-9 rounded-lg
                text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Dialog.Title className="text-2xl font-semibold">
                  Add a new task
                </Dialog.Title>

                <form
                  onSubmit={handleCreateTask}
                  className="mt-8 flex flex-col gap-8"
                >
                  <div className="flex flex-col gap-1">
                    <label htmlFor="task">Insert the task</label>
                    <input
                      id="task"
                      type="text"
                      value={inputData}
                      autoComplete="off"
                      onChange={(e) => setInputData(e.target.value)}
                      className="bg-transparent border-2 border-purple-600 rounded p-2 outline-none focus:border-purple-400"
                    />
                  </div>

                  <div className="flex gap-3">
                    <Dialog.Close
                      type="button"
                      className="h-12 px-5 bg-purple-400 rounded-md font-semibold border-2 border-purple-200/0 outline-none transition-colors hover:border-purple-200 focus:border-purple-200"
                    >
                      Return
                    </Dialog.Close>

                    <button
                      type="submit"
                      className="h-12 px-5 bg-purple-200 rounded-lg font-semibold text-center uppercase border-2 outline-none transition-colors border-purple-200 hover:bg-purple-200/30 focus:bg-purple-200/30"
                    >
                      Add
                    </button>
                  </div>
                </form>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>

        <div className="mt-8">
          {tasks.map((task, index) => (
            <TaskSingle
              key={index}
              task={task}
              onCheckedChange={handleTaskChange}
              onClick={handleTaskDeletion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
