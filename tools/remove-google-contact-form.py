"""Remove the exported Google Form endpoint from the contact page."""

from pathlib import Path

path = Path(__file__).resolve().parents[1] / "static-pages/vi/contact-us.html"
document = path.read_text(encoding="utf-8")
document = document.replace(
    "https://docs.google.com/forms/d/e/1FAIpQLSdrFRPItRmwcc6hY_1LjJbBE6KzIWl3WKtrqrfi-MgtRUKZ_w/viewform?embedded=true",
    "about:blank#orcam-contact-form-replaced",
)
path.write_text(document, encoding="utf-8", newline="")
print("removed Google Form endpoint from", path)
