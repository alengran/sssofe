@echo off
rem One-click sync: virtual host -> this repo -> GitHub Pages
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\sync-from-host.ps1"
pause
