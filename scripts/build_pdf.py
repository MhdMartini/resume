"""
Build script: converts docs/README.md → docs/assets/resume.pdf via pandoc/xelatex.

How it works:
  1. Read the clean Markdown source (docs/README.md).
  2. Transform web-specific HTML (<span class="subtitle">) into LaTeX equivalents.
  3. Prepend a pandoc YAML front-matter block (fonts, packages, geometry).
  4. Pipe the result into pandoc via stdin to produce the PDF.
"""

import os
import re
import argparse
import subprocess


# ---------------------------------------------------------------------------
# Pandoc YAML front matter (LaTeX / PDF options)
# ---------------------------------------------------------------------------
YAML_FRONT_MATTER = """\
---
mainfont: Liberation Sans
mainfontoptions:
- BoldFont=Liberation Sans Bold
- ItalicFont=Liberation Sans Italic
- BoldItalicFont=Liberation Sans Bold Italic

linkcolor: blue
urlcolor: blue

header-includes: |
  \\usepackage{enumitem}
  \\usepackage{xcolor}
  \\definecolor{lightgray}{HTML}{808080}
  \\setlist[itemize,1]{label=\\textbullet, left=0pt}
  \\setlist[itemize,2]{label=\\textbullet, left=2pt}
---

"""

# ---------------------------------------------------------------------------
# HTML → LaTeX transformations
# ---------------------------------------------------------------------------


def _transform(md: str) -> str:
    """
    Replace web-specific markup with pandoc/LaTeX equivalents.

    <span class="subtitle">TEXT</span>
        → \\small\\textcolor{lightgray}{TEXT}\\normalsize
    """
    # Match both inline and block usages, including newlines inside the span.
    md = re.sub(
        r'<span class="subtitle">(.*?)</span>',
        lambda m: r"\small\textcolor{lightgray}{" + m.group(1) + r"}\normalsize",
        md,
        flags=re.DOTALL,
    )

    # Markdown table → LaTeX tabular  (education section)
    # pandoc handles standard MD tables natively — nothing extra needed here.

    return md


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------


def build(
    src: str = "docs/README.md",
    dest: str = "docs/assets/resume.pdf",
    font_size: int = 11,
    margin_top: float = 0.5,
    margin_bottom: float = 0.5,
    margin_left: float = 0.5,
    margin_right: float = 0.5,
) -> None:
    # Read source
    with open(src, encoding="utf-8") as f:
        content = f.read()

    # Strip existing YAML front matter from the source file if present
    if content.startswith("---"):
        end = content.find("\n---", 3)
        if end != -1:
            content = content[end + 4 :].lstrip("\n")

    # Transform web markup → LaTeX markup
    content = _transform(content)

    # Assemble full pandoc input
    pandoc_input = YAML_FRONT_MATTER + content

    # Remove old PDF
    if os.path.exists(dest):
        os.remove(dest)

    os.makedirs(os.path.dirname(dest), exist_ok=True)

    cmd = [
        "pandoc",
        "-f",
        "markdown",
        "-o",
        dest,
        f"--variable=fontsize:{font_size}pt",
        f"--variable=geometry:top={margin_top}in,bottom={margin_bottom}in,"
        f"left={margin_left}in,right={margin_right}in",
        "--pdf-engine=xelatex",
    ]

    print(f"Running: {' '.join(cmd)}")
    subprocess.run(cmd, input=pandoc_input.encode("utf-8"), check=True)
    print(f"PDF written to: {dest}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Build resume PDF from Markdown source."
    )
    parser.add_argument("--src", default="docs/README.md")
    parser.add_argument("--dest", default="docs/assets/resume.pdf")
    parser.add_argument("--font-size", default=11, type=int)
    parser.add_argument("--margin-right", "--right", default=0.5, type=float)
    parser.add_argument("--margin-top", "--top", default=0.5, type=float)
    parser.add_argument("--margin-left", "--left", default=0.5, type=float)
    parser.add_argument("--margin-bottom", "--bottom", default=0.5, type=float)
    args = parser.parse_args()

    build(
        src=args.src,
        dest=args.dest,
        font_size=args.font_size,
        margin_top=args.margin_top,
        margin_bottom=args.margin_bottom,
        margin_left=args.margin_left,
        margin_right=args.margin_right,
    )
