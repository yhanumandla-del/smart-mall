@echo off
cd /d "%~dp0smartmall-backend"
call mvnw.cmd spring-boot:run
pause
