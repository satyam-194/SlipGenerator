import React, { useState } from 'react'
import { pdf } from '@react-pdf/renderer'
import WeighBridgePDF from './WeighBridgePDF.jsx'
import SlipPreview from './SlipPreview.jsx'
import JaynathPDF from './JaynathPDF.jsx'
import JaynathPreview from './JaynathPreview.jsx'

const initialData = {
  serialNo: '',
  vehicleNo: '',
  party: '',
  material: '',
  supplierName: '',
  charges: '',
  gross: '',
  grossDate: '',
  grossTime: '',
  tare: '',
  tareDate: '',
  tareTime: '',
  net: '',
}

const TEMPLATES = [
  {
    id: 'ambika',
    name: 'Shree Jay Ambika',
    sub: 'Red slip • Mavdi Road, Rajkot',
    color: '#e13464',
    labels: { serialNo: 'Serial No.', party: 'Party', material: 'Material' },
    Preview: SlipPreview,
    Doc: WeighBridgePDF,
  },
  {
    id: 'jaynath',
    name: 'Jaynath Weigh Bridge',
    sub: 'Blue slip • Gondal Road, Rajkot',
    color: '#3c5490',
    labels: { serialNo: 'Ticket No.', party: 'Customer Name', material: 'Item Name' },
    Preview: JaynathPreview,
    Doc: JaynathPDF,
  },
]

