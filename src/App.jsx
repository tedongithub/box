import './App.css'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        { /* no w-56 */ }
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({active}) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                  onClick={ () => {
                    console.log('clicked')
                  }}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Support
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  License
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">People</h1>
      <Dropdown />
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
