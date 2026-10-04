# SlipGenerator

A web app that generates **pixel-perfect, print-ready weigh bridge slips** as PDFs. Pick a slip design from the sidebar, fill in the weighment details, watch the live preview update, and download the finished slip with one click.

Built with React + Vite, Tailwind CSS, and [@react-pdf/renderer](https://react-pdf.org/) — everything runs in the browser, no server needed.

## Slip Templates

| Template | Style | Notes |
|---|---|---|
| **Shree Jay Ambika Weigh Bridge** | Red/crimson ink on pink paper | Serif masthead, dot-matrix truck icons, Gujarati notice lines, printer credit on the right margin |
| **Jaynath Weigh Bridge** | Steel-blue ink, dot-matrix ticket | Gujarati blessings, JAYNATH watermark, typed values in a true dot-matrix font, numbered Gujarati notices |

Both templates are faithful replicas of real printed slips — colors were sampled from scans of the originals, and layout geometry was measured against them.

## Features

- **Template switcher** — sidebar cards to flip between designs; entered data is preserved when switching, and form labels adapt (Serial No. ↔ Ticket No., Party ↔ Customer Name, Material ↔ Item Name)
- **Live preview** — an HTML mirror of the PDF, 1:1 with the generated output
- **Auto-calculated net weight** — Net = Gross − Tare, computed as you type
- **Template-specific fields** — Jaynath adds Supplier Name and Charges (auto-formatted as `180/-`)
- **Localized date formats** — `DD-MM-YYYY` (Ambika) / `DD/MM/YYYY` (Jaynath)
- **Gujarati text support** — notice lines render correctly in both the preview and the PDF
- **Instant PDF** — generated fresh on every click via `pdf().toBlob()`, named after the party/customer

## Getting Started

```bash
npm install
npm run dev        # starts Vite on http://localhost:5173
```

Other scripts:

```bash
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

## Project Structure

```
├── App.jsx                 # Landing page, sidebar, form, template switching, download
├── SlipPreview.jsx         # HTML preview — Shree Jay Ambika (red slip)
├── WeighBridgePDF.jsx      # PDF document — Shree Jay Ambika (red slip)
├── JaynathPreview.jsx      # HTML preview — Jaynath (blue slip)
├── JaynathPDF.jsx          # PDF document — Jaynath (blue slip)
├── fonts.js                # Shared react-pdf font registration
├── public/fonts/           # Bundled TTFs (Gujarati + dot-matrix)
├── main.jsx / index.css    # App entry and Tailwind styles
└── index.html
```

Each template is a pair: a `*PDF.jsx` document (react-pdf, 850×458pt page) and a `*Preview.jsx` HTML mirror that uses the same coordinates (1pt = 1px), palette, and fonts — so what you see is what downloads.

## Fonts (important)

The TTFs in `public/fonts/` are **customized builds — do not replace them with stock downloads**:

- `NotoSansGujarati-{Regular,Bold}.ttf` — static instances of Google's variable Noto Sans Gujarati (includes Latin). The Regular has its GPOS anchor lookups stripped to work around a crash in react-pdf's browser font shaper (`Cannot read properties of null (reading 'xCoordinate')`) triggered by Gujarati mark positioning (e.g. the word `અંદર`). No visible quality loss at slip sizes.
- `DotMatrix.ttf` — static instance of Google's **Doto** font (wght 600, round dots), used for the Jaynath slip's typed values to mimic a 9-pin ticket printer.

`fonts.js` registers these with a `?v=N` cache-buster — **bump it whenever a font file changes**, since browsers cache the TTFs aggressively.

Also note: react-pdf's Node and browser builds bundle different font-shaping code. If you're debugging a font issue, test in the **browser** — a passing Node render proves nothing.

## Adding a New Template

1. Create `MyTemplatePDF.jsx` and `MyTemplatePreview.jsx` (copy an existing pair; keep the shared `data` prop contract and the 850×458 page).
2. Import `./fonts.js` in the PDF file if it uses Gujarati or dot-matrix text.
3. Register the template in the `TEMPLATES` array in `App.jsx` — id, name, accent color, labels, and the two components. The sidebar, preview, and download button pick it up automatically.

## Troubleshooting

- **Download button does nothing** — Chrome may have blocked repeated automatic downloads for `localhost:5173`. Click the blocked-download icon in the address bar, or allow *Automatic downloads* in Chrome site settings.
- **Gujarati shows blank/boxes in the PDF** — a font file was probably replaced or the cache-buster wasn't bumped; see the Fonts section above.
