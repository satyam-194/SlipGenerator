import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font, Svg, Rect, Line, Path } from '@react-pdf/renderer'

Font.register({
  family: 'NotoGujarati',
  src: '/fonts/NotoSansGujarati.ttf',
})

const R = '#cc0000'
const W = '#ffffff'
const BG = '#fff0f0'

const S = StyleSheet.create({
  page: { backgroundColor: BG, padding: 12, fontFamily: 'Helvetica' },
  outer: { border: '2px solid #cc0000', padding: 8 },

  // Header
  header: { flexDirection: 'row', alignItems: 'stretch', borderBottom: '2px solid #cc0000', paddingBottom: 6, marginBottom: 8 },
  sideBox: { width: 75, border: '2px solid #cc0000', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' },
  sideNumWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  sideNum: { fontSize: 48, fontFamily: 'Helvetica-Bold', color: '#cc0000', textAlign: 'center' },
  sideBadge: { backgroundColor: '#cc0000', width: '100%', paddingVertical: 4, paddingHorizontal: 2 },
  sideTxt: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: '#ffffff', textAlign: 'center' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 },
  companyName: { fontSize: 34, fontFamily: 'Helvetica-Bold', color: '#cc0000', textAlign: 'center' },
  banner: { backgroundColor: '#cc0000', paddingHorizontal: 14, paddingVertical: 5, marginVertical: 4, width: '100%' },
  bannerTxt: { color: '#ffffff', fontSize: 17, fontFamily: 'Helvetica-Bold', textAlign: 'center' },
  address: { fontSize: 11, color: '#cc0000', textAlign: 'center' },
  approved: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#cc0000', textAlign: 'center' },

  // Fields
  fieldsBlock: { borderBottom: '1px solid #cc0000', paddingBottom: 6, marginBottom: 6 },
  row: { flexDirection: 'row', marginBottom: 8 },
  grp: { flexDirection: 'row', flex: 1, alignItems: 'flex-end' },
  lbl: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: '#cc0000', marginRight: 4 },
  val: { fontSize: 11, color: '#111', borderBottom: '1px solid #cc0000', flex: 1, paddingBottom: 1, minHeight: 16 },

  // Weigh rows
  wRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  wIcon: { width: 50, marginRight: 6 },
  wLbl: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#cc0000', width: 56 },
  wVal: { fontSize: 12, color: '#111', borderBottom: '1px solid #cc0000', width: 90, paddingBottom: 1, minHeight: 16 },
  kg: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#cc0000', marginHorizontal: 5 },
  dLbl: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#cc0000', marginRight: 4 },
  dVal: { fontSize: 12, color: '#111', borderBottom: '1px solid #cc0000', width: 90, paddingBottom: 1, minHeight: 16, marginRight: 6 },
  tLbl: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#cc0000', marginRight: 4 },
  tVal: { fontSize: 12, color: '#111', borderBottom: '1px solid #cc0000', width: 70, paddingBottom: 1, minHeight: 16 },

  // Notes
  notes: { borderTop: '1px solid #cc0000', paddingTop: 4, marginTop: 4 },
  guj: { fontSize: 8.5, color: '#cc0000', fontFamily: 'NotoGujarati', marginBottom: 2.5 },
  lat: { fontSize: 8.5, color: '#cc0000', marginBottom: 2.5 },
  sigRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
  sig: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: '#cc0000' },
})

