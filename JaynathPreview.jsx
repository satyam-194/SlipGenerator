import React from 'react'
import SlipScaler from './SlipScaler.jsx'

// Same palette + geometry as JaynathPDF.jsx (1pt = 1px here)
const INK = '#3c5490'
const PAPER = '#f7f6f2'
const WM = '#cdd7e9'
const VAL = '#55618a'
const PAGE_W = 850
const PAGE_H = 458

const GUJ = "'Noto Sans Gujarati', sans-serif"
const SANS = 'Helvetica, Arial, sans-serif'
const DOT = "'DotMatrix', 'Courier New', monospace"

const lbl = { position: 'absolute', fontSize: 13.5, fontWeight: 700, fontFamily: SANS, color: INK, whiteSpace: 'nowrap', lineHeight: 1.15 }
const val = { position: 'absolute', fontSize: 14, fontFamily: DOT, color: VAL, whiteSpace: 'nowrap', lineHeight: 1.15, letterSpacing: 1 }
const guj = { position: 'absolute', fontSize: 10.5, fontFamily: GUJ, fontWeight: 400, color: INK, whiteSpace: 'nowrap' }

const fmtDateSlash = (d) => (d && /^\d{4}-\d{2}-\d{2}$/.test(d) ? d.split('-').reverse().join('/') : d)
const fmtCharges = (c) => (c ? (/[/-]\s*$/.test(c) ? c : `${c}/-`) : '')

// 'HH:MM' (24h) -> 'hh:MM AM/PM'
const fmtTime = (t) => {
  if (!t || !/^\d{1,2}:\d{2}/.test(t)) return t
  const [hs, m] = t.split(':')
  const h = parseInt(hs, 10)
  const ap = h >= 12 ? 'PM' : 'AM'
  return `${String(h % 12 || 12).padStart(2, '0')}:${m.slice(0, 2)} ${ap}`
}

const DECO = "'Deco', 'Arial Black', sans-serif"
const sideSmall = { fontSize: 8.6, fontWeight: 700, fontFamily: SANS, color: '#fff', textAlign: 'center', lineHeight: 1.25 }

// Solid blue square with thin white keyline inset and white text
function SideBox({ left, children }) {
  return (
    <div style={{ position: 'absolute', left, top: 24, width: 92, height: 92, boxSizing: 'border-box', border: `1px solid ${INK}`, padding: 1.5 }}>
      <div style={{ position: 'relative', height: '100%', backgroundColor: INK, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 2.5, border: '1.2px solid #ffffff' }} />
        {children}
      </div>
    </div>
  )
}

