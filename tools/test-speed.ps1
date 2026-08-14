$urls = @(
    'http://orcam.local/',
    'http://orcam.local/vi/home/',
    'http://orcam.local/vi/orcam-myeye-3-pro/',
    'http://orcam.local/vi/orcam-myeye-2-pro/',
    'http://orcam.local/vi/orcam-read-5/',
    'http://orcam.local/vi/orcam-read-3/',
    'http://orcam.local/vi/orcam-read/',
    'http://orcam.local/vi/low-vision/',
    'http://orcam.local/vi/orcam-learn/',
    'http://orcam.local/vi/blog/',
    'http://orcam.local/vi/shop/',
    'http://orcam.local/vi/checkout/'
)

Write-Output "Testing page loading times:"
foreach ($u in $urls) {
    $sw = [System.Diagnostics.Stopwatch]::StartNew()
    try {
        $res = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 10
        $sw.Stop()
        $cache = $res.Headers['X-OrCam-Cache']
        if (-not $cache) { $cache = 'NONE' }
        Write-Output "$u -> $($res.StatusCode) in $($sw.ElapsedMilliseconds) ms [Cache: $cache]"
    } catch {
        Write-Output "$u -> Error: $($_.Exception.Message)"
    }
}
