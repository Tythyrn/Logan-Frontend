export type Navigation = {
    name: string;
    projects: ProjectUrl[];
}

type ProjectUrl = {
    projectUrl: string;
    projectName: string;
}