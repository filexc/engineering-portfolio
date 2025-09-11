export const projects = [
  {
    id: 1,
    title: "Sudoku",
    shortDescription: "A playable Sudoku game written in Python",
    fullDescription: "As the final term project for Carnegie Mellon University's 15-112: Fundamentals of Programming and Computer Science course, I made a sudoku game. Players can select from 5 different levels of board, and the program will load a randomly selected premade board from a list of options. Upon loading a board, the program runs an optimized backtracking algorithm to solve the board, which allows the player to get feedback on if they've inputted incorrect values anywhere. I also added various types of hints that can be provided to the player if requested.",
    flagshipImage: "/images/SudokuHomePage.png",
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
    repository: {
      url: "https://github.com/filexc/112TP-Sudoku",
      platform: "GitHub"
    },
    date: "2024-08"
  },
  {
    id: 2,
    title: "CollectIndex",
    shortDescription: "An iOS app to organize and store information about collections digitally",
    fullDescription: "I spent a semester coming up with an idea for an app, conducting interviews, prototyping, programming it, and released it to the Apple App Store. As such, I wanted to create a product that would streamline the process of storing information about different collections of items, while still leaving it as open-ended and customizable as possible for the user. Most of the process was a lot of trial and error, as I had never worked with Swift before, but I ended up with a result I really liked.",
    flagshipImage: "/images/CollectIndexHome.png",
    media: [
      {
        type: "image",
        src: "/images/CollectIndexCrazy8s.png",
        description: "<strong>Crazy 8s Brainstorming:</strong> To come up with possible solutions for the generated problem, I spent 5 minutes coming up with 8 ideas that could potentially solve the problem, even if some of them weren't realistic."
      },
      {
        type: "image",
        src: "/images/FigmaPrototype.png",
        description: "<strong>Figma Prototype:</strong> I prototyped all the features I had ideally wanted to complete throughout the course of the project to get feedback on all potential features. Based on the feedback I received at this stage, I modified the app's appearance."
      },
      {
        type: "image",
        src: "/images/CollectIndexDeleteItem.png",
        description: "Implementation of Deleting an Item"
      },
      {
        type: "image",
        src: "/images/CreateItem.png",
        description: "Create a new item to be a part of a collection"
      }
    ],
    skills: [
      {
        name: "Swift",
        description: "iOS programming language used to build the app"
      },
      {
        name: "SwiftUI",
        description: "Declarative UI framework for creating responsive iOS interfaces"
      },
      {
        name: "Figma",
        description: "Used for planning UX/UI design, wireframing, and creating an interactive prototype"
      },
      {
        name: "XCode",
        description: "Apple's development environment. Learned how to simulate the app and send a demo to an Apple device"
      },
      {
        name: "User Research",
        description: "Conducted interviews and user testing to understand collection management needs"
      },
      {
        name: "App Store Publishing",
        description: "Successfully published the app to the Apple App Store following submission guidelines"
      }
    ],
    repository: {
      url: "https://github.com/filexc/CollectIndex",
      platform: "GitHub"
    },
    appStore: {
      url: "https://apps.apple.com/lv/app/collectindex/id6738508694",
      platform: "App Store"
    },
    date: "Fall 2024"
  },
  {
    id: 3,
    title: "Library Database Website",
    shortDescription: "A filtering system for the school library's databases",
    fullDescription: "This is currently my main technical project, so updates are still being made to the appearance of this site. The goal of the project was to create a website for the larger Casti community to use that would allow them to more easily filter through our databases while still being able to access all 250+ of them, rather than a subset. This was the first project where I was aided by AI in any level of programming, as I had no background in web development. Users can filter the databases by tags, providers, or the letter it starts with.",
    flagshipImage: "/images/DatabaseSite1.png",
    media: [
      {
        type: "image",
        src: "/images/PrimaryTagLetter.png",
        description: "<strong>Filtering by Primary Tag and Letter</strong>"
      },
      {
        type: "image",
        src: "/images/SecondaryTag.png",
        description: "Filtering by Secondary Tag"
      },
      {
        type: "image",
        src: "/images/Provider.png",
        description: "Filtering by Provider"
      }
    ],
    skills: [
      {
        name: "JavaScript",
        description: "Used for interactive functionality, data filtering, and dynamic content rendering on the library database website"
      },
      {
        name: "HTML",
        description: "Created semantic markup structure for the database filtering interface and accessibility compliance"
      },
      {
        name: "CSS",
        description: "Designed responsive layout and styling for the library database website with modern UI/UX principles"
      },
      {
        name: "React",
        description: "Built component-based architecture for the filtering system, state management, and dynamic database display"
      },
      {
        name: "Programming with AI",
        description: "Leveraged AI assistance for web development learning and implementation, marking first experience with AI-aided programming"
      }
    ],
    repository: {
      url: "https://github.com/filexc/Database_Project",
      platform: "GitHub"
    },
    website: {
      url: "https://filexc.github.io/Database_Project/",
      platform: "Live Site"
    },
    date: "2025"
  } //,
  // {
  //   id: 4,
  //   title: "University Course Management System",
  //   shortDescription: "A C++ program that manages student and course data for a university",
  //   fullDescription: "As the final project for my CIS 278 C++ Programming course, I developed a console-based University Course Management System. The program is built to manage student and course records, handle enrollment and drops, and provide administrative tools. I applied object-oriented programming to create a modular and reusable system, with key features including student and course management, enrollment operations with a waitlist, and activity logging. The project required me to utilize multiple Standard Template Library (STL) containers, such as `map` for registries, `set` for preventing duplicate enrollments, `queue` for waitlists, and `deque` for activity logs, to ensure the program was both efficient and well-structured.",
  //   flagshipImage: "/images/placeholder.jpg",
  //   media: [
  //     {
  //       type: "image",
  //       src: "/images/placeholder.jpg",
  //       description: "Project 4 Screenshot 1"
  //     },
  //     {
  //       type: "image",
  //       src: "/images/placeholder.jpg",
  //       description: "Project 4 Screenshot 2"
  //     },
  //     {
  //       type: "image",
  //       src: "/images/placeholder.jpg",
  //       description: "Project 4 Screenshot 3"
  //     }
  //   ],
  //   skills: [
  //     {
  //       name: "C++",
  //       description: "Used C++ (C++17) to implement the entire system"
  //     },
  //     {
  //       name: "OOP",
  //       description: "Broke the program into 3 distinct classes (Student, Course, University System) to manage the data effectively"
  //     },
  //     {
  //       name: "STL",
  //       description: "Skill Description"
  //     },
  //     {
  //       name: "System Design",
  //       description: "Skill Description"
  //     },
  //     {
  //       name: "Code Documentation",
  //       description: "Skill Description"
  //     }
  //   ],
  //   repository: {
  //     url: "https://github.com/filexc/University-Course-Management-System",
  //     platform: "GitHub"
  //   },
  //   date: "2025-08-01"
  // }
];