export default function JaynathPreview({ data }) {
  return (
    <SlipScaler width={PAGE_W} height={PAGE_H}>
      <div style={{ position: 'relative', width: PAGE_W, height: PAGE_H, backgroundColor: PAPER, boxShadow: '0 1px 6px rgba(0,0,0,.25)' }}>

        {/* Outer border */}
        <div style={{ position: 'absolute', left: 8, top: 8, width: PAGE_W - 16, height: PAGE_H - 16, boxSizing: 'border-box', border: `1.5px solid ${INK}` }} />

        {/* Top blessings */}
        <span style={{ ...guj, fontSize: 7, left: 150, top: 13 }}>॥ સત્યમેવ જયતે ॥</span>
        <span style={{ ...guj, fontSize: 7, left: 420, top: 13 }}>॥ શ્રી શક્તિ કૃપા ॥</span>

        {/* 50 box */}
        <SideBox left={74}>
          <span style={{ fontSize: 42, fontFamily: DECO, color: '#fff', lineHeight: 1 }}>50</span>
          <div style={{ ...sideSmall, marginTop: 3 }}>METRIC TONS</div>
          <div style={sideSmall}>COMPUTERISED</div>
        </SideBox>

        {/* 24 box */}
        <SideBox left={712}>
          <div style={{ ...sideSmall, fontSize: 10 }}>SERVICE</div>
          <span style={{ fontSize: 38, fontFamily: DECO, color: '#fff', lineHeight: 1 }}>24</span>
          <div style={{ ...sideSmall, fontSize: 10 }}>HOURS</div>
        </SideBox>

        {/* Header center */}
        <div style={{ position: 'absolute', left: 178, top: 26, width: 526, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 36, fontFamily: DECO, color: INK, letterSpacing: 2, whiteSpace: 'nowrap', lineHeight: 1.1 }}>JAYNATH WEIGH BRIDGE</div>
          <div style={{ backgroundColor: INK, padding: '3.5px 70px', marginTop: 2 }}>
            <span style={{ color: '#fff', fontSize: 12.5, fontWeight: 700, fontFamily: SANS, whiteSpace: 'nowrap' }}>Prop. : Kirti Industries</span>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, fontFamily: SANS, color: INK, marginTop: 4, whiteSpace: 'nowrap' }}>Gondal Road, Nr. S.T. Work Shop, Rajkot. Mo. 99245 05555, 99243 10061</div>
        </div>

        <div style={{ position: 'absolute', left: 8, top: 121, width: PAGE_W - 16, height: 1.5, backgroundColor: INK }} />

        {/* Watermark */}
        <span style={{ position: 'absolute', left: 195, top: 165, fontSize: 90, fontWeight: 700, fontFamily: SANS, color: WM, letterSpacing: 8, whiteSpace: 'nowrap', lineHeight: 1 }}>JAYNATH</span>

        {/* Left column */}
        <span style={{ ...lbl, left: 80, top: 136 }}>Ticket No.</span>
        <span style={{ ...val, left: 215, top: 134 }}>{data.serialNo}</span>
        <span style={{ ...lbl, left: 80, top: 164 }}>Customer Name :</span>
        <span style={{ ...val, left: 230, top: 162 }}>{data.party}</span>
        <span style={{ ...lbl, left: 80, top: 208 }}>Vehicle No.</span>
        <span style={{ ...val, left: 215, top: 206 }}>{data.vehicleNo}</span>
        <span style={{ ...lbl, left: 80, top: 251 }}>Gross WT.</span>
        <span style={{ ...val, left: 215, top: 249, fontSize: 17 }}>{data.gross}</span>
        <span style={{ ...lbl, left: 80, top: 294 }}>Tare WT.</span>
        <span style={{ ...val, left: 215, top: 292, fontSize: 17 }}>{data.tare}</span>
        <span style={{ ...lbl, left: 80, top: 337 }}>Net WT.</span>
        <span style={{ ...val, left: 215, top: 335, fontSize: 17 }}>{data.net}</span>

        {/* Right column */}
        <span style={{ ...lbl, left: 440, top: 152 }}>Supplier Name :</span>
        <span style={{ ...val, left: 585, top: 150 }}>{data.supplierName}</span>
        <span style={{ ...lbl, left: 440, top: 196 }}>Item</span>
        <span style={{ ...lbl, left: 497, top: 196 }}>Name :</span>
        <span style={{ ...val, left: 585, top: 194 }}>{data.material}</span>
        <span style={{ ...lbl, left: 440, top: 240 }}>Gross Date</span>
        <span style={{ ...lbl, left: 548, top: 240 }}>:</span>
        <span style={{ ...val, left: 575, top: 238 }}>{fmtDateSlash(data.grossDate)}</span>
        <span style={{ ...val, left: 700, top: 240, fontSize: 12 }}>{fmtTime(data.grossTime)}</span>
        <span style={{ ...lbl, left: 440, top: 282 }}>Tare Date</span>
        <span style={{ ...lbl, left: 548, top: 282 }}>:</span>
        <span style={{ ...val, left: 575, top: 280 }}>{fmtDateSlash(data.tareDate)}</span>
        <span style={{ ...val, left: 700, top: 282, fontSize: 12 }}>{fmtTime(data.tareTime)}</span>
        <span style={{ ...lbl, left: 440, top: 324 }}>Charges</span>
        <span style={{ ...lbl, left: 548, top: 324 }}>:</span>
        <span style={{ ...val, left: 700, top: 315 }}>{fmtCharges(data.charges)}</span>

        <div style={{ position: 'absolute', left: 8, top: 354, width: PAGE_W - 16, height: 1.5, backgroundColor: INK }} />

        {/* Gujarati notes */}
        <span style={{ ...guj, left: 80, top: 362 }}>(૧) વજન કરતી વખતે પાર્ટીએ પોતાના જવાબદાર માણસને ગાડી સાથે મોકલી વજન તપાસી લેવું.</span>
        <span style={{ ...guj, left: 80, top: 383 }}>(૨) વજન થઈ ગયા પછી અમારી કોઈપણ જાતની જવાબદારી રહેતી નથી.</span>
        <span style={{ ...guj, left: 80, top: 404 }}>(૩) ગાડીની અંદર શું માલ છે તે તપાસવામાં આવતો નથી.</span>

        <span style={{ position: 'absolute', left: 728, top: 400, fontSize: 10.5, fontWeight: 700, fontFamily: SANS, color: INK, whiteSpace: 'nowrap' }}>Operator's Signature</span>
        <span style={{ position: 'absolute', left: 350, top: 412, fontSize: 14.5, fontWeight: 700, fontFamily: SANS, color: INK, whiteSpace: 'nowrap' }}>FULLY COMPUTERISED WEIGH BRIDGE</span>
        <span style={{ position: 'absolute', left: 80, top: 428, fontSize: 11.5, fontFamily: SANS, color: INK, whiteSpace: 'nowrap' }}>Subject to Rajkot Jurisdiction.</span>

      </div>
    </SlipScaler>
  )
}
