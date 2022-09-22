import { Trash } from 'phosphor-react'
import { ListProps } from './List'

interface TasksProps {
  task: ListProps,
  onChange: (id: number, done: boolean) => void
  onClick: (id: number) => void
}

export function TaskSingle({task, onChange, onClick}: TasksProps) {
  return (
    <div className="flex gap-4 my-8 p-6 rounded-lg bg-zinc-800 items-center justify-between">
      <div className='flex gap-4 items-center'>
        <input
          id="checkBox"
          type="checkbox"
          checked={task.done}
          onChange={e => onChange(task.id, e.target.checked)}
          className="w-4 h-4 cursor-pointer"
        />
        <label 
          htmlFor="checkBox"
          className="text-white text-lg cursor-pointer"
        >
          {task.description}
        </label>
      </div>
      <button>
        <Trash size={28}
          onClick={() => onClick(task.id)}
          className="text-white hover:text-indigo-500 focus:text-indigo-500 
          ease-linear duration-150 cursor-pointer"/>
      </button>
    </div>
  )
}