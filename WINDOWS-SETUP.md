# Windows Setup Guide for Lingo Dingo Website

## Quick Start for Windows Users

### Option 1: Use the Batch File (Recommended)
```cmd
# 1. Open Command Prompt or PowerShell
# 2. Navigate to the project folder
cd path\to\lingo-dingo-website

# 3. Run the batch file
start-dev.bat
```

### Option 2: Manual Commands
```cmd
# 1. Install dependencies
npm install

# 2. Set environment and start server
set NODE_ENV=development
npx tsx server/index.ts
```

### Option 3: PowerShell Users
```powershell
# 1. Install dependencies
npm install

# 2. Set environment and start server
$env:NODE_ENV="development"
npx tsx server/index.ts
```

## Common Windows Issues & Solutions

### Issue 1: "'NODE_ENV' is not recognized"
**Solution**: Use `set NODE_ENV=development` instead of `NODE_ENV=development`

### Issue 2: "Module not found" errors
**Solution**: 
```cmd
# Delete node_modules and reinstall
rmdir /s node_modules
npm install
```

### Issue 3: Path resolution issues
**Solution**: Make sure you're in the correct directory:
```cmd
# Check current directory
echo %cd%

# Should end with your project folder name
# If not, navigate to the correct folder:
cd path\to\your\lingo-dingo-website
```

### Issue 4: Port already in use
**Solution**: 
```cmd
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual process ID)
taskkill /PID <process_id> /F
```

## Verifying Setup

After running the development server, you should see:
```
Starting Lingo Dingo development server for Windows...
Setting up environment...
Installing dependencies if needed...
Starting server on http://localhost:5000
[express] serving on port 5000
```

Then open your browser to: http://localhost:5000

## File Structure
```
lingo-dingo-website/
├── client/src/          # React frontend code
├── server/              # Express backend code
├── attached_assets/     # Logo images
├── start-dev.bat       # Windows startup script
├── package.json        # Dependencies
└── README.md           # General documentation
```

## Development Commands

- `start-dev.bat` - Start development server (Windows)
- `npm run check` - Type checking
- `npm run build` - Build for production

## Need Help?

1. Make sure Node.js is installed (version 18+)
2. Make sure npm is working: `npm --version`
3. Check if TypeScript compiler is available: `npx tsc --version`
4. Verify the project structure matches the above

## Browser Requirements

- Chrome, Firefox, Safari, or Edge (latest versions)
- JavaScript enabled
- No additional plugins required