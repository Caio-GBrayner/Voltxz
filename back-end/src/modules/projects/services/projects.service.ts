import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from '../dto/create-project.dto';
import { UpdateProjectDto } from '../dto/update-project.dto';
import { v4 as uuid } from 'uuid';

interface Project {
  id: string;
  created_at: Date;
  land: string;
  company_Id: string;
  power_kw: number;
  cost: number;
  estimated_return: number;
  status: "pending_approval" | "active" | "completed";
  title: string;
  description: string;
  area: number;
}

@Injectable()
export class ProjectsService {
  private projects: Project[] = [];

  create(dto: CreateProjectDto): Project {
    const project: Project = {
      id: uuid(),
      ...dto,
      created_at: new Date(),
    };
    this.projects.push(project);
    return project;
  }

  findAll(): Project[] {
    return this.projects;
  }

  findOne(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }

  update(id: string, dto: UpdateProjectDto): Project | null {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) return null;
    this.projects[index] = { ...this.projects[index], ...dto };
    return this.projects[index];
  }

  remove(id: string): { deleted: boolean } {
    this.projects = this.projects.filter(p => p.id !== id);
    return { deleted: true };
  }
}
