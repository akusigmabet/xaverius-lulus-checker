
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { graduationData } from "@/data/graduation-data";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Check, X } from "lucide-react";

const StudentsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredStudents = graduationData.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.nisn.includes(searchTerm) ||
    student.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="mb-6">
        <Input 
          placeholder="Cari berdasarkan nama, NISN, atau kelas..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableCaption>
            Daftar Kelulusan Siswa Kelas 12 SMA Xaverius 3 Palembang
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">No</TableHead>
              <TableHead>NISN</TableHead>
              <TableHead>Nama Siswa</TableHead>
              <TableHead>Kelas</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <TableRow key={student.nisn}>
                  <TableCell>{student.no}</TableCell>
                  <TableCell>{student.nisn}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                      student.status === "LULUS" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {student.status === "LULUS" 
                        ? <><Check className="w-4 h-4 mr-1" /> LULUS</> 
                        : <><X className="w-4 h-4 mr-1" /> TIDAK LULUS</>
                      }
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8">
                  Tidak ada data yang sesuai dengan pencarian
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentsList;
