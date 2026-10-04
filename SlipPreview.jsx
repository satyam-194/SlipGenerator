import React from 'react'

const R = '#cc0000'

export default function SlipPreview({ data }) {
  return (
    <div style={{ backgroundColor: '#fff0f0', padding: 12, border: `2px solid ${R}`, fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ border: `2px solid ${R}`, padding: 8 }}>

        {/* HEADER */}
        <div style={{ display: 'flex', alignItems: 'stretch', borderBottom: `2px solid ${R}`, paddingBottom: 6, marginBottom: 8 }}>

          {/* Left Box - 24 */}
          <div style={{ width: 100, border: `2px solid ${R}`, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5px 8px', flexShrink: 0, gap: 6 }}>
            <span style={{ fontSize: 52, fontWeight: 900, color: R, lineHeight: 1 }}>24</span>
            <div style={{ backgroundColor: R, color: '#fff', fontSize: 10, fontWeight: 700, textAlign: 'center', lineHeight: 1.3, padding: '3px 5px' }}>HOURS<br />SERVICE</div>
          </div>

          {/* Center */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginLeft: 10, marginRight: 10 }}>
            <div style={{ fontSize: 34, fontWeight: 900, color: R, textAlign: 'center', whiteSpace: 'nowrap' }}>SHREE JAY AMBIKA WEIGH BRIDGE</div>
            <div style={{ backgroundColor: R, color: '#fff', fontSize: 17, fontWeight: 700, textAlign: 'center', padding: '5px 14px', margin: '4px 0', width: '100%', boxSizing: 'border-box' }}>
              FULLY COMPUTERISED WEIGH-BRIDGE
            </div>
            <div style={{ fontSize: 11, color: R, textAlign: 'center' }}>6 - MAVDI PLOT CORNER, MAVDI ROAD, RAJKOT. Mo. : 63547 98792</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: R, textAlign: 'center' }}>(A GOVERNMENT APPROVED)</div>
          </div>

          {/* Right Box - 50 */}
          <div style={{ width: 100, border: `2px solid ${R}`, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '5px 8px', flexShrink: 0, gap: 6 }}>
            <span style={{ fontSize: 52, fontWeight: 900, color: R, lineHeight: 1 }}>50</span>
            <div style={{ backgroundColor: R, color: '#fff', fontSize: 10, fontWeight: 700, textAlign: 'center', lineHeight: 1.3, padding: '3px 5px' }}>METRIC<br />TONS<br />COMP-<br />UTERISED</div>
          </div>
        </div>

        {/* SERIAL / VEHICLE / PARTY / MATERIAL */}
        <div style={{ borderBottom: `1px solid ${R}`, paddingBottom: 6, marginBottom: 6 }}>
          <div style={{ display: 'flex', marginBottom: 8 }}>
            <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: R, marginRight: 4, whiteSpace: 'nowrap' }}>SERIAL No. :</span>
              <span style={{ fontSize: 11, color: '#111', borderBottom: `1px solid ${R}`, flex: 1, minHeight: 16, paddingBottom: 1 }}>{data.serialNo}</span>
            </div>
            <div style={{ width: 30 }} />
            <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: R, marginRight: 4, whiteSpace: 'nowrap' }}>VEHICLE No. :</span>
              <span style={{ fontSize: 11, color: '#111', borderBottom: `1px solid ${R}`, flex: 1, minHeight: 16, paddingBottom: 1 }}>{data.vehicleNo}</span>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: R, marginRight: 4, whiteSpace: 'nowrap' }}>PARTY :</span>
              <span style={{ fontSize: 11, color: '#111', borderBottom: `1px solid ${R}`, flex: 1, minHeight: 16, paddingBottom: 1 }}>{data.party}</span>
            </div>
            <div style={{ width: 30 }} />
            <div style={{ display: 'flex', flex: 1, alignItems: 'flex-end' }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: R, marginRight: 4, whiteSpace: 'nowrap' }}>MATERIAL :</span>
              <span style={{ fontSize: 11, color: '#111', borderBottom: `1px solid ${R}`, flex: 1, minHeight: 16, paddingBottom: 1 }}>{data.material}</span>
            </div>
          </div>
        </div>

        {/* GROSS */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <svg viewBox="0 0 44 26" width={44} height={26} style={{ marginRight: 6, flexShrink: 0 }}>
            <rect x="1" y="1" width="24" height="11" fill="none" stroke={R} strokeWidth="1.2"/>
            <line x1="9" y1="1" x2="9" y2="12" stroke={R} strokeWidth="0.8"/>
            <line x1="17" y1="1" x2="17" y2="12" stroke={R} strokeWidth="0.8"/>
            <line x1="1" y1="6" x2="25" y2="6" stroke={R} strokeWidth="0.8"/>
            <rect x="1" y="12" width="28" height="8" fill="none" stroke={R} strokeWidth="1.2"/>
            <rect x="29" y="15" width="13" height="5" fill="none" stroke={R} strokeWidth="1.2"/>
            <line x1="29" y1="17.5" x2="42" y2="17.5" stroke={R} strokeWidth="0.8"/>
            <circle cx="7" cy="22" r="2.5" fill="none" stroke={R} strokeWidth="1.2"/>
            <circle cx="20" cy="22" r="2.5" fill="none" stroke={R} strokeWidth="1.2"/>
            <circle cx="35" cy="22" r="2.5" fill="none" stroke={R} strokeWidth="1.2"/>
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, width: 56, flexShrink: 0 }}>GROSS :</span>
          <span style={{ fontSize: 12, color: '#111', borderBottom: `1px solid ${R}`, width: 90, minHeight: 16, paddingBottom: 1 }}>{data.gross}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, margin: '0 5px' }}>KG.</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, marginRight: 4 }}>DATE :</span>
          <span style={{ fontSize: 12, color: '#111', borderBottom: `1px solid ${R}`, width: 90, minHeight: 16, paddingBottom: 1, marginRight: 6 }}>{data.grossDate}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, marginRight: 4 }}>TIME :</span>
          <span style={{ fontSize: 12, color: '#111', borderBottom: `1px solid ${R}`, width: 70, minHeight: 16, paddingBottom: 1 }}>{data.grossTime}</span>
        </div>

        {/* TARE */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <svg viewBox="0 0 44 26" width={44} height={26} style={{ marginRight: 6, flexShrink: 0 }}>
            <rect x="1" y="6" width="28" height="8" fill="none" stroke={R} strokeWidth="1.2"/>
            <rect x="29" y="9" width="13" height="5" fill="none" stroke={R} strokeWidth="1.2"/>
            <line x1="29" y1="11.5" x2="42" y2="11.5" stroke={R} strokeWidth="0.8"/>
            <circle cx="7" cy="16" r="2.5" fill="none" stroke={R} strokeWidth="1.2"/>
            <circle cx="20" cy="16" r="2.5" fill="none" stroke={R} strokeWidth="1.2"/>
            <circle cx="35" cy="16" r="2.5" fill="none" stroke={R} strokeWidth="1.2"/>
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, width: 56, flexShrink: 0 }}>TARE :</span>
          <span style={{ fontSize: 12, color: '#111', borderBottom: `1px solid ${R}`, width: 90, minHeight: 16, paddingBottom: 1 }}>{data.tare}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, margin: '0 5px' }}>KG.</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, marginRight: 4 }}>DATE :</span>
          <span style={{ fontSize: 12, color: '#111', borderBottom: `1px solid ${R}`, width: 90, minHeight: 16, paddingBottom: 1, marginRight: 6 }}>{data.tareDate}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, marginRight: 4 }}>TIME :</span>
          <span style={{ fontSize: 12, color: '#111', borderBottom: `1px solid ${R}`, width: 70, minHeight: 16, paddingBottom: 1 }}>{data.tareTime}</span>
        </div>

        {/* NET */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <svg viewBox="0 0 44 26" width={44} height={26} style={{ marginRight: 6, flexShrink: 0 }}>
            <rect x="1" y="6" width="24" height="11" fill="none" stroke={R} strokeWidth="1.2"/>
            <line x1="9" y1="6" x2="9" y2="17" stroke={R} strokeWidth="0.8"/>
            <line x1="17" y1="6" x2="17" y2="17" stroke={R} strokeWidth="0.8"/>
            <line x1="1" y1="11" x2="25" y2="11" stroke={R} strokeWidth="0.8"/>
          </svg>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, width: 56, flexShrink: 0 }}>NET :</span>
          <span style={{ fontSize: 12, color: '#111', borderBottom: `1px solid ${R}`, width: 90, minHeight: 16, paddingBottom: 1 }}>{data.net}</span>
          <span style={{ fontSize: 12, fontWeight: 700, color: R, margin: '0 5px' }}>KG.</span>
        </div>

        {/* GUJARATI NOTES */}
        <div style={{ borderTop: `1px solid ${R}`, paddingTop: 4, marginTop: 4 }}>
          <div style={{ fontSize: 8.5, color: R, marginBottom: 2.5 }}>સૂચના : ■ વજન કરતી વખતે બન્ને પાર્ટીએ પોતાના જવાબદાર માણસને ગાડી સાથે મોકલી વજન તપાસી લેવું.</div>
          <div style={{ fontSize: 8.5, color: R, marginBottom: 2.5 }}>■ વે-બ્રિજ થી નિકળ્યા બાદ વજનમાં થતાં ફેરફાર માટે વે-બ્રિજ જવાબદાર નથી.</div>
          <div style={{ fontSize: 8.5, color: R, marginBottom: 2.5 }}>■ કહેવાથી લખાયેલ બારદાન માટે વે-બ્રિજ જવાબદાર નથી.</div>
          <div style={{ fontSize: 8.5, color: R, marginBottom: 2.5 }}>■ વાહન નંબર ફેરફાર માટે વે-બ્રિજ જવાબદાર નથી.</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
            <span style={{ fontSize: 8.5, color: R }}>■ Subject to Rajkot Jurisdiction.</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: R }}>Operator Signature</span>
            <span style={{ fontSize: 11, fontWeight: 700, color: R }}>Driver's Signature</span>
          </div>
        </div>

      </div>
    </div>
  )
}
