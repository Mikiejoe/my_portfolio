import { useState, useEffect } from "react";

const useProjects = (url) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(
            "https://portfolio-backend-sigma-three.vercel.app/api/projects/"
          );
          if (!response.ok) setError("Failed to load projects.");
          const data = await response.json();
          console.log("data",data)
          setProjects(data);
        } catch (error) {
          console.error("Failed to fetch projects:", error);
          setError("Failed to load projects.");
        } finally {
          setLoading(false);
        }
      };

    getProjects();
  }, [url]);

  return { projects, loading, error };
};

export default useProjects;