import database from "@/services/database.js";
import router from "@/router.js";

class GlobalCommands {
  createProject() {
    const newProject = {
      name: "New Project",
      description: "My new awesome project",
      created: new Date().toISOString(),
    };

    database.insert("projects", newProject);
    router.push(`/projects/${ newProject.id }`);
  }

  init() {
    document.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.key === 'n') {
        event.preventDefault();
        this.createProject();
      }
    });
  }
}

export default new GlobalCommands();
