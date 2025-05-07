
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UploadCloud } from "lucide-react";

const initialArticles = [
  {
    title: "Pemerintah Resmi Umumkan Kebijakan Baru di Sektor Pendidikan",
    category: "Nasional",
    excerpt:
      "Kebijakan baru ini diharapkan dapat meningkatkan kualitas pendidikan di seluruh Indonesia...",
    image: "https://source.unsplash.com/600x400/?education,indonesia",
  },
  {
    title: "Teknologi AI Diprediksi Mendorong Ekonomi Digital Indonesia",
    category: "Teknologi",
    excerpt:
      "Dengan perkembangan pesat teknologi kecerdasan buatan, Indonesia siap memasuki era baru ekonomi digital...",
    image: "https://source.unsplash.com/600x400/?technology,ai",
  },
  {
    title: "Timnas U-23 Siap Hadapi Final Piala Asia Malam Ini",
    category: "Olahraga",
    excerpt:
      "Pertandingan besar akan berlangsung malam ini saat Timnas U-23 bertemu dengan tim kuat dari Jepang...",
    image: "https://source.unsplash.com/600x400/?football,indonesia",
  },
];

export default function BeritaOnline() {
  const [articles, setArticles] = useState(initialArticles);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    excerpt: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddArticle = () => {
    if (formData.title && formData.category && formData.excerpt && formData.image) {
      setArticles([formData, ...articles]);
      setFormData({ title: "", category: "", excerpt: "", image: "" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 bg-red-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">MbojoNews</h1>
          <div className="flex items-center gap-2">
            <Input placeholder="Cari berita..." className="w-64" />
            <Button variant="secondary">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 mt-6">
        <h2 className="text-xl font-bold mb-4">Upload Berita Baru</h2>
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Input
            name="title"
            placeholder="Judul Berita"
            value={formData.title}
            onChange={handleInputChange}
          />
          <Input
            name="category"
            placeholder="Kategori"
            value={formData.category}
            onChange={handleInputChange}
          />
          <Input
            name="excerpt"
            placeholder="Ringkasan Berita"
            value={formData.excerpt}
            onChange={handleInputChange}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <Button onClick={handleAddArticle} className="bg-red-700 hover:bg-red-800 text-white">
          <UploadCloud className="w-4 h-4 mr-2" /> Upload Berita
        </Button>
      </section>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Card key={index} className="rounded-2xl shadow hover:shadow-lg transition">
            <img
              src={article.image}
              alt={article.title}
              className="rounded-t-2xl w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <span className="text-sm text-red-700 font-semibold uppercase">
                {article.category}
              </span>
              <h2 className="text-lg font-bold my-2">{article.title}</h2>
              <p className="text-sm text-gray-700">{article.excerpt}</p>
              <Button variant="link" className="mt-2 p-0 text-red-700">
                Baca Selengkapnya
              </Button>
            </CardContent>
          </Card>
        ))}
      </main>

      <footer className="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600">
        © 2025 MbojoNews. Semua hak dilindungi undang-undang.
      </footer>
    </div>
  );
}
