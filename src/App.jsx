import { FaArrowDown } from "react-icons/fa"
import { IoMdDownload } from "react-icons/io"
import { listTools, listProyek } from "./data"

function App() {

  return (
    <>
      {/* Hero Section */}
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

      {/* About section */}
      <div className="py-10 mt-32">
        <div className="xl:w-2/3 lg:3/4 w-full mx-auto bg-zinc-800 rounded-lg p-7">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
            alt=""
            className="w-12 rounded-md sm:hidden mb-10"
          />
          <p className="text-base/loose mb-10">
            Hi, Perkenalkan saya Dias Hafizhan, seorang Frontend Developer, Web Developer dan Designer unttuk UI/UX Design, saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga setiap proyek yang saya kembangkan tidak hanya terlihat menarik tetapi juga memberikan pengalaman prngguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
              alt=""
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div className="">
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div className="">
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-2/3 w-full text-base/loose opacity-50">
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website ataupun Design
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-14 gap-4">
            {listTools.map((item, index) => {
              return (
                <div className="flex items-center gap-2 p-3 border border-zinc-600 group hover:bg-zinc-800 rounded-md cursor-pointer" key={index}>
                  <img
                    src={item.gambar}
                    alt=""
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  />
                  <div className="">
                    <h4 className="font-bold">{item.nama}</h4>
                    <p className="opacity-50">{item.ket}</p>
                  </div>
                </div>

              )
            })}
          </div>
        </div>


      </div>

      {/* Proyek Section */}
      <div className="mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">
          Proyek
        </h1>
        <p className="text-base/loose text-center opacity-50">
          Berikut ini beberapa proyek yang telah saya dibuat
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((item, index) => {
            return (
              <div className="p-4 bg-zinc-800 rounded-md" key={index}>
                <img src={item.gambar} alt="" />
                <div className="">
                  <h1 className="text-2xl font-bold my-4">{item.nama}</h1>
                  <p className="text-base/loose mb-4">{item.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((item, index) => {
                      return (
                        <p key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">
                          {item}
                        </p>
                      )
                    })}
                  </div>
                  <div className="mt-8 text-center">
                    <a href="" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                      Lihat Website
                    </a>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </>
  )
}

export default App
