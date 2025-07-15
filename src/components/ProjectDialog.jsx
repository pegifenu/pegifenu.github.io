import { Dialog } from "radix-ui";

import { Cross1Icon } from "@radix-ui/react-icons";

const ProjectDialog = ({ selectedProject }) => {
  console.log(selectedProject);
  return (
    <div>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-20 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-20 w-8/10 -translate-x-1/2 -translate-y-1/2 rounded-md border border-[#3F5475] bg-[#0B0B15] p-8 text-gray-900 shadow">
          <div className="flex items-center justify-between text-white">
            <Dialog.Title>{selectedProject.title}</Dialog.Title>
            <Dialog.Close>
              <Cross1Icon className="text-gray-400 hover:text-gray-500" />
            </Dialog.Close>
          </div>

          <Dialog.Description></Dialog.Description>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </div>
  );
};

export default ProjectDialog;
