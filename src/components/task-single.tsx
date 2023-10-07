import { useState } from "react";
import clsx from "clsx";
import { Trash2 } from "lucide-react";

import { Task } from "../hooks/useListTasks";
import { useListTasks } from "../hooks/useListTasks";

import { Checkbox } from "./checkbox";

interface TasksProps {
  task: Task;
}

export function TaskSingle({ task }: TasksProps) {
  const [taskCheck, setTaskCheck] = useState(false);
  const [removeFromList, setTaskStatus] = useListTasks((state) => [state.removeTaskFromList, state.setTaskStatus]);

  function handleCheckedChange() {
    setTaskCheck(!taskCheck);
    setTaskStatus(task.id);
  }

  return (
    <div className="group flex justify-between items-center p-4 rounded-lg transition focus:bg-gray-dark focus-within:bg-gray-dark hover:bg-gray-dark">
      <div className="flex gap-3 items-center">
        <Checkbox id={task.id} checked={taskCheck} onCheckedChange={handleCheckedChange}>
          {task.description}
        </Checkbox>
      </div>
      <button onClick={() => removeFromList(task.id)} className="group/button outline-none rounded">
        <Trash2
          className={clsx(
            "stroke-white opacity-0 transition",
            "group-hover:opacity-90 group-focus-within:opacity-90",
            "group-focus/button:stroke-red hover:stroke-red"
          )}
        />
      </button>
    </div>
  );
}
