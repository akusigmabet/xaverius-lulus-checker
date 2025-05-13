
import React from 'react';
import StudentsList from '@/components/StudentsList';

const List = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Daftar Kelulusan</h1>
          <h2 className="text-2xl font-semibold mb-2">KELAS 12</h2>
          <h2 className="text-xl font-semibold">SMA Xaverius 3 Palembang</h2>
          <p className="mt-4 text-gray-600">Tahun Ajaran 2024/2025</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <StudentsList />
        </div>
        
        <div className="mt-6 text-center">
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Kembali ke Halaman Utama
          </a>
        </div>
      </div>
    </div>
  );
};

export default List;
