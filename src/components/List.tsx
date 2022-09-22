import React, { useState, FormEvent } from 'react';
import { TaskSingle } from './TaskSingle'

import * as Dialog from '@radix-ui/react-dialog';
import { Plus } from 'phosphor-react'

export interface ListProps {
  id: number,
  description: string,
  done: boolean,
}

export function List() {
  const [tasks, setTasks] = useState<ListProps[]>([
    {
      id: 1,
      description: "Give a star in this project",
      done: false,
    },
  ])

  const [inputData, setInputData] = useState('');
  const [open, setOpen] = React.useState(false);

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();

    if(inputData === '') {
      alert("You need to insert the task before")
    }else {
      handleAddTask(inputData)
      setOpen(false)
      setInputData('')
    }
  }

  function handleAddTask(taskName: string) {
    let newTaskList = [...tasks];
    newTaskList.push({
      id: tasks.length + 1,
      description: taskName,
      done: false,
    })

    setTasks(newTaskList);
  }

  function handleTaskChange(id: number, done: boolean) {
    let newTaskList = [...tasks];
    for(let i in newTaskList) {
      if(newTaskList[i].id === id) {
        newTaskList[i].done = done;
      }
    }
    setTasks(newTaskList);
  }

  function handleTaskDeletion(taskId: number) {
    const newTaskList = tasks.filter(tasks => tasks.id !== taskId)

    setTasks(newTaskList);
  }

  return (
    <div className="bg-[#161f35] mx-auto px-6 py-10 rounded-md">
      <div className="flex justify-between items-center mb-12">
        <span className="text-xl text-zinc-100">For today</span>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="bg-indigo-600 rounded-full p-2 hover:bg-indigo-700 ease-linear duration-150">
            <Plus size={24} className="text-white"/>
          </Dialog.Trigger>

          <Dialog.Portal className="max-w-screen-sm">
            <Dialog.Overlay className="bg-black/30 inset-0 fixed"/>

            <Dialog.Content 
              className="fixed bg-[#172034] border-2 border-indigo-700 py-8 px-10 text-white top-1/3 
              left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]"
            >
              <Dialog.Title className="text-2xl font-semibold">Add a new task</Dialog.Title>

              <form onSubmit={handleCreateTask} className="mt-8 flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <label htmlFor="task">Insert the task</label>
                  <input
                    id="task"
                    type="text"
                    value={inputData}
                    autoComplete="off"
                    onChange={e => setInputData(e.target.value)}
                    className="bg-transparent border-2 border-zinc-700 rounded p-2 outline-none focus:border-zinc-400"
                  />
                </div>

                <div className="flex gap-3">
                  <Dialog.Close
                    type="button"
                    className="bg-zinc-600 px-5 h-12 rounded-md font-semibold border-2 border-zinc-600 
                    outline-none ease-linear duration-150 hover:bg-zinc-800 focus:bg-zinc-800"
                  >
                    Return
                  </Dialog.Close>

                  <button
                    type="submit"
                    className="bg-indigo-600 px-5 h-12 rounded-md font-semibold text-center border-2
                    border-indigo-600 outline-none ease-linear duration-150 hover:bg-indigo-900 focus:bg-indigo-900"
                  >
                    Add
                  </button>
                </div>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      <div>
        {tasks.map((task, index) => (
          <TaskSingle
            key={index}
            task={task}
            onChange={handleTaskChange}
            onClick={handleTaskDeletion}
          />
        ))}
      </div>
      
    </div>
  )
} 