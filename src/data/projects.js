export const projects = [
  {
    id: 1,
    title: "Sudoku",
    shortDescription: "A playable Sudoku game written in Python",
    fullDescription: "As the final term project for Carnegie Mellon University's 15-112: Fundamentals of Programming and Computer Science course, I made a sudoku game. Players can select from 5 different levels of board, and the program will load a randomly selected premade board from a list of options. Upon loading a board, the program runs an optimized backtracking algorithm to solve the board, which allows the player to get feedback on if they've inputted incorrect values anywhere. I also added various types of hints that can be provided to the player if requested.",
    flagshipImage: "/images/SudokuHomePage.png",
    skills: [
      {
        name: "Python",
        description: "Programming language used for project implementation"
      },
      {
        name: "Backtracking Algorithm",
        description: "Optimized algorithm to solve Sudoku puzzles by filling in the cell with the fewest number of legal values first to run as quickly as possible"
      },
      {
        name: "Game Development",
        description: "Created interactive game interface with multiple difficulty levels"
      },
      {
        name: "Data Structures",
        description: "Implemented efficient board representation and state management"
      },
      {
        name: "Hint Providing",
        description: "When a cell ony has one legal value remaining, the hint points to that cell, otherwise it highlights obvious groups of the same numbers to be eliminated from the options of others"
      }
    ],
    media: [
      {
        type: "image",
        src: "/images/BacktrackerCode.png",
        description: "The backtracker algorithm implementation in code. Other functions are referenced, but the names indicate what those do."
      },
      {
        type: "image",
        src: "/images/BlockHint.png",
        description: "Runtime indication of a requested hint. This shows a hint that is telling the user that the darker cell has a legal value that's the only one in the given block."
      },
              {
          type: "video",
          src: "https://www.youtube.com/embed/sVqf93bNh4U",
          description: "Gameplay demo showing the Sudoku interface and solving features. This demonstrates all the features except for the more complex hints, as that feature was added later."
        }
    ],
    repository: {
      url: "https://github.com/filexc/112TP-Sudoku",
      platform: "GitHub"
    },
    date: "2024-08"
  },
  {
    id: 2,
    title: "Project 2",
    shortDescription: "Project 2 Short Description",
    fullDescription: "Project 2 Long Description",
    flagshipImage: "/images/placeholder.jpg",
    skills: ["Skill", "Skill", "Skill", "Skill"],
    media: [
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 2 Screenshot 1"
      },
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 2 Screenshot 2"
      },
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 2 Screenshot 3"
      }
    ],
    date: "2023-12-10"
  },
  {
    id: 3,
    title: "Project 3",
    shortDescription: "Project 3 Short Description",
    fullDescription: "Project 3 Long Description",
    flagshipImage: "/images/placeholder.jpg",
    skills: ["Skill", "Skill", "Skill", "Skill"],
    media: [
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 3 Screenshot 1"
      },
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 3 Screenshot 2"
      },
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 3 Screenshot 3"
      }
    ],
    date: "2023-08"
  },
  {
    id: 4,
    title: "Project 4",
    shortDescription: "Project 4 Short Description",
    fullDescription: "Project 4 Long Description",
    flagshipImage: "/images/placeholder.jpg",
    skills: ["Skill", "Skill", "Skill", "Skill"],
    media: [
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 4 Screenshot 1"
      },
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 4 Screenshot 2"
      },
      {
        type: "image",
        src: "/images/placeholder.jpg",
        description: "Project 4 Screenshot 3"
      }
    ],
    date: "2023-06-15"
  } //,
  // {
  //   id: 5,
  //   title: "Project 5",
  //   shortDescription: "Project 5 Short Description",
  //   fullDescription: "Project 5 Long Description",
  //   flagshipImage: "/images/placeholder.jpg",
  //   images: [
  //     {
  //       src: "/images/placeholder.jpg",
  //       description: "Image 1 Description"
  //     },
  //     {
  //       src: "/images/placeholder.jpg",
  //       description: "Image 2 Description"
  //     },
  //     {
  //       src: "/images/placeholder.jpg",
  //       description: "Image 3 Description"
  //     }
  //   ],
  //   skills: ["Skill", "Skill", "Skill", "Skill"],
  //   date: "2023-04-05"
  // }
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

// Utility function to format dates intelligently
export const formatProjectDate = (dateString) => {
  // Check if the original string had a day component
  const hasDay = dateString.includes('-') && dateString.split('-').length === 3;

  if (hasDay) {
    // Format with day: "January 15, 2024"
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return dateString; // Return original string if invalid
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } else {
    // Format without day: "January 2024"
    // Parse year and month directly to avoid timezone issues
    const [year, month] = dateString.split('-');
    const monthIndex = parseInt(month) - 1; // Month is 0-indexed in Date constructor

    const date = new Date(parseInt(year), monthIndex, 1);
    if (isNaN(date.getTime())) {
      return dateString; // Return original string if invalid
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  }
};
