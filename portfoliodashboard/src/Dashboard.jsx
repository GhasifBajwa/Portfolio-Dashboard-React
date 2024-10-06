import { useState } from "react";
import { PlusCircle, Trash2 } from "lucide-react";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const project = {
      ...newProject,
      id: Date.now().toString(),
    };
    setProjects((prev) => [...prev, project]);
    setNewProject({ title: "", description: "", imageUrl: "" });
  };

  const handleDelete = (id) => {
    setProjects((prev) => prev.filter((project) => project.id !== id));
  };

  return (
    <div className="container-fluid my-4">
      <h1 className="mb-4">Portfolio Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5>Add New Project</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="file"
                    name="imageUrl"
                    className="form-control"
                    placeholder="Image URL"
                    value={newProject.imageUrl}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="btn">
                  <PlusCircle className="me-2" /> Add Project
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">
              <h5>Project List</h5>
            </div>
            <div className="card-body" style={{ minHeight: "257px" }}>
              <ul className="list-group">
                {projects.map((project) => (
                  <li
                    key={project.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span>{project.title}</span>
                    <button
                      className="btn btn-sm"
                      onClick={() => handleDelete(project.id)}
                    >
                      <Trash2 />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
