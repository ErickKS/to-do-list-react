import { useState } from "react";
import { Trash2 } from "lucide-react";

import { Task } from "@/hooks/useListTasks";
import { useListTasks } from "@/hooks/useListTasks";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface TasksProps {
  task: Task;
}

export function TaskSingle({ task: { id, done, description } }: TasksProps) {
  const [taskCheck, setTaskCheck] = useState(false);
  const [removeFromList, setTaskStatus] = useListTasks((state) => [state.removeTaskFromList, state.setTaskStatus]);

  function handleCheckedChange() {
    setTaskCheck(!taskCheck);
    setTaskStatus(id);
  }

  function handleRemoveTaskFromList() {
    removeFromList(id);
  }

  return (
    <div className="flex justify-between items-center gap-2 py-2 px-3 border border-secondary rounded-md transition-all hover:bg-secondary">
      <div className="flex items-center gap-3">
        <Checkbox id={id} checked={done} onCheckedChange={handleCheckedChange} />
        <label htmlFor={id} className="text-sm font-medium leading-none peer-data-[state=checked]:line-through">
          {description}
        </label>
      </div>

      <Button
        variant={"outline"}
        size={"icon"}
        onClick={handleRemoveTaskFromList}
        className="hover:bg-black hover:text-destructive aspect-square"
      >
        <Trash2 className="size-4" />
      </Button>
    </div>
  );
}
