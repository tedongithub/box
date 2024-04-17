import './App.css'

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">People</h1>
      <table className="border-separate border-spacing-2 w-full border border-slate-400 bg-white text-sm shadow-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="w-1/3 border border-slate-300 font-semibold p-4 text-slate-900 text-left">Name</th>
            <th className="w-1/3 border border-slate-300 font-semibold p-4 text-slate-900 text-left">Location</th>
            <th className="w-1/3 border border-slate-300 font-semibold p-4 text-slate-900 text-left">W-L-D</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 p-4 text-slate-500">John Smith</td>
            <td className="border border-slate-300 p-4 text-slate-500">New Zealand</td>
            <td className="border border-slate-300 p-4 text-slate-500">2 1 0</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4 text-slate-500">Juan Garcia</td>
            <td className="border border-slate-300 p-4 text-slate-500">Morocco</td>
            <td className="border border-slate-300 p-4 text-slate-500">3 0 0</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4 text-slate-500">Andre DePaul</td>
            <td className="border border-slate-300 p-4 text-slate-500">Corsica</td>
            <td className="border border-slate-300 p-4 text-slate-500">1 1 1</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
