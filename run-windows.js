// Windows-compatible startup script for Lingo Dingo website
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting Lingo Dingo Development Server for Windows...\n');

// Set environment variables
process.env.NODE_ENV = 'development';
process.env.FORCE_COLOR = '1';

// Check if we need to use the Windows-compatible vite config
const windowsViteConfig = path.join(__dirname, 'vite.config.windows.ts');
const originalViteConfig = path.join(__dirname, 'vite.config.ts');

if (fs.existsSync(windowsViteConfig)) {
  // Temporarily use Windows config
  const tempConfig = path.join(__dirname, 'vite.config.temp.ts');
  if (fs.existsSync(originalViteConfig)) {
    fs.renameSync(originalViteConfig, tempConfig);
  }
  fs.copyFileSync(windowsViteConfig, originalViteConfig);
  
  console.log('Using Windows-compatible configuration...');
}

console.log('Installing dependencies...');

// Install dependencies first
const install = spawn('npm', ['install'], { 
  stdio: 'inherit', 
  shell: true,
  cwd: __dirname 
});

install.on('close', (code) => {
  if (code === 0) {
    console.log('\nStarting development server...');
    console.log('Server will be available at: http://localhost:5000');
    console.log('Press Ctrl+C to stop the server\n');
    
    // Start the development server
    const server = spawn('npx', ['tsx', 'server/index.ts'], { 
      stdio: 'inherit', 
      shell: true,
      cwd: __dirname,
      env: { ...process.env }
    });
    
    server.on('close', (code) => {
      console.log(`\nServer stopped with code ${code}`);
      
      // Restore original vite config if we modified it
      const tempConfig = path.join(__dirname, 'vite.config.temp.ts');
      if (fs.existsSync(tempConfig)) {
        fs.renameSync(tempConfig, originalViteConfig);
        console.log('Restored original configuration');
      }
    });
    
    server.on('error', (err) => {
      console.error('Error starting server:', err.message);
      console.log('\nTry running these commands manually:');
      console.log('   npm install');
      console.log('   set NODE_ENV=development');
      console.log('   npx tsx server/index.ts');
    });
    
    // Handle Ctrl+C gracefully
    process.on('SIGINT', () => {
      console.log('\nShutting down server...');
      server.kill('SIGINT');
    });
    
  } else {
    console.error('Failed to install dependencies');
    process.exit(1);
  }
});

install.on('error', (err) => {
  console.error('Error installing dependencies:', err.message);
  console.log('\nPlease install Node.js and npm first, then try again.');
  process.exit(1);
});