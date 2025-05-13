
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Check, X } from "lucide-react";
import { graduationData } from "@/data/graduation-data";

const Index = () => {
  const [nisn, setNisn] = useState('');
  const [searchResult, setSearchResult] = useState<{
    name: string;
    class: string;
    status: "LULUS" | "TIDAK LULUS" | null;
  } | null>(null);
  const { toast } = useToast();

  const handleSearch = () => {
    if (!nisn.trim()) {
      toast({
        title: "Error",
        description: "Silahkan masukkan NISN",
        variant: "destructive",
      });
      return;
    }

    const student = graduationData.find(student => student.nisn === nisn);
    
    if (student) {
      setSearchResult({
        name: student.name,
        class: student.class,
        status: student.status as "LULUS" | "TIDAK LULUS",
      });
    } else {
      toast({
        title: "Tidak Ditemukan",
        description: "NISN tidak ditemukan. Silahkan periksa kembali.",
        variant: "destructive",
      });
      setSearchResult(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12 px-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Pengumuman Kelulusan</h1>
          <h2 className="text-2xl font-semibold mb-2">KELAS 12</h2>
          <h2 className="text-xl font-semibold">SMA Xaverius 3 Palembang</h2>
          <p className="mt-4 text-gray-600">Masukkan NISN untuk melihat status kelulusan</p>
        </div>

        <div className="flex flex-col sm:flex-row w-full max-w-lg mx-auto gap-3 mb-8">
          <Input 
            placeholder="Masukkan NISN..." 
            value={nisn}
            onChange={(e) => setNisn(e.target.value)}
            className="flex-1" 
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <Button onClick={handleSearch}>Cek Kelulusan</Button>
        </div>

        {searchResult && (
          <Card className={`mx-auto max-w-lg ${
            searchResult.status === "LULUS" 
              ? "bg-green-50 border-green-200" 
              : "bg-red-50 border-red-200"
          }`}>
            <CardHeader>
              <CardTitle className="text-center">Hasil Pencarian</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                searchResult.status === "LULUS" 
                  ? "bg-green-100 text-green-600" 
                  : "bg-red-100 text-red-600"
              }`}>
                {searchResult.status === "LULUS" ? <Check size={32} /> : <X size={32} />}
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold mb-1">{searchResult.name}</h3>
                <p className="text-sm text-gray-600 mb-1">NISN: {nisn}</p>
                <p className="text-sm text-gray-600 mb-3">Kelas: {searchResult.class}</p>
                <p className={`text-xl font-bold ${
                  searchResult.status === "LULUS" 
                    ? "text-green-600" 
                    : "text-red-600"
                }`}>
                  {searchResult.status}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-gray-600">
              Tahun Ajaran 2024/2025
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Index;
