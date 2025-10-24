import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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

const ProjectPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      navigate("/login");
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pb-12 ">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 mt-16 text-white py-8 px-4 sm:py-12 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Project Dashboard
          </h1>
          <p className="text-purple-100 text-sm sm:text-base">
            Manage your projects and tasks efficiently
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mt-5 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add Project Card */}
        <div className="bg-white rounded-2xl shadow-xl  p-4 sm:p-6 mb-8 border border-gray-100">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
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
              className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-purple-500 transition"
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
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No projects yet
            </h3>
            <p className="text-gray-500">
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
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Project Header */}
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                          {project.projectName}
                        </h2>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center">
                            <span className="font-semibold mr-1">
                              {stats.completed}
                            </span>
                            / {stats.total} tasks completed
                          </span>
                          {stats.total > 0 && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                              {Math.round(stats.progress)}% done
                            </span>
                          )}
                        </div>
                        {/* Progress Bar */}
                        {stats.total > 0 && (
                          <div className="mt-3 w-full bg-gray-200 rounded-full h-2.5">
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
                    <div className="border-t border-gray-100 bg-gray-50 p-4 sm:p-6">
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
                            className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 bg-white focus:outline-none focus:border-purple-500 transition"
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
                              className={`${
                                task.completed
                                  ? "bg-green-50 border-green-200"
                                  : "bg-white border-gray-200"
                              } border-2 rounded-xl p-4 transition-all duration-300 hover:shadow-md`}
                            >
                              {editIndex === tIndex ? (
                                <div className="flex flex-col sm:flex-row gap-3">
                                  <input
                                    type="text"
                                    value={editTaskName}
                                    onChange={(e) =>
                                      setEditTaskName(e.target.value)
                                    }
                                    className="flex-1 px-4 py-2 rounded-lg border-2 border-purple-300 focus:outline-none focus:border-purple-500"
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
                                          ? "line-through text-green-600"
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
                            <p className="text-gray-500">
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
