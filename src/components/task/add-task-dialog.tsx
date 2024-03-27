import { ChangeEvent, FormEvent, useState } from "react";
import { Plus } from "lucide-react";

import { useListTasks } from "@/hooks/useListTasks";

import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// export function Dialog({ open, setOpen, title, blur, children, onSubmit }: DialogProps) {
//   return (
//     <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
//       <DialogPrimitive.Portal>
//         <DialogPrimitive.Overlay className={clsx("fixed inset-0 bg-black/50", { "backdrop-blur-sm": blur })} />

//         <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full px-4 outline-none sm:px-6">
//           <div className="flex flex-col gap-6 px-4 py-6 rounded-xl bg-gray-dark text-white">
//             <div className="flex justify-between">
//               <DialogPrimitive.Title className="text-xl font-medium">{title}</DialogPrimitive.Title>

//               <DialogPrimitive.Close>
//                 <X />
//               </DialogPrimitive.Close>
//             </div>

//             <main className="flex flex-col gap-2">{children}</main>

//             <footer className="flex justify-end gap-2">
//               <DialogPrimitive.Close className="flex items-center py-2 px-4 border rounded-lg border-transparent text-red font-semibold outline-none transition hover:border-red focus:border-red">
//                 Cancelar
//               </DialogPrimitive.Close>

//               <button
//                 onClick={onSubmit}
//                 className="flex items-center py-2 px-4 rounded-lg bg-gradient text-white font-medium outline-none transition focus:shadow-main hover:shadow-main"
//               >
//                 Adicionar
//               </button>
//             </footer>
//           </div>
//         </DialogPrimitive.Content>
//       </DialogPrimitive.Portal>
//     </DialogPrimitive.Root>
//   );
// }

export function AddTaskDialog() {
  const [openDialog, setDialogOpen] = useState(false);
  const [inputData, setInputData] = useState("");
  const [addTask] = useListTasks((state) => [state.addTaskToList]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setInputData(value);
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!inputData) return;

    addTask(inputData);

    setInputData("");
    setDialogOpen(false);
  }

  return (
    <Dialog open={openDialog} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Plus className="size-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create task</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleCreateNewTask} className="flex flex-col gap-6 mt-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="task" className="text-sm font-medium leading-none">
              Name
            </label>
            <Input id="task" value={inputData} onChange={handleInputChange} autoComplete="off" />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant={"secondary"}>Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
