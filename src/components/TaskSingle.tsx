import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { ListProps } from "./List";

interface TasksProps {
  task: ListProps;
  onCheckedChange: (id: number, done: boolean) => void;
  onClick: (id: number) => void;
}

export function TaskSingle({ task, onCheckedChange, onClick }: TasksProps) {
  return (
    <div className="flex gap-4 items-center justify-between p-4 border-b-2 first:border-t-2 border-purple-600">
      <div className="flex gap-3 items-center">
        <Checkbox.Root
          id="checkBox"
          checked={task.done}
          onCheckedChange={() =>
            onCheckedChange(task.id, task.done === true ? false : true)
          }
          className="flex items-center justify-center w-5 h-5 bg-white rounded-[4px] opacity-95 focus:opacity-100"
        >
          <Checkbox.Indicator>
            <Check size={16} weight="bold" className="text-purple-400" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label
          htmlFor="checkBox"
          className="text-white text-base cursor-pointer"
        >
          {task.description}
        </label>
      </div>
      <button>
        <Trash
          size={28}
          onClick={() => onClick(task.id)}
          className="text-white transition-colors hover:text-purple-200"
        />
      </button>
    </div>
  );
}
