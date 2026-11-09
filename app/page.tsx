"use client";

import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(1);

  return (
    <main className="min-h-screen bg-[#08051b] text-white p-5">
      <header className="flex justify-between items-center py-5">
        <h1 className="text-2xl font-black text-purple-300">
          ✦ SzStore
        </h1>
        <span className="text-sm text-purple-200">
          GALAXY MARKET
        </span>
      </header>

      <section className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-[#24105a] to-[#08051b] p-7 mt-8">
        <p className="text-purple-300">WELCOME TO</p>
        <h2 className="text-4xl font-black mt-3">
          SZSTORE
        </h2>
        <p className="text-gray-300 mt-3">
          Your Galaxy Growtopia Marketplace
        </p>
        <p className="text-purple-200 mt-6">
          Trusted • Fast • Secure
        </p>
      </section>

      <h2 className="text-xl font-bold mt-10 mb-4">
        ✦ Our Products
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {[
          { name: "Diamond Lock", price: "Rp880" },
          { name: "Blue Gem Lock", price: "Rp88.000" },
        ].map((item) => (
          <div key={item.name}
            className="rounded-2xl border border-purple-500/40 bg-[#17102f] p-4">
            <div className="text-3xl mb-4">💎</div>
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-purple-300 mt-2">{item.price}</p>
            <button
              onClick={() => setAmount(amount + 1)}
              className="bg-purple-600 rounded-xl w-full p-2 mt-4">
              Select
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-400 text-xs mt-12">
        © 2026 SzStore Galaxy
      </p>
    </main>
  );
}
