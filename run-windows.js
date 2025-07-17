// Windows-compatible startup script for Lingo Dingo website
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🐕 Starting Lingo Dingo Development Server for Windows...\n');

// Set environment variables
process.env.NODE_ENV = 'development';
process.env.FORCE_COLOR = '1';

console.log('📦 Installing dependencies...');

// Install dependencies first
const install = spawn('npm', ['install'], { 
  stdio: 'inherit', 
  shell: true,
  cwd: __dirname 
});

install.on('close', (code) => {
  if (code === 0) {
    console.log('\n🚀 Starting development server...');
    console.log('🌐 Server will be available at: http://localhost:5000');
    console.log('⏹️  Press Ctrl+C to stop the server\n');
    
    // Start the development server
    const server = spawn('npx', ['tsx', 'server/index.ts'], { 
      stdio: 'inherit', 
      shell: true,
      cwd: __dirname,
      env: { ...process.env }
    });
    
    server.on('close', (code) => {
      console.log(`\n📴 Server stopped with code ${code}`);
    });
    
    server.on('error', (err) => {
      console.error('❌ Error starting server:', err.message);
      console.log('\n🔧 Try running these commands manually:');
      console.log('   npm install');
      console.log('   set NODE_ENV=development');
      console.log('   npx tsx server/index.ts');
    });
    
  } else {
    console.error('❌ Failed to install dependencies');
    process.exit(1);
  }
});

install.on('error', (err) => {
  console.error('❌ Error installing dependencies:', err.message);
  console.log('\n🔧 Please install Node.js and npm first, then try again.');
  process.exit(1);
});