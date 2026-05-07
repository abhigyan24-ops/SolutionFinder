"use client";

import { useRef } from "react";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";

interface CertificateProps {
  name: string;
  chapterName: string;
  score: number;
  total: number;
}

export default function Certificate({ name, chapterName, score, total }: CertificateProps) {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2, // Better resolution
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.download = `Certificate_${name.replace(/\s+/g, "_")}_${chapterName.replace(/\s+/g, "_")}.png`;
      link.href = image;
      link.click();
    } catch (error) {
      console.error("Failed to generate certificate", error);
    }
  };

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  return (
    <div className="flex flex-col items-center mt-8">
      {/* Certificate Container to capture */}
      <div 
        className="w-full overflow-x-auto pb-4 flex justify-center"
      >
        <div 
          ref={certificateRef}
          className="relative w-[800px] h-[550px] bg-white border-[16px] border-[#1a73e8] p-10 text-center flex flex-col justify-between shrink-0 font-syne"
          style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')", backgroundBlendMode: "overlay", backgroundColor: "#f8fafc" }}
        >
          {/* Inner Border */}
          <div className="absolute inset-4 border-2 border-[#1a73e8] border-dashed pointer-events-none"></div>
          
          <div className="z-10 mt-8">
            <h1 className="text-5xl font-extrabold text-[#1a73e8] tracking-widest uppercase mb-2">Certificate</h1>
            <h2 className="text-2xl font-bold text-gray-600 tracking-widest uppercase">Of Achievement</h2>
          </div>

          <div className="z-10 flex-grow flex flex-col justify-center items-center">
            <p className="text-xl text-gray-600 mb-6 font-medium">This is to certify that</p>
            <h3 className="text-4xl font-extrabold text-gray-900 border-b-2 border-gray-300 pb-2 mb-6 min-w-[300px]">
              {name || "Student Name"}
            </h3>
            <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
              has successfully completed the quiz on <br />
              <strong className="text-[#1a73e8] text-xl">{chapterName}</strong><br />
              with a score of <strong className="text-2xl text-green-600 bg-green-50 px-2 rounded-md">{score}/{total}</strong>.
            </p>
          </div>

          <div className="z-10 flex justify-between items-end px-12 mb-8">
            <div className="text-center">
              <div className="border-b border-gray-400 w-40 mb-2"></div>
              <p className="text-sm font-bold text-gray-600">Date: {currentDate}</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#1a73e8] rounded-full flex items-center justify-center text-white font-bold text-lg rotate-[-15deg] shadow-lg mx-auto mb-2 border-4 border-white">
                Solution Finder
              </div>
            </div>
            <div className="text-center">
              <div className="border-b border-gray-400 w-40 mb-2 pt-6 font-signature text-xl">Abhigyan</div>
              <p className="text-sm font-bold text-gray-600">Creator, 2020</p>
            </div>
          </div>
        </div>
      </div>

      <button 
        onClick={handleDownload}
        className="mt-6 flex items-center gap-2 px-8 py-4 bg-[#1a73e8] text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
      >
        <Download size={20} />
        Download Certificate as PNG
      </button>
    </div>
  );
}
