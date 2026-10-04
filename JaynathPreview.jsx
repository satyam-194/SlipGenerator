import React from 'react'

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

function Band({ children, style }) {
  return (
    <div style={{ backgroundColor: INK, width: '100%', padding: '2.5px 1px', textAlign: 'center', boxSizing: 'border-box', ...style }}>
      {children}
    </div>
  )
}
const bandTxt = { fontSize: 8, fontWeight: 700, fontFamily: SANS, color: '#fff', lineHeight: 1.25 }

export default function JaynathPreview({ data }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{ position: 'relative', width: PAGE_W, height: PAGE_H, backgroundColor: PAPER, margin: '0 auto', boxShadow: '0 1px 6px rgba(0,0,0,.25)' }}>

        {/* Outer border */}
        <div style={{ position: 'absolute', left: 8, top: 8, width: PAGE_W - 16, height: PAGE_H - 16, boxSizing: 'border-box', border: `1.5px solid ${INK}` }} />

        {/* Top blessings */}
        <span style={{ ...guj, fontSize: 7, left: 150, top: 13 }}>॥ સત્યમેવ જયતે ॥</span>
        <span style={{ ...guj, fontSize: 7, left: 420, top: 13 }}>॥ શ્રી શક્તિ કૃપા ॥</span>

        {/* 50 box */}
        <div style={{ position: 'absolute', left: 74, top: 28, width: 96, height: 82, boxSizing: 'border-box', border: `2.5px solid ${INK}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 40, fontWeight: 700, fontFamily: SANS, color: INK, lineHeight: 1 }}>50</span>
          </div>
          <Band>
            <div style={bandTxt}>METRIC TONS</div>
            <div style={bandTxt}>COMPUTERISED</div>
          </Band>
        </div>

        {/* 24 box */}
        <div style={{ position: 'absolute', left: 712, top: 28, width: 92, height: 82, boxSizing: 'border-box', border: `2.5px solid ${INK}`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Band style={{ padding: '2px 1px' }}>
            <div style={bandTxt}>SERVICE</div>
          </Band>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 30, fontWeight: 700, fontFamily: SANS, color: INK, lineHeight: 1 }}>24</span>
          </div>
          <Band style={{ padding: '2px 1px' }}>
            <div style={bandTxt}>HOURS</div>
          </Band>
        </div>

        {/* Header center */}
        <div style={{ position: 'absolute', left: 178, top: 28, width: 526, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700, fontFamily: SANS, color: INK, letterSpacing: 1.5, whiteSpace: 'nowrap', lineHeight: 1.1 }}>JAYNATH WEIGH BRIDGE</div>
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
    </div>
  )
}
