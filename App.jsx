import React, { useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import WeighBridgePDF from './components/WeighBridgePDF'
import SlipPreview from './components/SlipPreview'

const initialData = {
  serialNo: '',
  vehicleNo: '',
  party: '',
  material: '',
  gross: '',
  grossDate: '',
  grossTime: '',
  tare: '',
  tareDate: '',
  tareTime: '',
  net: '',
}

function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b-2 border-red-600 px-8 py-3 flex items-center gap-3">
        <span className="text-2xl">🧾</span>
        <div>
          <div className="text-lg font-extrabold text-red-600 leading-none">SHREE JAY AMBIKA WEIGH BRIDGE</div>
          <div className="text-xs text-red-400">Slip Generator</div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 px-4 py-16">
        {/* Logo / Icon */}
        <div className="bg-white border-4 border-red-600 rounded-full w-28 h-28 flex items-center justify-center shadow-lg mb-6">
          <span className="text-6xl">⚖️</span>
        </div>

        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-2">SHREE JAY AMBIKA</h1>
        <h2 className="text-2xl font-bold text-red-500 text-center mb-1">WEIGH BRIDGE</h2>
        <p className="text-red-400 text-sm text-center mb-2">6 - Mavdi Plot Corner, Mavdi Road, Rajkot &nbsp;|&nbsp; Mo: 63547 98792</p>
        <span className="text-xs text-red-300 mb-8">(A Government Approved)</span>

        <div className="bg-white border-2 border-red-200 rounded-2xl px-8 py-6 shadow max-w-md w-full text-center mb-8">
          <p className="text-red-700 font-semibold text-lg mb-1">Fully Computerised Weigh-Bridge</p>
          <p className="text-red-400 text-sm">Generate professional weigh bridge slips instantly. Fill in the details and download a ready-to-print PDF slip.</p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center mb-10">
          <div className="bg-white border border-red-200 rounded-xl px-5 py-3 text-center shadow">
            <div className="text-3xl font-extrabold text-red-600">24</div>
            <div className="text-xs font-bold text-red-400">HOURS SERVICE</div>
          </div>
          <div className="bg-white border border-red-200 rounded-xl px-5 py-3 text-center shadow">
            <div className="text-3xl font-extrabold text-red-600">50</div>
            <div className="text-xs font-bold text-red-400">METRIC TONS</div>
          </div>
          <div className="bg-white border border-red-200 rounded-xl px-5 py-3 text-center shadow">
            <div className="text-3xl font-extrabold text-red-600">⚡</div>
            <div className="text-xs font-bold text-red-400">INSTANT PDF</div>
          </div>
        </div>

        <button
          onClick={onStart}
          className="bg-red-600 hover:bg-red-700 text-white font-extrabold px-14 py-4 rounded-2xl text-xl shadow-xl transition-all hover:scale-105"
        >
          🚀 Get Started
        </button>
      </div>
    </div>
  )
}

function SlipGenerator() {
  const [data, setData] = useState(initialData)

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      const updated = { ...prev, [name]: value }
      const g = parseFloat(updated.gross) || 0
      const t = parseFloat(updated.tare) || 0
      updated.net = g > 0 && t > 0 ? (g - t).toString() : ''
      return updated
    })
  }

  const inputClass = "border border-red-300 rounded px-2 py-1.5 text-sm w-full focus:outline-none focus:ring-1 focus:ring-red-400 bg-white"
  const labelClass = "text-xs font-semibold text-red-700 mb-1 block"

  return (
    <div className="min-h-screen bg-red-50">
      <nav className="bg-white border-b-2 border-red-600 px-8 py-3 flex items-center gap-3">
        <span className="text-2xl">🧾</span>
        <div>
          <div className="text-lg font-extrabold text-red-600 leading-none">SHREE JAY AMBIKA WEIGH BRIDGE</div>
          <div className="text-xs text-red-400">Slip Generator</div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow">
          <h2 className="text-lg font-bold text-red-600 mb-5 border-b border-red-100 pb-2">📋 Fill Slip Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div><label className={labelClass}>Serial No.</label><input className={inputClass} name="serialNo" value={data.serialNo} onChange={handleChange} placeholder="e.g. 1001" /></div>
            <div><label className={labelClass}>Vehicle No.</label><input className={inputClass} name="vehicleNo" value={data.vehicleNo} onChange={handleChange} placeholder="e.g. GJ03AB1234" /></div>
            <div><label className={labelClass}>Party</label><input className={inputClass} name="party" value={data.party} onChange={handleChange} placeholder="Party name" /></div>
            <div><label className={labelClass}>Material</label><input className={inputClass} name="material" value={data.material} onChange={handleChange} placeholder="e.g. Sand" /></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div><label className={labelClass}>Gross Weight (KG)</label><input className={inputClass} name="gross" type="number" value={data.gross} onChange={handleChange} placeholder="e.g. 15000" /></div>
            <div><label className={labelClass}>Gross Date</label><input className={inputClass} name="grossDate" type="date" value={data.grossDate} onChange={handleChange} /></div>
            <div><label className={labelClass}>Gross Time</label><input className={inputClass} name="grossTime" type="time" value={data.grossTime} onChange={handleChange} /></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div><label className={labelClass}>Tare Weight (KG)</label><input className={inputClass} name="tare" type="number" value={data.tare} onChange={handleChange} placeholder="e.g. 5000" /></div>
            <div><label className={labelClass}>Tare Date</label><input className={inputClass} name="tareDate" type="date" value={data.tareDate} onChange={handleChange} /></div>
            <div><label className={labelClass}>Tare Time</label><input className={inputClass} name="tareTime" type="time" value={data.tareTime} onChange={handleChange} /></div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div><label className={labelClass}>Net Weight (KG) — Auto Calculated</label><input className={`${inputClass} bg-red-50 font-bold text-red-700`} name="net" value={data.net} readOnly placeholder="Auto calculated" /></div>
          </div>
        </div>

        <div className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow">
          <h2 className="text-lg font-bold text-red-600 mb-5 border-b border-red-100 pb-2">👁️ Live Preview</h2>
          <SlipPreview data={data} />
        </div>

        <div className="flex justify-center">
          <PDFDownloadLink
            document={<WeighBridgePDF data={data} />}
            fileName={`${data.party ? data.party.trim().replace(/\s+/g, '_') : 'slip'}.pdf`}
          >
            {({ loading }) => (
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-4 rounded-xl text-lg shadow-lg transition flex items-center gap-2">
                {loading ? '⏳ Preparing PDF...' : '⬇️ Download PDF'}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [started, setStarted] = useState(false)
  return started ? <SlipGenerator /> : <LandingPage onStart={() => setStarted(true)} />
}
