import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProject,
  setActiveIndex,
  addTask,
  toggleTask,
  deleteTask,
  editTask,
} from "../redux/slices/projectSlice";
import type { RootState } from "../redux/store";
import toast from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const { darkMode } = useTheme();
  const { projectList, activeIndex } = useSelector(
    (state: RootState) => state.project
  );

  const { currentUser } = useSelector((state: RootState) => state.user);

  const [newProject, setNewProject] = useState("");
  const [newTask, setNewTask] = useState("");
  const [editTaskName, setEditTaskName] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const userProjects =
    projectList.find((user) => user.email === currentUser?.email)?.projects ||
    [];

  const handleAddProject = () => {
    if (!currentUser) {
      toast.error("Please log in first!");
      return;
    }
    if (newProject.trim() === "") return;
    dispatch(addProject({ email: currentUser.email, projectName: newProject }));
    setNewProject("");
  };

  const handleAddTask = (pIndex: number) => {
    if (!currentUser) {
      toast.error("Please log in first!");
      return;
    }
    if (newTask.trim() === "") return;
    dispatch(
      addTask({ email: currentUser.email, projectIndex: pIndex, task: newTask })
    );
    setNewTask("");
  };

  const getProjectStats = (project: any) => {
    const total = project.tasks.length;
    const completed = project.tasks.filter((t: any) => t.completed).length;
    const progress = total > 0 ? (completed / total) * 100 : 0;
    return { total, completed, progress };
  };

  return (
    <div
      className={`min-h-screen pb-12 transition-colors duration-300 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-purple-50 via-white to-blue-50"
      }`}
    >
      {/* Header Section */}
      <div
        className={`mt-16 py-8 px-4 sm:py-12 shadow-lg transition-colors duration-300 ${
          darkMode
            ? "bg-gradient-to-r from-purple-900 to-blue-900 text-white"
            : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Project Dashboard
          </h1>
          <p
            className={`text-sm sm:text-base ${
              darkMode ? "text-purple-200" : "text-purple-100"
            }`}
          >
            Manage your projects and tasks efficiently
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mt-5 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add Project Card */}
        <div
          className={`rounded-2xl shadow-xl p-4 sm:p-6 mb-8 border transition-colors duration-300 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-100"
          }`}
        >
          <h2
            className={`text-lg sm:text-xl font-semibold mb-4 flex items-center ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            <span
              className={`rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm ${
                darkMode
                  ? "bg-purple-900 text-purple-300"
                  : "bg-purple-100 text-purple-600"
              }`}
            >
              +
            </span>
            Create New Project
          </h2>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={newProject}
              onChange={(e) => setNewProject(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddProject()}
              placeholder="Enter project name..."
              className={`flex-1 px-4 py-3 rounded-xl border-2 focus:outline-none transition ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-purple-500"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-purple-500"
              }`}
            />
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 whitespace-nowrap"
              onClick={handleAddProject}
            >
              Add Project
            </button>
          </div>
        </div>

        {/* Projects List */}
        {userProjects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📋</div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              No projects yet
            </h3>
            <p className={darkMode ? "text-gray-400" : "text-gray-500"}>
              Create your first project to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {userProjects.map((project, pIndex) => {
              const stats = getProjectStats(project);
              const isActive = activeIndex === pIndex;

              return (
                <div
                  key={pIndex}
                  className={`rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  }`}
                >
                  {/* Project Header */}
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h2
                          className={`text-xl sm:text-2xl font-bold mb-2 ${
                            darkMode ? "text-gray-100" : "text-gray-800"
                          }`}
                        >
                          {project.projectName}
                        </h2>
                        <div
                          className={`flex flex-wrap items-center gap-3 text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          <span className="flex items-center">
                            <span className="font-semibold mr-1">
                              {stats.completed}
                            </span>
                            / {stats.total} tasks completed
                          </span>
                          {stats.total > 0 && (
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                darkMode
                                  ? "bg-purple-900 text-purple-300"
                                  : "bg-purple-100 text-purple-700"
                              }`}
                            >
                              {Math.round(stats.progress)}% done
                            </span>
                          )}
                        </div>
                        {/* Progress Bar */}
                        {stats.total > 0 && (
                          <div
                            className={`mt-3 w-full rounded-full h-2.5 ${
                              darkMode ? "bg-gray-700" : "bg-gray-200"
                            }`}
                          >
                            <div
                              className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full transition-all duration-500"
                              style={{ width: `${stats.progress}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                      <button
                        className={`${
                          isActive
                            ? "bg-gray-500 hover:bg-gray-600"
                            : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                        } text-white font-medium px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 whitespace-nowrap`}
                        onClick={() =>
                          dispatch(setActiveIndex(isActive ? -1 : pIndex))
                        }
                      >
                        {isActive ? "Hide Tasks ▲" : "View Tasks ▼"}
                      </button>
                    </div>
                  </div>

                  {/* Tasks Section */}
                  {isActive && (
                    <div
                      className={`border-t p-4 sm:p-6 transition-colors duration-300 ${
                        darkMode
                          ? "border-gray-700 bg-gray-900"
                          : "border-gray-100 bg-gray-50"
                      }`}
                    >
                      {/* Add Task */}
                      <div className="mb-6">
                        <div className="flex flex-col sm:flex-row gap-3">
                          <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && handleAddTask(pIndex)
                            }
                            placeholder="Add a new task..."
                            className={`flex-1 px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-purple-500 transition ${
                              darkMode
                                ? "bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400"
                                : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
                            }`}
                          />
                          <button
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 whitespace-nowrap"
                            onClick={() => handleAddTask(pIndex)}
                          >
                            Add Task
                          </button>
                        </div>
                      </div>

                      {/* Task List */}
                      <div className="space-y-3">
                        {project.tasks.length > 0 ? (
                          project.tasks.map((task, tIndex) => (
                            <div
                              key={tIndex}
                              className={`border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-md ${
                                task.completed
                                  ? darkMode
                                    ? "bg-green-900/30 border-green-700"
                                    : "bg-green-50 border-green-200"
                                  : darkMode
                                  ? "bg-gray-800 border-gray-700"
                                  : "bg-white border-gray-200"
                              }`}
                            >
                              {editIndex === tIndex ? (
                                <div className="flex flex-col sm:flex-row gap-3">
                                  <input
                                    type="text"
                                    value={editTaskName}
                                    onChange={(e) =>
                                      setEditTaskName(e.target.value)
                                    }
                                    className={`flex-1 px-4 py-2 rounded-lg border-2 focus:outline-none focus:border-purple-500 ${
                                      darkMode
                                        ? "bg-gray-700 border-gray-600 text-gray-100"
                                        : "bg-white border-purple-300 text-gray-900"
                                    }`}
                                  />
                                  <div className="flex gap-2">
                                    <button
                                      className="flex-1 sm:flex-none bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition"
                                      onClick={() => {
                                        dispatch(
                                          editTask({
                                            email: currentUser?.email,
                                            projectIndex: pIndex,
                                            taskIndex: tIndex,
                                            newTask: editTaskName,
                                          })
                                        );
                                        setEditIndex(null);
                                      }}
                                    >
                                      Save
                                    </button>
                                    <button
                                      className="flex-1 sm:flex-none bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg font-medium transition"
                                      onClick={() => setEditIndex(null)}
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div className="flex items-start gap-3 flex-1">
                                    <input
                                      type="checkbox"
                                      checked={task.completed}
                                      onChange={() =>
                                        dispatch(
                                          toggleTask({
                                            projectIndex: pIndex,
                                            taskIndex: tIndex,
                                            email: currentUser?.email,
                                          })
                                        )
                                      }
                                      className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer"
                                    />
                                    <p
                                      className={`text-base sm:text-lg flex-1 ${
                                        task.completed
                                          ? darkMode
                                            ? "line-through text-green-400"
                                            : "line-through text-green-600"
                                          : darkMode
                                          ? "text-gray-200"
                                          : "text-gray-800"
                                      }`}
                                    >
                                      {task.taskName}
                                    </p>
                                  </div>
                                  <div className="flex flex-wrap gap-2">
                                    <button
                                      className="flex-1 sm:flex-none bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition"
                                      onClick={() => {
                                        setEditIndex(tIndex);
                                        setEditTaskName(task.taskName);
                                      }}
                                    >
                                      ✏️ Edit
                                    </button>
                                    <button
                                      className="flex-1 sm:flex-none bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition"
                                      onClick={() =>
                                        dispatch(
                                          deleteTask({
                                            email: currentUser?.email,
                                            projectIndex: pIndex,
                                            taskIndex: tIndex,
                                          })
                                        )
                                      }
                                    >
                                      🗑️ Delete
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))
                        ) : (
                          <div className="text-center py-8">
                            <div className="text-4xl mb-2">📝</div>
                            <p
                              className={
                                darkMode ? "text-gray-400" : "text-gray-500"
                              }
                            >
                              No tasks yet. Add your first task above!
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
