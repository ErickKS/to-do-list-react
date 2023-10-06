import { Dispatch, useState } from "react";
import clsx from "clsx";
import { Trash2 } from "lucide-react";
import { ListProps } from "../App";
import { Checkbox } from "./checkbox";

interface TasksProps {
  task: ListProps;
  handleTasks: Dispatch<React.SetStateAction<ListProps[]>>;
  onDelete: (id: string) => void;
}

export function TaskSingle({ task, handleTasks, onDelete }: TasksProps) {
  const [taskCheck, setTaskCheck] = useState(false);

  function handleCheckedChange() {
    setTaskCheck(!taskCheck);

    handleTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            done: !taskCheck,
          };
        }
        return t;
      })
    );
  }

  return (
    <div className="group flex justify-between items-center p-4 rounded-lg transition focus:bg-gray-dark focus-within:bg-gray-dark hover:bg-gray-dark">
      <div className="flex gap-3 items-center">
        <Checkbox id={task.id} checked={taskCheck} onCheckedChange={handleCheckedChange}>
          {task.description}
        </Checkbox>
      </div>
      <button onClick={() => onDelete(task.id)} className="group/button outline-none rounded">
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
