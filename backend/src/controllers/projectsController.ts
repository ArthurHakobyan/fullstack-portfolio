import { Request, Response } from "express";
import * as repo from "../repositories/projectsRepository";

export const getProjects = async (_req: Request, res: Response) => {
  try {
    const projects = await repo.getAllProjects();
    res.json(projects);
  } catch (error) {
    console.error("GET /projects error:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;

    const project = await repo.createProject(title, description);
    res.status(201).json(project);
  } catch (error) {
    console.error("POST /projects error:", error);
    res.status(500).json({ error: "Failed to create project" });
  }
};
