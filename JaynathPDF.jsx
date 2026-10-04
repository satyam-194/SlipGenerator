import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import './fonts.js'

// Palette sampled from the original JAYNATH slip photo (normalized for clean print)
const INK = '#3c5490'
const PAPER = '#f7f6f2'
const WM = '#cdd7e9'
const VAL = '#55618a'

const PAGE_W = 850
const PAGE_H = 458

const S = StyleSheet.create({
  page: { backgroundColor: PAPER, fontFamily: 'Helvetica' },
  outerBorder: {
    position: 'absolute', left: 8, top: 8, width: PAGE_W - 16, height: PAGE_H - 16,
    border: `1.5 solid ${INK}`,
  },
  blessing: { position: 'absolute', fontSize: 7, fontFamily: 'NotoGujarati', fontWeight: 400, color: INK },

  // side boxes: solid blue square, thin white keyline inset, white text,
  // single thin outer border tight against the square
  sideBox: {
    position: 'absolute', top: 24, width: 92, height: 92,
    border: `1 solid ${INK}`, padding: 1.5,
  },
  sideBoxBlue: {
    flex: 1, backgroundColor: INK, alignItems: 'center', justifyContent: 'center', position: 'relative',
  },
  sideKeyline: { position: 'absolute', left: 2.5, top: 2.5, right: 2.5, bottom: 2.5, border: '1.2 solid #ffffff' },
  sideNum: { fontSize: 42, fontFamily: 'Deco', color: '#ffffff', lineHeight: 1 },
  sideNum24: { fontSize: 38, fontFamily: 'Deco', color: '#ffffff', lineHeight: 1 },
  sideSmall: { fontSize: 8.6, fontFamily: 'Helvetica-Bold', color: '#ffffff', textAlign: 'center' },

  // header center
  center: { position: 'absolute', left: 178, top: 26, width: 526, alignItems: 'center' },
  title: { fontSize: 36, fontFamily: 'Deco', color: INK, letterSpacing: 2 },
  propBand: { backgroundColor: INK, paddingHorizontal: 70, paddingVertical: 3.5, marginTop: 2 },
  propTxt: { color: '#ffffff', fontSize: 12.5, fontFamily: 'Helvetica-Bold' },
  address: { fontSize: 13, fontFamily: 'Helvetica-Bold', color: INK, marginTop: 4 },

  rule: { position: 'absolute', left: 8, width: PAGE_W - 16, height: 1.5, backgroundColor: INK },

  watermark: { position: 'absolute', left: 195, top: 165, fontSize: 90, fontFamily: 'Helvetica-Bold', color: WM, letterSpacing: 8 },

  lbl: { position: 'absolute', fontSize: 13.5, fontFamily: 'Helvetica-Bold', color: INK },
  val: { position: 'absolute', fontSize: 14, fontFamily: 'DotMatrix', color: VAL, letterSpacing: 1 },

  guj: { position: 'absolute', fontSize: 10.5, fontFamily: 'NotoGujarati', fontWeight: 400, color: INK },
  lat: { position: 'absolute', fontSize: 11.5, fontFamily: 'Helvetica', color: INK },
  fully: { position: 'absolute', fontSize: 14.5, fontFamily: 'Helvetica-Bold', color: INK },
  opSig: { position: 'absolute', fontSize: 10.5, fontFamily: 'Helvetica-Bold', color: INK },
})

// 'YYYY-MM-DD' -> 'DD/MM/YYYY'
const fmtDateSlash = (d) => (d && /^\d{4}-\d{2}-\d{2}$/.test(d) ? d.split('-').reverse().join('/') : d)
// append '/-' to charges if plain number entered
const fmtCharges = (c) => (c ? (/[/-]\s*$/.test(c) ? c : `${c}/-`) : '')

// 'HH:MM' (24h) -> 'hh:MM AM/PM'
const fmtTime = (t) => {
  if (!t || !/^\d{1,2}:\d{2}/.test(t)) return t
  const [hs, m] = t.split(':')
  const h = parseInt(hs, 10)
  const ap = h >= 12 ? 'PM' : 'AM'
  return `${String(h % 12 || 12).padStart(2, '0')}:${m.slice(0, 2)} ${ap}`
}

