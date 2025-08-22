const fs = require('fs');
const path = require('path');

// Create a simple HTML file that will generate placeholder images
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Generate Placeholder Images</title>
</head>
<body>
    <canvas id="canvas" width="400" height="300" style="border: 1px solid #ccc; margin: 10px;"></canvas>
    <br>
    <button onclick="generateImage('CAD Project', '#667eea')">CAD Project</button>
    <button onclick="generateImage('Car Repair', '#764ba2')">Car Repair</button>
    <button onclick="generateImage('Robotics', '#f093fb')">Robotics</button>
    <button onclick="generateImage('Weather Station', '#4facfe')">Weather Station</button>
    <button onclick="generateImage('Woodworking', '#43e97b')">Woodworking</button>
    <br><br>
    <div id="downloads"></div>

    <script>
        function generateImage(title, color) {
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
            
            // Clear canvas
            ctx.fillStyle = '#f8f9fa';
            ctx.fillRect(0, 0, 400, 300);
            
            // Add gradient background
            const gradient = ctx.createLinearGradient(0, 0, 400, 300);
            gradient.addColorStop(0, color);
            gradient.addColorStop(1, color + '80');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 400, 300);
            
            // Add title
            ctx.fillStyle = 'white';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(title, 200, 150);
            
            // Add subtitle
            ctx.font = '16px Arial';
            ctx.fillText('Project Image', 200, 180);
            
            // Add decorative elements
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(350, 50);
            ctx.moveTo(50, 250);
            ctx.lineTo(350, 250);
            ctx.stroke();
            
            // Create download link
            const link = document.createElement('a');
            link.download = title.toLowerCase().replace(' ', '-') + '-project.jpg';
            link.href = canvas.toDataURL('image/jpeg', 0.8);
            link.textContent = 'Download ' + title + ' Image';
            link.style.display = 'block';
            link.style.margin = '10px';
            link.style.padding = '10px';
            link.style.backgroundColor = '#007bff';
            link.style.color = 'white';
            link.style.textDecoration = 'none';
            link.style.borderRadius = '5px';
            
            document.getElementById('downloads').appendChild(link);
        }
    </script>
</body>
</html>
`;

// Write the HTML file
fs.writeFileSync('placeholder-generator.html', htmlContent);

console.log('Placeholder image generator created!');
console.log('Open placeholder-generator.html in your browser to generate images.');
console.log('Download the images and place them in public/images/ with the following names:');
console.log('- cad-project.jpg');
console.log('- car-project.jpg');
console.log('- robotics-project.jpg');
console.log('- weather-project.jpg');
console.log('- woodworking-project.jpg');
console.log('- cad-workstation.jpg');
console.log('- cad-progress.jpg');
console.log('- cad-final.jpg');
console.log('- car-diagnosis.jpg');
console.log('- car-brakes.jpg');
console.log('- car-complete.jpg');
console.log('- robotics-code.jpg');
console.log('- robotics-testing.jpg');
console.log('- robotics-competition.jpg');
console.log('- weather-circuit.jpg');
console.log('- weather-enclosure.jpg');
console.log('- weather-data.jpg');
console.log('- woodworking-design.jpg');
console.log('- woodworking-construction.jpg');
console.log('- woodworking-finished.jpg');
