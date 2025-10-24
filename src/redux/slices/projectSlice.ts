import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  taskName: string;
  completed: boolean;
}

export interface Project {
  projectName: string;
  tasks: Task[];
}

interface UserProjects {
  email: string;
  projects: Project[];
}

interface ProjectState {
  projectList: UserProjects[];
  activeIndex: number | null;
}

const initialState: ProjectState = {
  projectList: JSON.parse(localStorage.getItem("projects") || "[]"),
  activeIndex: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,

  reducers: {
    addProject: (
      state,
      action: PayloadAction<{ email: string; projectName: string }>
    ) => {
      const { email, projectName } = action.payload;
      let userData = state.projectList.find((u) => u.email === email);
      if (userData) {
        userData.projects.push({ projectName, tasks: [] });
      } else {
        state.projectList.push({
          email,
          projects: [{ projectName, tasks: [] }],
        });
      }
      localStorage.setItem("projects", JSON.stringify(state.projectList));
    },

    setActiveIndex: (state, action: PayloadAction<number | null>) => {
      state.activeIndex =
        state.activeIndex === action.payload ? null : action.payload;
    },

    addTask: (
      state,
      action: PayloadAction<{
        email: string;
        projectIndex: number;
        task: string;
      }>
    ) => {
      const { email, projectIndex, task } = action.payload;
      if (!task.trim()) return;

      const userData = state.projectList.find((u) => u.email === email);
      if (userData) {
        userData.projects[projectIndex].tasks.push({
          taskName: task,
          completed: false,
        });
        localStorage.setItem("projects", JSON.stringify(state.projectList));
      }
    },

    toggleTask: (
      state,
      action: PayloadAction<{
        email: string | undefined;
        projectIndex: number;
        taskIndex: number;
      }>
    ) => {
      const { email, projectIndex, taskIndex } = action.payload;
      const userData = state.projectList.find((u) => u.email === email);
      if (userData) {
        const task = userData.projects[projectIndex].tasks[taskIndex];
        task.completed = !task.completed;
        localStorage.setItem("projects", JSON.stringify(state.projectList));
      }
    },

    deleteTask: (
      state,
      action: PayloadAction<{
        email: string | undefined;
        projectIndex: number;
        taskIndex: number;
      }>
    ) => {
      const { email, projectIndex, taskIndex } = action.payload;
      const userData = state.projectList.find((u) => u.email === email);
      if (userData) {
        userData.projects[projectIndex].tasks.splice(taskIndex, 1);
        localStorage.setItem("projects", JSON.stringify(state.projectList));
      }
    },

    editTask: (
      state,
      action: PayloadAction<{
        email: string | null | undefined;
        projectIndex: number;
        taskIndex: number;
        newTask: string;
      }>
    ) => {
      const { email, projectIndex, taskIndex, newTask } = action.payload;
      const userData = state.projectList.find((u) => u.email === email);
      if (userData) {
        userData.projects[projectIndex].tasks[taskIndex].taskName = newTask;
        localStorage.setItem("projects", JSON.stringify(state.projectList));
      }
    },
  },
});

export const {
  addProject,
  setActiveIndex,
  deleteTask,
  toggleTask,
  editTask,
  addTask,
} = projectSlice.actions;
export default projectSlice.reducer;
