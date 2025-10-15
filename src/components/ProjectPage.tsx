import React, { useState } from "react";
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

const ProjectPage = () => {
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
    if (!currentUser) return alert("Please log in first!");
    if (newProject === "") return;
    dispatch(addProject({ email: currentUser.email, projectName: newProject }));
    setNewProject("");
  };

  const handleAddTask = (pIndex: number) => {
    if (!currentUser) return alert("Please Log in first...");
    if (newTask === "") return;
    dispatch(
      addTask({ email: currentUser.email, projectIndex: pIndex, task: newTask })
    );
    setNewTask("");
  };

  return (
    <div className="pb-10">
      <h1 className="text-3xl text-center mt-7 font-semibold text-purple-700">
        Project Dashboard
      </h1>

      {/* Add Project */}
      <div className="flex justify-between mx-16 my-8 items-center">
        <input
          type="text"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddProject()}
          placeholder="Enter project name..."
          className="px-3 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button
          className="bg-purple-600 text-white mx-2 shadow-md px-5 py-2.5 w-40 rounded-lg"
          onClick={() => handleAddProject()}
        >
          Add Project
        </button>
      </div>

      {/* Project List */}
      <div className="mx-16">
        {userProjects.map((project, pIndex) => (
          <div
            key={pIndex}
            className="rounded-lg bg-white shadow-md px-4 py-4 my-3 hover:ring-2 hover:ring-purple-600"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-2xl text-gray-800">
                {pIndex + 1}. {project.projectName}
              </h2>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md"
                onClick={() => dispatch(setActiveIndex(pIndex))}
              >
                {activeIndex === pIndex ? "Hide Tasks" : "Check Status"}
              </button>
            </div>

            {activeIndex === pIndex && (
              <div className="mt-4">
                {/* Add Task */}
                <div className="flex justify-between items-center">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleAddTask(pIndex)
                    }
                    placeholder="Add a task..."
                    className="rounded-lg bg-white shadow-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button
                    className="bg-purple-600 text-white mx-2 shadow-md px-2 py-1 w-40 rounded-lg"
                    onClick={() =>
                      // dispatch(addTask({ projectIndex: pIndex, task: newTask }))
                      handleAddTask(pIndex)
                    }
                  >
                    Add Task
                  </button>
                </div>

                {/* Task List */}
                <div className="mt-4">
                  {project.tasks.length > 0 ? (
                    project.tasks.map((task, tIndex) => (
                      <div
                        key={tIndex}
                        className={`flex justify-between items-center px-4 py-2 my-2 rounded-md shadow-sm ${
                          task.completed ? "bg-green-50" : "bg-gray-50"
                        }`}
                      >
                        {editIndex === tIndex ? (
                          <>
                            <input
                              type="text"
                              value={editTaskName}
                              onChange={(e) => setEditTaskName(e.target.value)}
                              className="px-3 py-2 w-8/12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                            <div className="space-x-2">
                              <button
                                className="bg-purple-600 text-white px-3 py-1.5 rounded-lg"
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
                                className="bg-gray-400 text-white px-3 py-1.5 rounded-lg"
                                onClick={() => setEditIndex(null)}
                              >
                                Cancel
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            <p
                              className={`text-lg ${
                                task.completed
                                  ? "line-through text-green-600"
                                  : "text-gray-800"
                              }`}
                            >
                              {task.taskName}
                            </p>
                            <div className="space-x-2">
                              <button
                                className={`${
                                  task.completed
                                    ? "bg-yellow-500 hover:bg-yellow-600"
                                    : "bg-green-500 hover:bg-green-600"
                                } text-white px-3 py-1.5 rounded-lg`}
                                onClick={() =>
                                  dispatch(
                                    toggleTask({
                                      projectIndex: pIndex,
                                      taskIndex: tIndex,
                                      email: currentUser?.email,
                                    })
                                  )
                                }
                              >
                                {task.completed ? "Undo" : "Complete"}
                              </button>
                              <button
                                className="bg-blue-500 text-white px-3 py-1.5 rounded-lg"
                                onClick={() => {
                                  setEditIndex(tIndex);
                                  setEditTaskName(task.taskName);
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="bg-red-500 text-white px-3 py-1.5 rounded-lg"
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
                                Delete
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-sm mt-2">No tasks yet.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
