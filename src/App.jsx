import './App.css'

function App() {
  const people = [
    {
      name: "Gervonta Davis",
      record: "29-0-0",
      division: "lightweight",
      location: "Baltimore, MD",
      career: "2013-2023",
      stance: "southpaw",
      height: 166,
      reach: 171
    },
    {
      name: "Arnold Barboza Jr",
      record: "29-0-0",
      division: "super light",
      location: "Los Angeles, California, USA",
      career: "2013-2024",
      stance: "orthodox",
      height: 175,
      reach: 183
    },
    {
      name: "Isaac Cruz",
      record: "26-2-1",
      division: "super light",
      location: "Mexico City, Distrito Federal, Mexico",
      career: "2015-2024",
      stance: "orthodox",
      height: 163,
      reach: 160,
    },
    {
      name: "Masanori Rikishi",
      record: "15-1-0",
      division: "super feather",
      location: "Nagoya, Aichi, Japan",
      career: "2017-2024",
      stance: "southpaw",
      height: 178,
    },
    {
      name: "Giovani Santillan",
      record: "32-0-0",
      division: "welter",
      location: "San Diego, California, USA",
      career: "2012-2023",
      stance: "southpaw",
      height: 173,
      reach: 174,
    },
    {
      name: "Oscar Valdez",
      record: "32-2-0",
      division: "super feather",
      location: "Nogales, Sonora, Mexico",
      career: "2012-2024",
      stance: "orthodox",
      height: 166,
      reach: 168,
    }
  ]
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">People</h1>
      <table className="border-separate border-spacing-2 w-full border border-slate-400 bg-white text-sm shadow-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="w-1/5 border border-slate-300 font-semibold p-4 text-slate-900 text-left">Name</th>
            <th className="w-1/5 border border-slate-300 font-semibold p-4 text-slate-900 text-left">Location</th>
            <th className="w-1/5 border border-slate-300 font-semibold p-4 text-slate-900 text-left">W-L-D</th>
            <th className="w-1/5 border border-slate-300 font-semibold p-4 text-slate-900 text-left">Division</th>
            <th className="w-1/5 border border-slate-300 font-semibold p-4 text-slate-900 text-left">Career</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 p-4 text-slate-500">John Smith</td>
            <td className="border border-slate-300 p-4 text-slate-500">New Zealand</td>
            <td className="border border-slate-300 p-4 text-slate-500">2 1 0</td>
            <td className="border border-slate-300 p-4 text-slate-500">super light</td>
            <td className="border border-slate-300 p-4 text-slate-500">2020-2023</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4 text-slate-500">Juan Garcia</td>
            <td className="border border-slate-300 p-4 text-slate-500">Morocco</td>
            <td className="border border-slate-300 p-4 text-slate-500">3 0 0</td>
            <td className="border border-slate-300 p-4 text-slate-500">light heavy</td>
            <td className="border border-slate-300 p-4 text-slate-500">2020-2024</td>
          </tr>
          <tr>
            <td className="border border-slate-300 p-4 text-slate-500">Andre DePaul</td>
            <td className="border border-slate-300 p-4 text-slate-500">Corsica</td>
            <td className="border border-slate-300 p-4 text-slate-500">1 1 1</td>
            <td className="border border-slate-300 p-4 text-slate-500">feather</td>
            <td className="border border-slate-300 p-4 text-slate-500">2019-2022</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
