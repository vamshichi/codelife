'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Basic Website' },
    { id: 'business', label: 'Business Website' },
    { id: 'ecommerce', label: 'E-commerce Website' },
    { id: 'custom', label: 'Custom Web Apps' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'maintenance', label: 'Website Maintenance' }
  ];

  const pricingData: Record<string, { title: string; price: string; features: string[] }> = {
    basic: {
      title: 'Basic Website',
      price: '₹20,000 - 30,000',
      features: ['Static site with 3-5 pages', 'Mobile-friendly Design', 'Basic SEO Optimization', 'Contact Form', 'Hosting & Domain Setup']
    },
    business: {
      title: 'Business Website',
      price: '',
      features: ['CMS/Admin Panel', '6-10 Pages', 'Advanced SEO Optimization', 'Google Analytics Integration', 'Custom Blog Section']
    },
    ecommerce: {
      title: 'E-commerce Website',
      price: '',
      features: ['Product Catalog', 'Shopping Cart & Payment Integration', 'Order Management', 'User Authentication', 'Basic Inventory System']
    },
    custom: {
      title: 'Custom Web Apps',
      price: '',
      features: ['CRM, SaaS, Job Portals, etc.', 'Custom API Integration', 'Scalable & Secure Architecture', 'Third-party Service Integrations', 'Premium Support']
    },
    uiux: {
      title: 'UI/UX Design',
      price: '',
      features: ['Wireframes & Prototypes', 'Custom UI Designs', 'User Experience Optimization', 'Figma/Adobe XD Designs', 'Mobile & Web UI']
    },
    maintenance: {
      title: 'Website Maintenance',
      price: '',
      features: ['Bug Fixes & Security Updates', 'Content Updates', 'Performance Optimization', 'Monthly Backup & Monitoring', '24/7 Support (Optional)']
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 py-20">
      <h2 className="text-3xl font-bold text-center mb-6">Pricing Plans</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
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
