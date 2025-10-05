import Navbar from "@/components/Navbar";
import Certificates from "@/components/Certificates";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificates & Achievements',
  description: 'My collection of certifications, awards, and professional recognitions',
};

export default function CertificatesPage() {
  return (
    <div className="">
      <Navbar />
      <div className="px-4">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-zinc-100 mb-2">Certificates & Achievements</h1>
          <p className="text-zinc-400">A collection of my certifications, awards, and recognitions</p>
        </div>
        <Certificates />
      </div>
    </div>
  );
}
