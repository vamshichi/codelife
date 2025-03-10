'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Website' },
    { id: 'business', label: 'Business Website' },
    { id: 'ecommerce', label: 'E-commerce Website' },
    { id: 'custom', label: 'Custom Website' }
  ];

  const pricingData: Record<string, { title: string; price: string; features: string[] }> = {
    personal: {
      title: 'Personal Website',
      price: '₹15,000 - ₹30,000 ',
      features: ['Responsive Design', 'Basic SEO', 'Contact Form', 'Hosting Included']
    },
    business: {
      title: 'Business Website',
      price: '₹30,000 - ₹50,000',
      features: ['All Personal Features', 'Multiple Pages', 'Advanced SEO', 'Google Analytics']
    },
    ecommerce: {
      title: 'E-commerce Website',
      price: '₹50,000 - ₹1,50,000  ',
      features: ['All Business Features', 'Payment Integration', 'Product Listings', 'Order Management']
    },
    custom: {
      title: 'Custom Website',
      price: 'Contact for Pricing',
      features: ['Fully Customized Solution', 'Scalable Architecture', 'Premium Support']
    }
  };
  

  return (
    <div className="w-full max-w-4xl mx-auto p-6 py-40">
      <h2 className="text-3xl font-bold text-center mb-6">Pricing Plans</h2>
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Card className="shadow-lg border border-gray-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3">{pricingData[activeTab].title}</h3>
          <p className="text-2xl font-bold text-blue-600">{pricingData[activeTab].price}</p>
          <ul className="mt-4 space-y-2">
            {pricingData[activeTab].features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-500">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Pricing;
