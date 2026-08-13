@echo off
echo ============================================
echo  Portfolio Frontend Setup Script
echo ============================================
echo.

echo [1/5] Setting npm cache to short path...
npm config set cache C:\nc
echo Done.
echo.

echo [2/5] Cleaning any broken installs...
if exist node_modules (
    echo Removing node_modules...
    rmdir /s /q node_modules
)
if exist package-lock.json (
    del /f package-lock.json
)
echo Done.
echo.

echo [3/5] Installing packages (flat strategy - avoids Windows path limit)...
echo This will take 3-5 minutes. Please wait...
npm install --install-strategy=hoisted --no-audit --no-fund --legacy-peer-deps
echo.

echo [4/5] Verifying next binary...
if exist node_modules\.bin\next.cmd (
    echo SUCCESS: next.cmd found!
) else (
    echo ERROR: next.cmd NOT found. Install may have failed.
    echo Try running: npm install --install-strategy=shallow --no-audit --no-fund
    pause
    exit /b 1
)
echo.

echo [5/5] Starting development server...
echo.
npm run dev
