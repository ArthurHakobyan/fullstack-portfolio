import { pool } from "../db";
import { Project } from "../types/projects";

export const getAllProjects = async (): Promise<Project[]> => {
  const result = await pool.query(
    "SELECT id, title, description FROM projects ORDER BY id DESC"
  );
  return result.rows;
};

export const createProject = async (
  title: string,
  description: string
): Promise<Project> => {
  const result = await pool.query(
    "INSERT INTO projects (title, description) VALUES ($1, $2) RETURNING id, title, description",
    [title, description]
  );
  return result.rows[0];
};
