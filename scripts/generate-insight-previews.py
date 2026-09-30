"""Generate Insights card/social preview WebPs and source WebPs for four replacements."""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "public" / "images"
QUALITY = 82
TARGET_W, TARGET_H = 1200, 630
RATIO = TARGET_W / TARGET_H


def crop_to_ratio(im: Image.Image, fx: float, fy: float) -> Image.Image:
    w, h = im.size
    src_ratio = w / h
    if src_ratio > RATIO:
        new_w = h * RATIO
        left = fx * w - new_w / 2
        left = max(0, min(left, w - new_w))
        box = (int(round(left)), 0, int(round(left + new_w)), h)
    else:
        new_h = w / RATIO
        top = fy * h - new_h / 2
        top = max(0, min(top, h - new_h))
        box = (0, int(round(top)), w, int(round(top + new_h)))
    return im.crop(box)


def save_webp(im: Image.Image, dest: Path, *, resize: tuple[int, int] | None) -> None:
    out = im.convert("RGB")
    if resize:
        tw, th = resize
        if out.size != (tw, th):
            out = out.resize((tw, th), Image.Resampling.LANCZOS)
    out.save(dest, "WEBP", quality=QUALITY, method=6, exact=True)


MAX_SOURCE_EDGE = 2560


def convert_source(name: str) -> None:
    src = ROOT / name
    dest = ROOT / src.with_suffix(".webp").name
    with Image.open(src) as im:
        im.load()
        w, h = im.size
        scale = min(1.0, MAX_SOURCE_EDGE / max(w, h))
        size = (int(round(w * scale)), int(round(h * scale))) if scale < 1 else None
        save_webp(im, dest, resize=size)
        print(f"source {dest.name} {size or (w, h)} -> {dest.stat().st_size}")


PREVIEWS: list[tuple[str, str, float, float]] = [
    ("portugal-hqa-visa-preview.webp", "portugal-hqa-visa-highly-qualified-activity.jpg", 0.48, 0.52),
    ("portugal-highly-qualified-activity-visa-preview.webp", "portugal-highly-qualified-activity-visa-overview.jpg", 0.50, 0.55),
    ("portugal-article-90-residence-permit-preview.webp", "portugal-article-90-residence-permit-law.jpg", 0.50, 0.68),
    ("portugal-hqa-visa-requirements-preview.webp", "portugal-hqa-visa-requirements-documents.jpg", 0.50, 0.52),
    ("portugal-hqa-visa-eligibility-preview.webp", "portugal-hqa-visa-eligibility-professional.jpg", 0.50, 0.52),
    ("portugal-hqa-visa-documents-preview.webp", "portugal-hqa-visa-documents-checklist.jpg", 0.50, 0.48),
    ("portugal-hqa-visa-residency-requirements-preview.webp", "portugal-hqa-visa-residency-requirements-apartment.jpg", 0.45, 0.76),
    ("portugal-hqa-visa-application-preview.webp", "portugal-hqa-visa-application.jpg", 0.42, 0.48),
    ("portugal-hqa-visa-processing-time-preview.webp", "portugal-hqa-visa-processing-time-calendar.jpg", 0.50, 0.48),
    ("portugal-hqa-visa-renewal-preview.webp", "portugal-hqa-visa-renewal-office.jpg", 0.50, 0.48),
    ("portugal-hqa-visa-cost-preview.webp", "portugal-hqa-visa-cost-euro-currency.jpg", 0.50, 0.74),
    ("portugal-hqa-visa-investment-preview.webp", "portugal-hqa-visa-investment-meeting.jpg", 0.50, 0.48),
    ("portugal-hqa-visa-tax-preview.webp", "portugal-hqa-visa-tax.jpg", 0.50, 0.58),
    ("portugal-hqa-visa-family-preview.webp", "portugal-hqa-visa-family-together.jpg", 0.50, 0.50),
    ("portugal-hqa-visa-spouse-preview.webp", "portugal-hqa-visa-spouse-couple.jpg", 0.50, 0.48),
    ("portugal-hqa-visa-children-preview.webp", "portugal-hqa-visa-children-family.jpg", 0.50, 0.82),
    ("portugal-hqa-visa-permanent-residency-preview.webp", "portugal-hqa-visa-permanent-residency-home.jpg", 0.52, 0.62),
    ("portugal-hqa-visa-citizenship-preview.webp", "portugal-hqa-visa-citizenship-passport.jpg", 0.50, 0.50),
    ("portugal-research-visa-preview.webp", "portugal-research-visa-laboratory.jpg", 0.50, 0.52),
    ("portugal-hqa-visa-research-project-preview.webp", "portugal-hqa-visa-research-project-lab.jpg", 0.50, 0.50),
    ("portugal-hqa-visa-university-preview.webp", "university-coimbra-courtyard.jpg", 0.50, 0.50),
    ("portugal-hqa-visa-for-americans-preview.webp", "portugal-hqa-visa-for-americans.jpg", 0.50, 0.38),
    ("portugal-hqa-visa-for-h1b-holders-preview.webp", "portugal-hqa-visa-for-h1b-holders.jpg", 0.50, 0.66),
    ("portugal-hqa-visa-lawyer-preview.webp", "portugal-hqa-visa-lawyer-consultation.jpg", 0.48, 0.52),
    ("portugal-hqa-visa-consultant-preview.webp", "portugal-hqa-visa-consultant.jpg", 0.48, 0.55),
    ("portugal-hqa-visa-vs-golden-visa-preview.webp", "portugal-hqa-visa-vs-golden-visa-comparison.jpg", 0.50, 0.45),
    ("portugal-hqa-visa-vs-d7-preview.webp", "portugal-hqa-visa-vs-d7-comparison.jpg", 0.50, 0.50),
    ("portugal-hqa-visa-vs-d2-preview.webp", "portugal-hqa-visa-vs-d2-comparison.jpg", 0.50, 0.42),
    ("portugal-hqa-visa-vs-digital-nomad-visa-preview.webp", "portugal-hqa-visa-vs-digital-nomad-visa-comparison.jpg", 0.50, 0.70),
    ("portugal-hqa-visa-vs-tech-visa-preview.webp", "portugal-hqa-visa-vs-tech-visa-comparison.jpg", 0.50, 0.42),
    ("portugal-hqa-visa-vs-eu-blue-card-preview.webp", "portugal-hqa-visa-vs-eu-blue-card-comparison.jpg", 0.50, 0.45),
]


def main() -> None:
    for name in (
        "portugal-hqa-visa-consultant.jpg",
        "portugal-hqa-visa-highly-qualified-activity.jpg",
        "portugal-hqa-visa-application.jpg",
        "portugal-hqa-visa-tax.jpg",
    ):
        convert_source(name)

    hashes: dict[str, int] = {}
    for dest_name, source_name, fx, fy in PREVIEWS:
        src = ROOT / source_name
        dest = ROOT / dest_name
        with Image.open(src) as im:
            im.load()
            cropped = crop_to_ratio(im, fx, fy)
            save_webp(cropped, dest, resize=(TARGET_W, TARGET_H))
        data = dest.read_bytes()
        hashes[dest_name] = hash(data)
        with Image.open(dest) as out:
            print(f"preview {dest_name} {out.size[0]}x{out.size[1]} {dest.stat().st_size}")

    if len(set(hashes.values())) != 31:
        raise SystemExit("Duplicate preview binaries detected")
    print("unique previews", len(hashes))


if __name__ == "__main__":
    main()
