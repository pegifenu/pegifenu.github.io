import { Dialog } from "radix-ui";

import { Cross1Icon } from "@radix-ui/react-icons";

const ProjectDialog = ({ selectedProject }) => {
    console.log(selectedProject);
    return (
        <div>
            <Dialog.Portal>
                <Dialog.Overlay className="z-2 fixed inset-0 bg-black/50"/>
                <Dialog.Content className="z-3 fixed left-1/2 top-1/2 w-8/10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#0B0B15] border border-[#3F5475] p-8 text-gray-900 shadow">
                    <div className="flex items-center justify-between text-white">
                        <Dialog.Title>{selectedProject.title}</Dialog.Title>
                        <Dialog.Close>
                            <Cross1Icon className="text-gray-400 hover:text-gray-500" />
                        </Dialog.Close>
                        
                    </div>
                    
                    <Dialog.Description>

                    </Dialog.Description>
                    <Dialog.Close />
                </Dialog.Content>
            </Dialog.Portal>
                
        </div>
    );
}

export default ProjectDialog;