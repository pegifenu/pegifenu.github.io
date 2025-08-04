import { Dialog } from "radix-ui";

import { Cross1Icon } from "@radix-ui/react-icons";

const ProjectDialog = ({ selectedProject }) => {
  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay fixed inset-0 z-20 bg-black/50" />
        <Dialog.Content className="DialogContent fixed top-1/2 left-1/2 z-20 w-8/10 -translate-x-1/2 -translate-y-1/2 rounded-md border border-[#3F5475] bg-[#0B0B15] p-8 text-gray-900 shadow">
          <div className="flex items-center justify-between text-white">
            <Dialog.Title className="bold text-xl font-semibold">
              {selectedProject.title}
            </Dialog.Title>
            <Dialog.Close>
              <Cross1Icon className="transition-duration-100 h-6 w-6 cursor-pointer text-white/50 transition hover:text-white" />
            </Dialog.Close>
          </div>

          <Dialog.Description className="whitespace-pre-line text-white">
            <selectedProject.DescriptionComponent />
          </Dialog.Description>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  );
};

export default ProjectDialog;
