export const projects = [
  {
    id: 1,
    title: "Project 1",
    shortDescription: "Project 1 Short Description",
    fullDescription: "Project 1 Long Description",
    flagshipImage: "/images/placeholder.jpg",
    images: [
      {
        src: "/images/placeholder.jpg",
        description: "Image 1 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 2 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 3 Description"
      }
    ],
    skills: ["Skill", "Skill", "Skill", "Skill"],
    date: "2024-01-15"
  },
  {
    id: 2,
    title: "Project 2",
    shortDescription: "Project 2 Short Description",
    fullDescription: "Project 2 Long Description",
    flagshipImage: "/images/placeholder.jpg",
    images: [
      {
        src: "/images/placeholder.jpg",
        description: "Image 1 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 2 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 3 Description"
      }
    ],
    skills: ["Skill", "Skill", "Skill", "Skill"],
    date: "2023-12-10"
  },
  {
    id: 3,
    title: "Project 3",
    shortDescription: "Project 3 Short Description",
    fullDescription: "Project 3 Long Description",
    flagshipImage: "/images/placeholder.jpg",
    images: [
      {
        src: "/images/placeholder.jpg",
        description: "Image 1 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 2 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 3 Description"
      }
    ],
    skills: ["Skill", "Skill", "Skill", "Skill"],
    date: "2023-08-20"
  },
  {
    id: 4,
    title: "Project 4",
    shortDescription: "Project 4 Short Description",
    fullDescription: "Project 4 Long Description",
    flagshipImage: "/images/placeholder.jpg",
    images: [
      {
        src: "/images/placeholder.jpg",
        description: "Image 1 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 2 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 3 Description"
      }
    ],
    skills: ["Skill", "Skill", "Skill", "Skill"],
    date: "2023-06-15"
  },
  {
    id: 5,
    title: "Project 5",
    shortDescription: "Project 5 Short Description",
    fullDescription: "Project 5 Long Description",
    flagshipImage: "/images/placeholder.jpg",
    images: [
      {
        src: "/images/placeholder.jpg",
        description: "Image 1 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 2 Description"
      },
      {
        src: "/images/placeholder.jpg",
        description: "Image 3 Description"
      }
    ],
    skills: ["Skill", "Skill", "Skill", "Skill"],
    date: "2023-04-05"
  }
];

export const getFeaturedProjects = () => {
  // Sort projects by date (newest first) and return the first 3
  return projects
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
};

export const getArchivedProjects = () => {
  return projects; // Return all projects for the archive
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

// Helper function to check if a project is featured (in the top 3 newest)
export const isProjectFeatured = (projectId) => {
  const featuredIds = getFeaturedProjects().map(p => p.id);
  return featuredIds.includes(projectId);
};
