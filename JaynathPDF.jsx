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

  // side boxes
  sideBox: {
    position: 'absolute', top: 28, width: 96, height: 82,
    border: `2.5 solid ${INK}`, flexDirection: 'column', alignItems: 'center',
  },
  sideNumWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  sideNum50: { fontSize: 40, fontFamily: 'Helvetica-Bold', color: INK },
  sideNum24: { fontSize: 30, fontFamily: 'Helvetica-Bold', color: INK },
  sideBand: { backgroundColor: INK, width: '100%', paddingVertical: 2.5, paddingHorizontal: 1 },
  sideBandTxt: { fontSize: 8, fontFamily: 'Helvetica-Bold', color: '#ffffff', textAlign: 'center' },

  // header center
  center: { position: 'absolute', left: 178, top: 28, width: 526, alignItems: 'center' },
  title: { fontSize: 32, fontFamily: 'Helvetica-Bold', color: INK, letterSpacing: 1.5 },
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

export default function JaynathPDF({ data }) {
  return (
    <Document>
      <Page size={[PAGE_W, PAGE_H]} style={S.page}>

        <View style={S.outerBorder} />

        {/* Top blessings */}
        <Text style={[S.blessing, { left: 150, top: 13 }]}>॥ સત્યમેવ જયતે ॥</Text>
        <Text style={[S.blessing, { left: 420, top: 13 }]}>॥ શ્રી શક્તિ કૃપા ॥</Text>

        {/* 50 METRIC TONS box (left) */}
        <View style={[S.sideBox, { left: 74 }]}>
          <View style={S.sideNumWrap}>
            <Text style={S.sideNum50}>50</Text>
          </View>
          <View style={S.sideBand}>
            <Text style={S.sideBandTxt}>METRIC TONS</Text>
            <Text style={S.sideBandTxt}>COMPUTERISED</Text>
          </View>
        </View>

        {/* SERVICE 24 HOURS box (right) */}
        <View style={[S.sideBox, { left: 712, width: 92 }]}>
          <View style={[S.sideBand, { paddingVertical: 2 }]}>
            <Text style={S.sideBandTxt}>SERVICE</Text>
          </View>
          <View style={S.sideNumWrap}>
            <Text style={S.sideNum24}>24</Text>
          </View>
          <View style={[S.sideBand, { paddingVertical: 2 }]}>
            <Text style={S.sideBandTxt}>HOURS</Text>
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
        <Text style={[S.val, { left: 718, top: 238, fontSize: 12 }]}>{data.grossTime || ' '}</Text>
        <Text style={[S.lbl, { left: 440, top: 282 }]}>Tare Date</Text>
        <Text style={[S.lbl, { left: 548, top: 282 }]}>:</Text>
        <Text style={[S.val, { left: 575, top: 280 }]}>{fmtDateSlash(data.tareDate) || ' '}</Text>
        <Text style={[S.val, { left: 718, top: 280, fontSize: 12 }]}>{data.tareTime || ' '}</Text>
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
