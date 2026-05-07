import React from "react";

interface PolicyPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

const PolicyPage: React.FC<PolicyPageProps> = ({ title, lastUpdated, children }) => {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50 min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-500 mb-12">Last Updated: {lastUpdated}</p>
        <div className="max-w-none text-gray-700 leading-relaxed space-y-8 text-lg">
          {children}
        </div>
      </div>
    </main>
  );
};

export default PolicyPage;
