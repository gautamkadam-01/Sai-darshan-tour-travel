@echo off
setlocal
cd /d "%~dp0"
echo ========================================
echo Sai Darshan Tour ^& Travel - Starting
 echo ========================================

REM Stop only Node processes listening on project ports 5000 and 5173.
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":5000 .*LISTENING"') do taskkill /PID %%P /F >nul 2>&1
for /f "tokens=5" %%P in ('netstat -ano ^| findstr /R /C:":5173 .*LISTENING"') do taskkill /PID %%P /F >nul 2>&1

if not exist "server\node_modules" (
  echo Installing server dependencies...
  cd server
  call npm install
  cd ..
)
if not exist "client\node_modules" (
  echo Installing client dependencies...
  cd client
  call npm install
  cd ..
)

start "Sai Darshan Backend" cmd /k "cd /d "%~dp0server" && npm start"
start "Sai Darshan Frontend" cmd /k "cd /d "%~dp0client" && npm run dev -- --port 5173"

timeout /t 4 /nobreak >nul
start "" http://localhost:5173/
endlocal
