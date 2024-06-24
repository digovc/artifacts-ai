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
}

export default new GlobalCommands()
