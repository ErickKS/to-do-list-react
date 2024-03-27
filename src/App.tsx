import { useListTasks } from "@/hooks/useListTasks";

import { AddTaskDialog } from "@/components/task/add-task-dialog";
import { TaskSingle } from "@/components/task/task-single";

export function App() {
  const [tasks] = useListTasks((state) => [state.tasks]);

  return (
    <main className="flex justify-center items-center h-screen w-full p-4">
      <div className="flex flex-col gap-8 min-h-[480px] max-w-[440px] w-full p-4 border border-secondary rounded-lg">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-medium leading-tight">To.Do</h1>

          <AddTaskDialog />
        </header>

        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <TaskSingle key={task.id} task={task} />
          ))}
        </div>
      </div>
    </main>
  );
}
