interface Project {
    id: number,
    name: string,
    description: string,
    skills: string[],
    thumbnailPath?: string,
    projectURL?: string,
    githubURL?: string
}

interface WorkExperience {
    order: number,
    date: string | string[],
    jobTitle: string,
    company: string,
    companyURL?: string,
    skills: string[],
    description: string
}

interface Skills {
    name: string,
    percentage: number,
    relatedSkills?: string[]
}
  