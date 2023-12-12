import Image from 'next/image'

export default function Home() {

  return (
    <main className='flex flex-row min-w-screen'>
      <Sidebar />

    </main>
  )
}


function Sidebar() {
  return (
    <div className='h-screen bg-red-500 w-1/2'></div>
  )
}
