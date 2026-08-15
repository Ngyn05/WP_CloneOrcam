# ==========================================
# OrCam Theme - Cache Cleaner PowerShell Script
# ==========================================

$CacheDir = "c:\Users\hnguy\Local Sites\orcam\app\public\wp-content\cache\orcam_static"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "     OrCam Theme Cache Cleaner" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

if (Test-Path $CacheDir) {
    $files = Get-ChildItem -Path $CacheDir -File
    $count = $files.Count
    $totalBytes = 0
    
    foreach ($file in $files) {
        $totalBytes += $file.Length
        Remove-Item $file.FullName -Force
    }
    
    $totalKB = [math]::Round($totalBytes / 1KB, 2)
    
    Write-Host "Cache directory: $CacheDir" -ForegroundColor DarkGray
    Write-Host "Deleted: $count files ($totalKB KB)" -ForegroundColor Green
    Write-Host "Cache cleared completely!" -ForegroundColor Green
} else {
    Write-Host "Cache directory does not exist or is already empty." -ForegroundColor Yellow
}

Write-Host "`nReady! Please refresh your browser now (Ctrl + F5)." -ForegroundColor White
