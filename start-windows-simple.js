// Simple Windows startup script - no config modifications
import { spawn } from 'child_process';

console.log('Starting Lingo Dingo Development Server...\n');

// Set environment variables for this process
process.env.NODE_ENV = 'development';

console.log('Installing dependencies...');

// Install dependencies
const install = spawn('npm', ['install'], { 
  stdio: 'inherit', 
  shell: true
});

install.on('close', (code) => {
  if (code === 0) {
    console.log('\nStarting server on http://localhost:5000');
    console.log('Press Ctrl+C to stop\n');
    
    // Start server with environment variable
    const server = spawn('npx', ['tsx', 'server/index.ts'], { 
      stdio: 'inherit', 
      shell: true,
      env: { 
        ...process.env,
        NODE_ENV: 'development'
      }
    });
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\nShutting down...');
      server.kill();
      process.exit(0);
    });
    
  } else {
    console.error('npm install failed');
    process.exit(1);
  }
});