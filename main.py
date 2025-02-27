import os
import argparse
import subprocess


def main(
    src: str = "docs/README.md",
    dest: str = "docs/assets/resume.pdf",
    font_size: int = 11,
    margin_right: float = 0.5,
    margin_top: float = 0.5,
    margin_left: float = 0.5,
    margin_bottom: float = 0.5,
):
    if os.path.exists(dest):
        os.remove(dest)
    cmd = [
        "pandoc",
        src,
        "-o",
        dest,
        f"--variable=fontsize:{font_size}pt",
        f"--variable=geometry:top={margin_top}in,bottom={margin_bottom}in,left={margin_left}in,right={margin_right}in",
        "--pdf-engine=xelatex",
    ]
    subprocess.run(cmd, check=True)


parser = argparse.ArgumentParser()
parser.add_argument("--font-size", default=11, type=int)
parser.add_argument("--margin-right", "--right", default=0.5, type=float)
parser.add_argument("--margin-top", "--top", default=0.5, type=float)
parser.add_argument("--margin-left", "--left", default=0.5, type=float)
parser.add_argument("--margin-bottom", "--bottom", default=0.5, type=float)

args = parser.parse_args()
main(
    font_size=args.font_size,
    margin_right=args.margin_right,
    margin_top=args.margin_top,
    margin_left=args.margin_left,
    margin_bottom=args.margin_bottom,
)
