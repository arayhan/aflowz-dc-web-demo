import React from 'react';
import { Fade } from 'react-reveal';
import Table from './components/Table';

const Sekolah = () => {
  return (
    <Fade>
      <header className="relative z-20 w-full h-72 bg-gray-100">
        <img
          className="object-cover object-center w-full h-full"
          src="https://i0.wp.com/agungrangga.com/wp-content/uploads/2017/03/kenangan-masa-sekolah-dasar.jpg?fit=700%2C465&ssl=1"
          alt=""
        />
        <div className="absolute bottom-0  w-full left-0">
          <div className="container">
            <div className="w-40 h-40 flex items-center justify-center bg-white shadow-md p-2 rounded-full transform translate-y-1/3">
              <img
                className="w-full"
                src="https://siedoo.com/wp-content/uploads/2019/05/Sekolah-Dasar.png"
                alt="sekolah dasar"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 py-20 bg-gray-50">
        <div className="container space-y-12">
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold">Sekolah Dasar Negeri 1 Depok</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere facilis dolor voluptatibus
                dolores, modi ipsa perferendis. Repellendus laboriosam labore, nobis illo, beatae quisquam dolorem
                ea rem sunt necessitatibus aliquid.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white shadow-md rounded-md text-center">
                <div className="space-y-2 border-b p-5">
                  <div className="text-sm text-gray-500">Total Penerima</div>
                  <div className="text-xl md:text-3xl font-semibold">PIP</div>
                </div>
                <div className="p-4">100</div>
              </div>
              <div className="bg-white shadow-md rounded-md text-center">
                <div className="space-y-2 border-b p-5">
                  <div className="text-sm text-gray-500">Total Penerima</div>
                  <div className="text-xl md:text-3xl font-semibold">KIP</div>
                </div>
                <div className="p-4">100</div>
              </div>
              <div className="bg-white shadow-md rounded-md text-center">
                <div className="space-y-2 border-b p-5">
                  <div className="text-sm text-gray-500">Total Penerima</div>
                  <div className="text-xl md:text-3xl font-semibold">Bimtek</div>
                </div>
                <div className="p-4">100</div>
              </div>
              <div className="bg-white shadow-md rounded-md text-center">
                <div className="space-y-2 border-b p-5">
                  <div className="text-sm text-gray-500">Total Penerima</div>
                  <div className="text-xl md:text-3xl font-semibold">Bantuan</div>
                </div>
                <div className="p-4">100</div>
              </div>
            </div>
          </div>

          <hr />

          <div className="space-y-4">
            <div className="flex justify-end">
              <select className="rounded-md">
                <option value="All">Lihat Semua</option>
                <option value="2019">2019</option>
              </select>
            </div>
            <div className="overflow-x-scroll">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Sekolah;
