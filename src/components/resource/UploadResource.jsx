import React, { useState } from "react";
import axios from "axios";
import "./UploadResource.css"; // Ensure you have styles for the component

const UploadResource = ({ podId }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("title", selectedFile.name); // Adjust based on your requirements
    formData.append("podId", podId);

    axios
      .post("http://localhost:8000/uploads/resources", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => alert(response.data.message))
      .catch((error) => console.error("Error uploading file:", error));
  };

  return (
    <div className="upload-resource">
      <input type="file" onChange={handleFileChange} className="file-input" />
      <button onClick={handleUpload} className="upload-button">
        Upload
      </button>
    </div>
  );
};

export default UploadResource;
