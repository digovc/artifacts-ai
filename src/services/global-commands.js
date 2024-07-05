import database from "@/services/database.js";
import router from "@/router.js";
import notification from "@/services/notification.js";

class GlobalCommands {
  async createProject() {
    const newProject = {
      name: "New Project",
      description: "My new awesome project",
      created: new Date().toISOString(),
    };

    database.insert("projects", newProject);
    await router.push(`/projects/${ newProject.id }`);
    notification.showNotification("Project created")
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
