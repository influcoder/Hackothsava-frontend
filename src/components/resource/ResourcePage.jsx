import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UploadResource from "./UploadResource";
import "./ResourcePage.css"; // Ensure this file exists and is styled properly
import { useLocation } from "react-router-dom";

const ResourcePage = () => {
  const location = useLocation();
  const podId = location.state?.podId;
  const podName = location.state?.podName;
  const [refreshKey, setRefreshKey] = useState(0); // Key to force re-render

  const handleUploadSuccess = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Increment key to force refresh
  };

  return (
    <div className="resource-page">
      <h1>Resources for Pod : {podName}</h1>
      <div className="resource-page-content">
        {podId ? (
          <>
            <div className="upload-resource">
              <UploadResource
                podId={podId}
                onUploadSuccess={handleUploadSuccess}
              />
            </div>
            <div className="resource-list">
              <ResourceList key={refreshKey} podId={podId} />
            </div>
          </>
        ) : (
          <p>Pod ID not available.</p>
        )}
      </div>
    </div>
  );
};

export default ResourcePage;
