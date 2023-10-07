import { useState, ChangeEvent } from "react";
import clsx from "clsx";
import { Plus } from "lucide-react";

import { useListTasks } from "./hooks/useListTasks";

import { Dialog } from "./components/dialog";
import { TaskSingle } from "./components/task-single";

export default function App() {
  const [openDialog, setOpenDialog] = useState(false);
  const [inputData, setInputData] = useState("");
  const [inputAlert, setInputAlert] = useState(false);

  const [tasks, addTask] = useListTasks((state) => [state.tasks, state.addTaskToList]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setInputAlert(false);
    setInputData(value);
  }

  function handleAddTask() {
    if (!inputData) {
      setInputAlert(true);
      return;
    }

    addTask(inputData);

    setOpenDialog(false);
    setInputData("");
  }

  return (
    <div className="relative h-screen flex flex-col items-center gap-4 pt-16 pb-5 px-4 overflow-x-hidden">
      <main className="max-w-[400px] w-full bg-[#0D0C17]/60">
        <div className="flex flex-col gap-4 min-h-[480px] h-auto px-4 py-6 bg-purple-800 border-2 border-[#1E2937] rounded-xl">
          <header className="flex justify-between items-center">
            <h1 className="text-3xl text-white">To-do</h1>

            <button
              onClick={() => setOpenDialog(!openDialog)}
              className="flex justify-center items-center h-9 w-9 bg-gradient rounded-lg outline-none transition focus:shadow-main hover:shadow-main"
            >
              <Plus className="stroke-white" />
            </button>

            {openDialog && (
              <Dialog open={openDialog} setOpen={setOpenDialog} title="Add task" blur onSubmit={handleAddTask}>
                <>
                  <label htmlFor="task">Task name</label>

                  <input
                    id="task"
                    type="text"
                    value={inputData}
                    autoComplete="off"
                    autoFocus
                    onChange={handleInputChange}
                    className={clsx("px-3 py-2 bg-transparent border border-[#1E2937] rounded outline-none", "focus:border-primary", {
                      "border-red": inputAlert,
                    })}
                  />
                </>
              </Dialog>
            )}
          </header>

          <div className="flex flex-col gap-2">
            {tasks.map((task) => (
              <TaskSingle key={task.id} task={task} />
            ))}
          </div>
        </div>
      </main>

      <a href="https://github.com/ErickKS" target="_blank" className="text-white/60">
        Developed by <span className="text-white">Erick Kuwahara</span>
      </a>

      <img src="./blur.svg" alt="" className="absolute -z-10 top-0 left-1/5 -translate-x-1/5 min-w-max animate-fade-in" />
    </div>
  );
}
