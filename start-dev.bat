@echo off
echo Starting Lingo Dingo development server for Windows...
echo.
echo Setting up environment...
set NODE_ENV=development
set FORCE_COLOR=1

echo.
echo Installing dependencies if needed...
npm install --silent

echo.
echo Starting server on http://localhost:5000
echo Press Ctrl+C to stop the server
echo.
npx tsx server/index.ts