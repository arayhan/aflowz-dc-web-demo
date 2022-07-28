import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';

function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Fade>
        <div className="container py-32 space-y-24">
          <div className="flex flex-col items-center text-center relative space-y-3">
            <h1 className="font-bold text-5xl">Pilih Sekolah</h1>
            <p className="w-3/4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor culpa blanditiis vel nemo
              reprehenderit delectus, aliquam incidunt aut saepe aperiam itaque dignissimos sit eum nisi
              voluptates, sint, repellendus molestiae officiis?
            </p>
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <Link
              to="/sekolah/sdn-1-depok"
              className="shadow-md bg-white rounded-md hover:bg-gray-100 transition-all">
              <div className="border-b p-4">
                <img
                  className="w-full"
                  src="https://siedoo.com/wp-content/uploads/2019/05/Sekolah-Dasar.png"
                  alt="sekolah dasar"
                />
              </div>
              <div className="text-center p-4">
                <div className="text-xl font-semibold">SDN 1 Depok</div>
              </div>
            </Link>
            <Link
              to="/sekolah/sdn-2-depok"
              className="shadow-md bg-white rounded-md hover:bg-gray-100 transition-all">
              <div className="border-b p-4">
                <img
                  className="w-full"
                  src="https://siedoo.com/wp-content/uploads/2019/05/Sekolah-Dasar.png"
                  alt="sekolah dasar"
                />
              </div>
              <div className="text-center p-4">
                <div className="text-xl font-semibold">SDN 2 Depok</div>
              </div>
            </Link>
            <Link
              to="/sekolah/sdn-3-depok"
              className="shadow-md bg-white rounded-md hover:bg-gray-100 transition-all">
              <div className="border-b p-4">
                <img
                  className="w-full"
                  src="https://siedoo.com/wp-content/uploads/2019/05/Sekolah-Dasar.png"
                  alt="sekolah dasar"
                />
              </div>
              <div className="text-center p-4">
                <div className="text-xl font-semibold">SDN 3 Depok</div>
              </div>
            </Link>
            <Link
              to="/sekolah/sdn-4-depok"
              className="shadow-md bg-white rounded-md hover:bg-gray-100 transition-all">
              <div className="border-b p-4">
                <img
                  className="w-full"
                  src="https://siedoo.com/wp-content/uploads/2019/05/Sekolah-Dasar.png"
                  alt="sekolah dasar"
                />
              </div>
              <div className="text-center p-4">
                <div className="text-xl font-semibold">SDN 4 Depok</div>
              </div>
            </Link>
            <Link
              to="/sekolah/sdn-5-depok"
              className="shadow-md bg-white rounded-md hover:bg-gray-100 transition-all">
              <div className="border-b p-4">
                <img
                  className="w-full"
                  src="https://siedoo.com/wp-content/uploads/2019/05/Sekolah-Dasar.png"
                  alt="sekolah dasar"
                />
              </div>
              <div className="text-center p-4">
                <div className="text-xl font-semibold">SDN 5 Depok</div>
              </div>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Home;
