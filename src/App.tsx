import React, { useState } from "react";
import PeopleTab from "./PeopleTab";
import IncomeTab from "./IncomeTab";

function App() {
  const [activeTab, setActiveTab] = useState("people");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b shadow-sm px-4 py-3 flex items-center gap-4">
        <img src="/tax-on-a-me-logo.png" alt="Tax-On-A-Me" className="h-10 w-auto max-w-[160px]" />
        <h1 className="text-xl font-bold text-gray-800">Tax-On-A-Me</h1>
      </header>
      <main className="flex flex-1">
        <aside className="w-1/5 bg-white border-r p-4 space-y-3 overflow-auto">
          <h2 className="text-lg font-semibold">Inputs</h2>
          {['people', 'income', 'deductions', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={\`w-full px-3 py-2 rounded \${activeTab === tab ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-800"} hover:bg-blue-200\`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </aside>

        <section className="flex-1 p-6 bg-gray-100 overflow-auto">
          {activeTab === "people" && <PeopleTab />}
          {activeTab === "income" && <IncomeTab />}
          {activeTab === "deductions" && <div className="text-gray-600">Deductions tab coming soon</div>}
          {activeTab === "settings" && <div className="text-gray-600">Settings tab coming soon</div>}
        </section>

        <aside className="w-1/4 bg-white border-l p-4 space-y-4 overflow-auto">
          <h2 className="text-lg font-semibold">Output Summary</h2>
          <div className="text-sm">
            <p><strong>AGI:</strong> $85,600</p>
            <p><strong>Total Tax:</strong> $10,006</p>
            <p><strong>Effective Rate:</strong> 11%</p>
            <p><strong>Marginal Rate:</strong> 22%</p>
          </div>
          <hr />
          <div>
            <label className="block text-sm font-medium">Tax Year</label>
            <select className="mt-1 block w-full border rounded px-2 py-1">
              <option>2024</option>
              <option selected>2025</option>
              <option>2026</option>
            </select>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="mr-2" checked />
                Apply TCJA (2017)
              </label>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
