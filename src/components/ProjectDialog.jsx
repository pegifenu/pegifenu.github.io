import { Dialog } from "radix-ui";

import PageNav from "../components/PageNav";
import ProjectCard from "../components/ProjectCard";

const ProjectDialog = ({ selectedProject }) => {
    console.log(selectedProject);
  return (
    <div>
        <Dialog.Portal>
			<Dialog.Overlay className="z-2 fixed inset-0 bg-black/50"/>
			<Dialog.Content className="z-3 fixed left-1/2 top-1/2 w-8/10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow">
				<Dialog.Title>{selectedProject.title}</Dialog.Title>
				<Dialog.Description>

                </Dialog.Description>
				<Dialog.Close />
			</Dialog.Content>
		</Dialog.Portal>
            
    </div>
  );
}

export default ProjectDialog;