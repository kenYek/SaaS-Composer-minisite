@echo off

REM 啟動Python伺服器（指定埠號為8989）
start python -m http.server 8989

REM 等待一些時間，確保伺服器已經啟動
timeout /t 2

REM 使用Google Chrome開啟index.html
start http://localhost:8989/index.html

REM 結束批次檔
exit