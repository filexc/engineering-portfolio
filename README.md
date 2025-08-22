# Engineering Portfolio

A modern, responsive digital portfolio built with React to showcase engineering projects and technical skills.

## Features

- **Home Page**: Displays the three most recent featured projects
- **Archive Page**: Shows all older projects with skill tags
- **Individual Project Pages**: Detailed view of each project with image galleries
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations

## Structure

The portfolio follows the structure you requested:

1. **Main Page (Home)**: Shows the three most recent projects with flagship images
2. **Archive Page**: Contains all older projects with links to individual pages
3. **Individual Project Pages**: Detailed view of each project with:
   - Project overview and description
   - Skills and technologies used
   - Image gallery with descriptions
   - Navigation back to home/archive

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd engineering-portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Adding Your Images

1. Open `placeholder-generator.html` in your web browser
2. Click the buttons to generate placeholder images for each project
3. Download the generated images
4. Place them in the `public/images/` directory with the correct filenames

### Customizing Your Projects

Edit `src/data/projects.js` to customize your projects:

- Update project titles, descriptions, and dates
- Add your own images (place them in `public/images/`)
- Modify skills and technologies
- Set which projects are featured (shown on home page)

### Running the Portfolio

```bash
npm start
```

The portfolio will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates a `build` folder with your production-ready portfolio.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Nav.js             # Site title and branding
│   ├── Home.js            # Home page with featured projects
│   ├── Archive.js         # Archive page with all projects
│   ├── ProjectDetail.js   # Individual project pages
│   └── *.css              # Component-specific styles
├── data/
│   └── projects.js        # Project data and helper functions
├── App.js                 # Main app with routing
└── App.css               # Global styles
```

## Customization Guide

### Adding New Projects

1. Add a new project object to the `projects` array in `src/data/projects.js`
2. Include all required fields:
   - `id`: Unique identifier
   - `title`: Project title
   - `shortDescription`: Brief description for cards
   - `fullDescription`: Detailed description for project pages
   - `flagshipImage`: Main project image path
   - `images`: Array of project images with descriptions
   - `skills`: Array of skills/technologies used
   - `date`: Project completion date
   - `featured`: Boolean (true for home page, false for archive)

### Styling

- Global styles are in `src/App.css`
- Component-specific styles are in their respective `.css` files
- The design uses a purple gradient theme that can be easily customized
- All components are responsive and mobile-friendly

### Deployment

You can deploy this portfolio to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Example Project Structure

Each project includes:
- **Flagship Image**: Main project image displayed on cards
- **Project Overview**: Detailed description of the work
- **Skills & Technologies**: Tags showing what was learned
- **Image Gallery**: Multiple images showing the process and results
- **Navigation**: Easy access to other projects

## License

This project is open source and available under the MIT License.
