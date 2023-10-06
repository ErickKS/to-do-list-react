import { ReactNode } from "react";
import clsx from "clsx";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  blur?: boolean;
  children: ReactNode;
  onSubmit?: () => void;
}

export function Dialog({ open, setOpen, title, blur, children, onSubmit }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={clsx("fixed inset-0 bg-black/50", { "backdrop-blur-sm": blur })} />

        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full px-4 outline-none sm:px-6">
          <div className="flex flex-col gap-6 px-4 py-6 rounded-xl bg-gray-dark text-white">
            <div className="flex justify-between">
              <DialogPrimitive.Title className="text-xl font-medium">{title}</DialogPrimitive.Title>

              <DialogPrimitive.Close>
                <X />
              </DialogPrimitive.Close>
            </div>

            <main className="flex flex-col gap-2">{children}</main>

            <footer className="flex justify-end gap-2">
              <DialogPrimitive.Close className="flex items-center py-2 px-4 border rounded-lg border-transparent text-red font-semibold outline-none transition hover:border-red focus:border-red">
                Cancelar
              </DialogPrimitive.Close>

              <button
                onClick={onSubmit}
                className="flex items-center py-2 px-4 rounded-lg bg-gradient text-white font-medium outline-none transition focus:shadow-main hover:shadow-main"
              >
                Adicionar
              </button>
            </footer>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
