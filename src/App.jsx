import { FaArrowDown } from "react-icons/fa"
import { IoMdDownload } from "react-icons/io"

function App() {

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6">
        <div className="">
          <div className="bg-zinc-800 w-fit flex items-center gap-3 rounded-2xl p-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
              alt=""
              className="w-10 rounded-md"
            />
            <q>Kode yang indah, lahir dari ketekunan 😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Dias Hafizhan</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang programming dan designer, terutama pada pembuatan website dan design poster, pamflet serta banner, ketertarikan pada bidang ini sudah berlangsung labih dari 4 tahun untuk semua bidang
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 flex gap-2 items-center">
              Download CV <IoMdDownload className="ri-lg" />
            </a>
            <a href="" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 flex gap-2 items-center">
              Lihat Proyek <FaArrowDown />
            </a>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
          alt=""
          className="w-[500px] md:ml-auto"
        />

      </div>
    </>
  )
}

export default App