export default function WeighBridgePDF({ data }) {
  return (
    <Document>
      <Page size={[900, 380]} style={S.page}>
        <View style={S.outer}>

          {/* HEADER */}
          <View style={S.header}>
            <View style={S.sideBox}>
              <View style={S.sideNumWrap}>
                <Text style={S.sideNum}>24</Text>
              </View>
              <View style={S.sideBadge}>
                <Text style={S.sideTxt}>HOURS</Text>
                <Text style={S.sideTxt}>SERVICE</Text>
              </View>
            </View>

            <View style={S.center}>
              <Text style={S.companyName}>SHREE JAY AMBIKA WEIGH BRIDGE</Text>
              <View style={S.banner}>
                <Text style={S.bannerTxt}>FULLY COMPUTERISED WEIGH-BRIDGE</Text>
              </View>
              <Text style={S.address}>6 - MAVDI PLOT CORNER, MAVDI ROAD, RAJKOT. Mo. : 63547 98792</Text>
              <Text style={S.approved}>(A GOVERNMENT APPROVED)</Text>
            </View>

            <View style={S.sideBox}>
              <View style={S.sideNumWrap}>
                <Text style={S.sideNum}>50</Text>
              </View>
              <View style={S.sideBadge}>
                <Text style={S.sideTxt}>METRIC TONS</Text>
                <Text style={S.sideTxt}>COMPUTERISED</Text>
              </View>
            </View>
          </View>

          {/* SERIAL / VEHICLE / PARTY / MATERIAL */}
          <View style={S.fieldsBlock}>
            <View style={S.row}>
              <View style={S.grp}>
                <Text style={S.lbl}>SERIAL No. :</Text>
                <Text style={S.val}>{data.serialNo}</Text>
              </View>
              <View style={{ width: 30 }} />
              <View style={S.grp}>
                <Text style={S.lbl}>VEHICLE No. :</Text>
                <Text style={S.val}>{data.vehicleNo}</Text>
              </View>
            </View>
            <View style={S.row}>
              <View style={S.grp}>
                <Text style={S.lbl}>PARTY :</Text>
                <Text style={S.val}>{data.party}</Text>
              </View>
              <View style={{ width: 30 }} />
              <View style={S.grp}>
                <Text style={S.lbl}>MATERIAL :</Text>
                <Text style={S.val}>{data.material}</Text>
              </View>
            </View>
          </View>

          {/* GROSS */}
          <View style={S.wRow}>
            <View style={S.wIcon}>
              <Svg viewBox="0 0 44 26" width={44} height={26}>
                <Rect x="1" y="1" width="24" height="11" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Line x1="9" y1="1" x2="9" y2="12" stroke="#cc0000" strokeWidth="0.8"/>
                <Line x1="17" y1="1" x2="17" y2="12" stroke="#cc0000" strokeWidth="0.8"/>
                <Line x1="1" y1="6" x2="25" y2="6" stroke="#cc0000" strokeWidth="0.8"/>
                <Rect x="1" y="12" width="28" height="8" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Rect x="29" y="15" width="13" height="5" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Line x1="29" y1="17.5" x2="42" y2="17.5" stroke="#cc0000" strokeWidth="0.8"/>
                <Path d="M 4.5 22 m -2.5 0 a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Path d="M 17.5 22 m -2.5 0 a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Path d="M 32.5 22 m -2.5 0 a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
              </Svg>
            </View>
            <Text style={S.wLbl}>GROSS :</Text>
            <Text style={S.wVal}>{data.gross}</Text>
            <Text style={S.kg}>KG.</Text>
            <Text style={S.dLbl}>DATE :</Text>
            <Text style={S.dVal}>{data.grossDate}</Text>
            <Text style={S.tLbl}>TIME :</Text>
            <Text style={S.tVal}>{data.grossTime}</Text>
          </View>

          {/* TARE */}
          <View style={S.wRow}>
            <View style={S.wIcon}>
              <Svg viewBox="0 0 44 26" width={44} height={26}>
                <Rect x="1" y="6" width="28" height="8" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Rect x="29" y="9" width="13" height="5" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Line x1="29" y1="11.5" x2="42" y2="11.5" stroke="#cc0000" strokeWidth="0.8"/>
                <Path d="M 4.5 16 m -2.5 0 a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Path d="M 17.5 16 m -2.5 0 a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Path d="M 32.5 16 m -2.5 0 a 2.5 2.5 0 1 0 5 0 a 2.5 2.5 0 1 0 -5 0" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
              </Svg>
            </View>
            <Text style={S.wLbl}>TARE :</Text>
            <Text style={S.wVal}>{data.tare}</Text>
            <Text style={S.kg}>KG.</Text>
            <Text style={S.dLbl}>DATE :</Text>
            <Text style={S.dVal}>{data.tareDate}</Text>
            <Text style={S.tLbl}>TIME :</Text>
            <Text style={S.tVal}>{data.tareTime}</Text>
          </View>

          {/* NET */}
          <View style={S.wRow}>
            <View style={S.wIcon}>
              <Svg viewBox="0 0 44 26" width={44} height={26}>
                <Rect x="1" y="6" width="24" height="11" fill="none" stroke="#cc0000" strokeWidth="1.2"/>
                <Line x1="9" y1="6" x2="9" y2="17" stroke="#cc0000" strokeWidth="0.8"/>
                <Line x1="17" y1="6" x2="17" y2="17" stroke="#cc0000" strokeWidth="0.8"/>
                <Line x1="1" y1="11" x2="25" y2="11" stroke="#cc0000" strokeWidth="0.8"/>
              </Svg>
            </View>
            <Text style={S.wLbl}>NET :</Text>
            <Text style={S.wVal}>{data.net}</Text>
            <Text style={S.kg}>KG.</Text>
          </View>

          {/* GUJARATI NOTES */}
          <View style={S.notes}>
            <Text style={S.guj}>{'સૂચના : ■ વજન કરતી વખતે બન્ને પાર્ટીએ પોતાના જવાબદાર માણસને ગાડી સાથે મોકલી વજન તપાસી લેવું.'}</Text>
            <Text style={S.guj}>{'■ વે-બ્રિજ થી નિકળ્યા બાદ વજનમાં થતાં ફેરફાર માટે વે-બ્રિજ જવાબદાર નથી.'}</Text>
            <Text style={S.guj}>{'■ કહેવાથી લખાયેલ બારદાન માટે વે-બ્રિજ જવાબદાર નથી.'}</Text>
            <Text style={S.guj}>{'■ વાહન નંબર ફેરફાર માટે વે-બ્રિજ જવાબદાર નથી.'}</Text>
            <View style={S.sigRow}>
              <Text style={S.lat}>{'■ Subject to Rajkot Jurisdiction.'}</Text>
              <Text style={S.sig}>Operator Signature</Text>
              <Text style={S.sig}>{"Driver's Signature"}</Text>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}