export const getFeaturedProjects = () => {
  // Sort projects by date (newest first) and return the first 3
  return projects
    .sort((a, b) => {
      // Handle season dates by converting them to sortable format
      const getSortableDate = (dateStr) => {
        if (dateStr.includes('Spring') || dateStr.includes('Summer') || 
            dateStr.includes('Fall') || dateStr.includes('Winter') ||
            dateStr.includes('Autumn')) {
          // Convert seasons to sortable dates
          const [season, year] = dateStr.split(' ');
          const seasonMap = {
            'Spring': '03', 'Summer': '06', 'Fall': '09', 'Autumn': '09', 'Winter': '12'
          };
          return new Date(`${year}-${seasonMap[season]}-01`);
        }
        return new Date(dateStr);
      };
      
      return getSortableDate(b.date) - getSortableDate(a.date);
    })
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
  // Check if it's a season format (e.g., "Spring 2024", "Fall 2023")
  if (dateString.includes('Spring') || dateString.includes('Summer') || 
      dateString.includes('Fall') || dateString.includes('Winter') ||
      dateString.includes('Autumn')) {
    return dateString; // Return season format as-is
  }

  // Check if the original string had a day component
  const hasDay = dateString.includes('-') && dateString.split('-').length === 3;

  if (hasDay) {
    // Format with day: "January 15, 2024"
    // Parse year, month, and day directly to avoid timezone issues
    const [year, month, day] = dateString.split('-');
    const monthIndex = parseInt(month) - 1; // Month is 0-indexed in Date constructor
    
    const date = new Date(parseInt(year), monthIndex, parseInt(day));
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
