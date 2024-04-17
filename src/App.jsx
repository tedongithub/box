import './App.css'

function App() {
  const personSchema = [
    {
      slug: 'name',
      title: 'Name',
    },
    {
      slug: 'location',
      title: 'Location',
    },
    {
      slug: 'wld',
      title: 'W-L-D',
    },
    {
      slug: 'division',
      title: 'Division',
    },
    {
      slug: 'career',
      title: 'Career',
    },
  ]

  const people = [
    {
      name: 'Juan Garcia',
      location: 'Morocco',
      wld: '3-0-0',
      division: 'light heavy',
      career: '2020-2024'
    }
  ]

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">People</h1>
      <table className="border-separate border-spacing-2 w-full border border-slate-400 bg-white text-sm shadow-sm">
        <thead className="bg-slate-50">
          <tr>
            {personSchema.map(person => (
              <th 
                key={person.slug}
                className="w-1/5 border border-slate-300 font-semibold p-4 text-slate-900 text-left"
              >
                {person.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.name}>
              {personSchema.map(s => (
                <td
                  key={s.slug}
                  className="border border-slate-300 p-4 text-slate-500"
                >
                  {person[s.slug]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
