import React, { useState, useEffect } from "react";
import "./TaskSubmission.css";
import { Divider } from "@mui/material";
import { networkRequest } from "../../utils/network_request";
import { apiGeneral } from "../../utils/urls";

const TaskSubmission = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [submittedFile, setSubmittedFile] = useState(null);
  const [previousSubmissions, setPreviousSubmissions] = useState([]);

  useEffect(() => {
    getPreviousSubmittedFiles();
    setTimeout(() => {}, 5000);
  }, []);

  const getPreviousSubmittedFiles = async () => {
    await networkRequest(
      apiGeneral.submissions,
      (response) => {
        console.log(response);
        console.log("Previous submissions:", response.data);
        setPreviousSubmissions(response.data);
      },
      "get"
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", taskTitle);
    formData.append("description", taskDescription);
    formData.append("file", submittedFile);

    await networkRequest(
      apiGeneral.taskSubmission,
      (response) => {
        alert(response.message);
        getPreviousSubmittedFiles();
      },
      "post",
      formData,
      true
    );
  };

  const handlePdfOpen = (file) => {
    window.open(`${apiGeneral.files}${file}`, "_blank", "noreferrer");
  };

  return (
    <div className="task-submission-container">
      <form className="task-submission-form" onSubmit={handleSubmit}>
        <h2>Submit Your Task</h2>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Task Title"
          required
        />
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task Description"
          required
        />
        <input
          type="file"
          onChange={(e) => setSubmittedFile(e.target.files[0])}
          required
        />
        <button type="submit">Submit Task</button>
      </form>
      <Divider />
      <div className="previous-submissions">
        <h3>Previous Submissions</h3>
        <div className="submissions-grid">
          {previousSubmissions == null
            ? ""
            : previousSubmissions.map((task) => (
                <div
                  className="submission-item"
                  key={task._id}
                  onClick={() => handlePdfOpen(task.file)}
                >
                  <div className="submission-preview">
                    {task.contentType?.includes("image") ? (
                      <img
                        src={`/files/${task.filename}`}
                        alt="Preview"
                        className="preview-image"
                      />
                    ) : (
                      <span>📄</span>
                    )}
                  </div>
                  <div className="submission-info">
                    <h4>{task.filename}</h4>
                    <p>{task.title}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default TaskSubmission;
