import { Request, Response } from "express";
import { Project } from "../types/projects";

// Temporary in-memory storage
const projects: Project[] = [
  { id: 1, title: "Portfolio Project", description: "My first portfolio project" },
  { id: 2, title: "Blog App", description: "A simple blog app" }
];

// GET /projects
export const getProjects = (req: Request, res: Response) => {
  res.json(projects);
};

// POST /projects
export const createProject = (req: Request, res: Response) => {
  const { title, description } = req.body;

  const newProject: Project = {
    id: projects.length ? projects[projects.length - 1].id + 1 : 1,
    title,
    description
  };

  projects.push(newProject);
  res.status(201).json(newProject);
};
