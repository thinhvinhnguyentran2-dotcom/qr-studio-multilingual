@echo off
setlocal EnableExtensions
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo ===============================================
echo   QR Studio v1.3.0 - Cap nhat GitHub
ECHO ===============================================
echo.

where git >nul 2>&1
if errorlevel 1 (
  echo [LOI] Khong tim thay Git trong PATH.
  pause
  exit /b 1
)

if not exist ".git\" (
  echo [LOI] Thu muc nay chua co .git.
  echo Hay chep cac file cua ban nang cap vao thu muc repository hien tai,
  echo khong xoa thu muc .git, sau do chay lai file nay.
  pause
  exit /b 1
)

echo [1/4] Kiem tra thay doi...
git status --short

echo.
echo [2/4] Them toan bo file...
git add -A

git diff --cached --quiet
if not errorlevel 1 (
  echo Khong co thay doi moi de commit.
) else (
  echo.
  echo [3/4] Tao commit...
  git commit -m "Release QR Studio v1.3.0 full mobile install and usage policy"
  if errorlevel 1 (
    echo [LOI] Tao commit that bai.
    pause
    exit /b 1
  )
)

echo.
echo [4/4] Day len GitHub...
git push origin main
if errorlevel 1 (
  echo [LOI] Git push that bai.
  pause
  exit /b 1
)

echo.
echo ===============================================
echo   CAP NHAT THANH CONG
ECHO ===============================================
echo.
where gh >nul 2>&1
if not errorlevel 1 gh run list --workflow deploy-pages.yml --limit 3

echo.
echo Website:
echo https://thinhvinhnguyentran2-dotcom.github.io/qr-studio-multilingual/
echo.
pause
endlocal