function LandingPage({ onStart }) {
  return (
    <div className="min-h-screen bg-red-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b-2 border-red-600 px-8 py-3 flex items-center gap-3">
        <span className="text-2xl">🧾</span>
        <div>
          <div className="text-lg font-extrabold text-red-600 leading-none">WEIGH BRIDGE SLIP GENERATOR</div>
          <div className="text-xs text-red-400">Shree Jay Ambika • Jaynath</div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 px-4 py-16">
        {/* Logo / Icon */}
        <div className="bg-white border-4 border-red-600 rounded-full w-28 h-28 flex items-center justify-center shadow-lg mb-6">
          <span className="text-6xl">⚖️</span>
        </div>

        <h1 className="text-4xl font-extrabold text-red-600 text-center mb-2">WEIGH BRIDGE</h1>
        <h2 className="text-2xl font-bold text-red-500 text-center mb-1">SLIP GENERATOR</h2>
        <p className="text-red-400 text-sm text-center mb-8">Pixel-perfect replicas of real weigh bridge slips, ready to print</p>

        <div className="bg-white border-2 border-red-200 rounded-2xl px-8 py-6 shadow max-w-md w-full text-center mb-8">
          <p className="text-red-700 font-semibold text-lg mb-1">Two Slip Designs</p>
          <p className="text-red-400 text-sm">Choose Shree Jay Ambika (red) or Jaynath (blue), fill in the details and download a ready-to-print PDF slip.</p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center mb-10">
          <div className="bg-white border border-red-200 rounded-xl px-5 py-3 text-center shadow">
            <div className="text-3xl font-extrabold" style={{ color: '#e13464' }}>■</div>
            <div className="text-xs font-bold text-red-400">SHREE JAY AMBIKA</div>
          </div>
          <div className="bg-white border border-red-200 rounded-xl px-5 py-3 text-center shadow">
            <div className="text-3xl font-extrabold" style={{ color: '#3c5490' }}>■</div>
            <div className="text-xs font-bold text-red-400">JAYNATH</div>
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

function TemplateCard({ t, active, onSelect }) {
  return (
    <button
      onClick={() => onSelect(t.id)}
      className={`w-full text-left rounded-xl border-2 px-4 py-3 transition shadow-sm bg-white hover:shadow ${
        active ? 'ring-2' : ''
      }`}
      style={{ borderColor: active ? t.color : '#e5e7eb', ...(active ? { boxShadow: `0 0 0 2px ${t.color}22` } : {}) }}
    >
      <div className="flex items-center gap-3">
        <span className="inline-block w-5 h-5 rounded" style={{ backgroundColor: t.color }} />
        <div>
          <div className="text-sm font-bold" style={{ color: t.color }}>{t.name}</div>
          <div className="text-[11px] text-gray-400">{t.sub}</div>
        </div>
        {active && <span className="ml-auto text-xs font-bold" style={{ color: t.color }}>✓ Selected</span>}
      </div>
    </button>
  )
}

function SlipGenerator() {
  const [data, setData] = useState(initialData)
  const [templateId, setTemplateId] = useState('ambika')
  const [generating, setGenerating] = useState(false)

  const template = TEMPLATES.find((t) => t.id === templateId)
  const { labels, Preview, Doc } = template
  const isJaynath = templateId === 'jaynath'

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

  const handleDownload = async () => {
    setGenerating(true)
    try {
      const blob = await pdf(<Doc data={data} />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${template.id}_${data.party ? data.party.trim().replace(/\s+/g, '_') : 'slip'}.pdf`
      a.click()
      URL.revokeObjectURL(url)
      setData(initialData)
    } finally {
      setGenerating(false)
    }
  }

  // Form chrome follows the selected template's color scheme
  const theme = isJaynath
    ? {
        page: 'bg-blue-50', nav: 'border-blue-900', title: 'text-blue-900', sub: 'text-blue-400',
        card: 'border-blue-200', heading: 'text-blue-900', headingBorder: 'border-blue-100',
        label: 'text-blue-900', input: 'border-blue-300 focus:ring-blue-400', net: 'bg-blue-50 text-blue-900',
      }
    : {
        page: 'bg-red-50', nav: 'border-red-600', title: 'text-red-600', sub: 'text-red-400',
        card: 'border-red-200', heading: 'text-red-600', headingBorder: 'border-red-100',
        label: 'text-red-700', input: 'border-red-300 focus:ring-red-400', net: 'bg-red-50 text-red-700',
      }

  const inputClass = `border ${theme.input} rounded px-2 py-1.5 text-sm w-full focus:outline-none focus:ring-1 bg-white`
  const labelClass = `text-xs font-semibold ${theme.label} mb-1 block`

  return (
    <div className={`min-h-screen ${theme.page}`}>
      <nav className={`bg-white border-b-2 ${theme.nav} px-4 md:px-8 py-3 flex items-center gap-3`}>
        <span className="text-2xl">🧾</span>
        <div>
          <div className={`text-lg font-extrabold ${theme.title} leading-none`}>WEIGH BRIDGE SLIP GENERATOR</div>
          <div className={`text-xs ${theme.sub}`}>{template.name}</div>
        </div>
      </nav>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 shrink-0 px-4 py-8">
          <div className="sticky top-6 space-y-3">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide px-1">Slip Template</div>
            {TEMPLATES.map((t) => (
              <TemplateCard key={t.id} t={t} active={t.id === templateId} onSelect={setTemplateId} />
            ))}
            <p className="text-[11px] text-gray-400 px-1 pt-2">
              Entered details are kept when you switch templates. The preview and PDF follow the selected design.
            </p>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 px-4 py-8 space-y-8">
          {/* Mobile template selector */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
            {TEMPLATES.map((t) => (
              <TemplateCard key={t.id} t={t} active={t.id === templateId} onSelect={setTemplateId} />
            ))}
          </div>

          <div className={`bg-white border-2 ${theme.card} rounded-2xl p-6 shadow`}>
            <h2 className={`text-lg font-bold ${theme.heading} mb-5 border-b ${theme.headingBorder} pb-2`}>📋 Fill Slip Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div><label className={labelClass}>{labels.serialNo}</label><input className={inputClass} name="serialNo" value={data.serialNo} onChange={handleChange} placeholder="e.g. 1001" /></div>
              <div><label className={labelClass}>Vehicle No.</label><input className={inputClass} name="vehicleNo" value={data.vehicleNo} onChange={handleChange} placeholder="e.g. GJ03AB1234" /></div>
              <div><label className={labelClass}>{labels.party}</label><input className={inputClass} name="party" value={data.party} onChange={handleChange} placeholder={`${labels.party} name`} /></div>
              <div><label className={labelClass}>{labels.material}</label><input className={inputClass} name="material" value={data.material} onChange={handleChange} placeholder="e.g. Sand" /></div>
            </div>
            {isJaynath && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div><label className={labelClass}>Supplier Name</label><input className={inputClass} name="supplierName" value={data.supplierName} onChange={handleChange} placeholder="Supplier name" /></div>
                <div><label className={labelClass}>Charges (₹)</label><input className={inputClass} name="charges" value={data.charges} onChange={handleChange} placeholder="e.g. 180" /></div>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div><label className={labelClass}>Gross Weight (KG)</label><input className={inputClass} name="gross" type="number" value={data.gross} onChange={handleChange} placeholder="e.g. 15000" /></div>
              <div><label className={labelClass}>Gross Date</label><input className={inputClass} name="grossDate" type="date" value={data.grossDate} onChange={handleChange} /></div>
              <div><label className={labelClass}>Gross Time</label><input className={inputClass} name="grossTime" type="time" value={data.grossTime} onChange={handleChange} /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div><label className={labelClass}>Tare Weight (KG)</label><input className={inputClass} name="tare" type="number" value={data.tare} onChange={handleChange} placeholder="e.g. 5000" /></div>
              <div><label className={labelClass}>Tare Date</label><input className={inputClass} name="tareDate" type="date" value={data.tareDate} onChange={handleChange} /></div>
              <div><label className={labelClass}>Tare Time</label><input className={inputClass} name="tareTime" type="time" value={data.tareTime} onChange={handleChange} /></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div><label className={labelClass}>Net Weight (KG) — Auto Calculated</label><input className={`${inputClass} ${theme.net} font-bold`} name="net" value={data.net} readOnly placeholder="Auto calculated" /></div>
            </div>
          </div>

          <div className={`bg-white border-2 ${theme.card} rounded-2xl p-6 shadow`}>
            <h2 className={`text-lg font-bold ${theme.heading} mb-5 border-b ${theme.headingBorder} pb-2`}>👁️ Live Preview — {template.name}</h2>
            <Preview data={data} />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleDownload}
              disabled={generating}
              className="text-white font-bold px-10 py-4 rounded-xl text-lg shadow-lg transition flex items-center gap-2 disabled:opacity-60 hover:opacity-90"
              style={{ backgroundColor: template.color }}
            >
              {generating ? '⏳ Preparing PDF...' : `⬇️ Download ${template.name} PDF`}
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function App() {
  const [started, setStarted] = useState(false)
  return started ? <SlipGenerator /> : <LandingPage onStart={() => setStarted(true)} />
}
