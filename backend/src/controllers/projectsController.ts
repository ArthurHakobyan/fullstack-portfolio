import { Request, Response } from "express";

// GET /projects
export const getProjects = (req: Request, res: Response) => {
  const projects = [
    { id: 1, title: "Portfolio Project", description: "My first portfolio project" },
    { id: 2, title: "Blog App", description: "A simple blog app" }
  ];

  res.json(projects);
};

// POST /projects
export const createProject = (req: Request, res: Response) => {
  const { title, description } = req.body as { title?: string; description?: string };

  if (!title || !description) {
    return res.status(400).json({ error: "Title and description required" });
  }

  const newProject = { id: Date.now(), title, description };
  res.status(201).json(newProject);
};
