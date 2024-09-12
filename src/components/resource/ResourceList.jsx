import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ResourceList.css"; // Import the CSS file for styling
import { FaFile, FaFileVideo, FaLink } from "react-icons/fa"; // Using react-icons for better icons
import { apiGeneral } from "../../utils/urls"; // Adjust the path as necessary

const ResourceList = ({ podId }) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.get(`${apiGeneral.userPods}${podId}`); // Fetch resources using apiGeneral
        setResources(response.data.resources);
      } catch (error) {
        setError("Error fetching resources");
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    if (podId) {
      fetchResources();
    }
  }, [podId]);

  if (loading) return <p>Loading resources...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="resource-grid">
      {resources.length > 0 ? (
        resources.map((resource) => (
          <div className="resource-card" key={resource._id}>
            <div className="resource-icon">
              {/* Use appropriate icons based on resource type */}
              {resource.resource_type === "document" && <FaFile />}
              {resource.resource_type === "video" && <FaFileVideo />}
              {resource.resource_type === "link" && <FaLink />}
            </div>
            <div className="resource-details">
              <h3>{resource.resource_name}</h3>
              <p>{resource.resource_type}</p>
              <a
                href={resource.resource_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resource
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No resources found.</p>
      )}
    </div>
  );
};

export default ResourceList;