export default function JaynathPDF({ data }) {
  return (
    <Document>
      <Page size={[PAGE_W, PAGE_H]} style={S.page}>

        <View style={S.outerBorder} />

        {/* Top blessings */}
        <Text style={[S.blessing, { left: 150, top: 13 }]}>॥ સત્યમેવ જયતે ॥</Text>
        <Text style={[S.blessing, { left: 420, top: 13 }]}>॥ શ્રી શક્તિ કૃપા ॥</Text>

        {/* 50 METRIC TONS box (left): white 50 over solid blue */}
        <View style={[S.sideBox, { left: 74 }]}>
          <View style={S.sideBoxBlue}>
            <View style={S.sideKeyline} />
            <Text style={S.sideNum}>50</Text>
            <Text style={[S.sideSmall, { marginTop: 3 }]}>METRIC TONS</Text>
            <Text style={S.sideSmall}>COMPUTERISED</Text>
          </View>
        </View>

        {/* SERVICE 24 HOURS box (right): white text over solid blue */}
        <View style={[S.sideBox, { left: 712 }]}>
          <View style={S.sideBoxBlue}>
            <View style={S.sideKeyline} />
            <Text style={[S.sideSmall, { fontSize: 10 }]}>SERVICE</Text>
            <Text style={S.sideNum24}>24</Text>
            <Text style={[S.sideSmall, { fontSize: 10 }]}>HOURS</Text>
          </View>
        </View>

        {/* Header center */}
        <View style={S.center}>
          <Text style={S.title}>JAYNATH WEIGH BRIDGE</Text>
          <View style={S.propBand}>
            <Text style={S.propTxt}>Prop. : Kirti Industries</Text>
          </View>
          <Text style={S.address}>Gondal Road, Nr. S.T. Work Shop, Rajkot. Mo. 99245 05555, 99243 10061</Text>
        </View>

        <View style={[S.rule, { top: 121 }]} />

        {/* Watermark */}
        <Text style={S.watermark}>JAYNATH</Text>

        {/* Left column */}
        <Text style={[S.lbl, { left: 80, top: 136 }]}>Ticket No.</Text>
        <Text style={[S.val, { left: 215, top: 134 }]}>{data.serialNo || ' '}</Text>
        <Text style={[S.lbl, { left: 80, top: 164 }]}>Customer Name :</Text>
        <Text style={[S.val, { left: 230, top: 162 }]}>{data.party || ' '}</Text>
        <Text style={[S.lbl, { left: 80, top: 208 }]}>Vehicle No.</Text>
        <Text style={[S.val, { left: 215, top: 206 }]}>{data.vehicleNo || ' '}</Text>
        <Text style={[S.lbl, { left: 80, top: 251 }]}>Gross WT.</Text>
        <Text style={[S.val, { left: 215, top: 249, fontSize: 17 }]}>{data.gross || ' '}</Text>
        <Text style={[S.lbl, { left: 80, top: 294 }]}>Tare WT.</Text>
        <Text style={[S.val, { left: 215, top: 292, fontSize: 17 }]}>{data.tare || ' '}</Text>
        <Text style={[S.lbl, { left: 80, top: 337 }]}>Net WT.</Text>
        <Text style={[S.val, { left: 215, top: 335, fontSize: 17 }]}>{data.net || ' '}</Text>

        {/* Right column */}
        <Text style={[S.lbl, { left: 440, top: 152 }]}>Supplier Name :</Text>
        <Text style={[S.val, { left: 585, top: 150 }]}>{data.supplierName || ' '}</Text>
        <Text style={[S.lbl, { left: 440, top: 196 }]}>Item</Text>
        <Text style={[S.lbl, { left: 497, top: 196 }]}>Name :</Text>
        <Text style={[S.val, { left: 585, top: 194 }]}>{data.material || ' '}</Text>
        <Text style={[S.lbl, { left: 440, top: 240 }]}>Gross Date</Text>
        <Text style={[S.lbl, { left: 548, top: 240 }]}>:</Text>
        <Text style={[S.val, { left: 575, top: 238 }]}>{fmtDateSlash(data.grossDate) || ' '}</Text>
        <Text style={[S.val, { left: 700, top: 238, fontSize: 12 }]}>{fmtTime(data.grossTime) || ' '}</Text>
        <Text style={[S.lbl, { left: 440, top: 282 }]}>Tare Date</Text>
        <Text style={[S.lbl, { left: 548, top: 282 }]}>:</Text>
        <Text style={[S.val, { left: 575, top: 280 }]}>{fmtDateSlash(data.tareDate) || ' '}</Text>
        <Text style={[S.val, { left: 700, top: 280, fontSize: 12 }]}>{fmtTime(data.tareTime) || ' '}</Text>
        <Text style={[S.lbl, { left: 440, top: 324 }]}>Charges</Text>
        <Text style={[S.lbl, { left: 548, top: 324 }]}>:</Text>
        <Text style={[S.val, { left: 700, top: 315 }]}>{fmtCharges(data.charges) || ' '}</Text>

        <View style={[S.rule, { top: 354 }]} />

        {/* Gujarati notes */}
        <Text style={[S.guj, { left: 80, top: 362 }]}>(૧) વજન કરતી વખતે પાર્ટીએ પોતાના જવાબદાર માણસને ગાડી સાથે મોકલી વજન તપાસી લેવું.</Text>
        <Text style={[S.guj, { left: 80, top: 383 }]}>(૨) વજન થઈ ગયા પછી અમારી કોઈપણ જાતની જવાબદારી રહેતી નથી.</Text>
        <Text style={[S.guj, { left: 80, top: 404 }]}>(૩) ગાડીની અંદર શું માલ છે તે તપાસવામાં આવતો નથી.</Text>

        <Text style={[S.opSig, { left: 728, top: 400 }]}>Operator's Signature</Text>
        <Text style={[S.fully, { left: 350, top: 412 }]}>FULLY COMPUTERISED WEIGH BRIDGE</Text>
        <Text style={[S.lat, { left: 80, top: 428 }]}>Subject to Rajkot Jurisdiction.</Text>

      </Page>
    </Document>
  )
}
