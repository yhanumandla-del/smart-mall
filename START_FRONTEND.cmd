@echo off
cd /d "%~dp0smartmall-frontend"
call npm install
call npm run dev
pause
