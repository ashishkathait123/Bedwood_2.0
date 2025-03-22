'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, FileText } from 'lucide-react'
import Footer from '../Footer'
import Navbar from '../Navbar'

export default function Licensing() {
  const [activeSection, setActiveSection] = useState(null)
  const [activePdf, setActivePdf] = useState(null)

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section)
  }

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'license-grant', title: 'License Grant' },
    { id: 'restrictions', title: 'Restrictions' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'termination', title: 'Termination' },
    { id: 'limitation-of-liability', title: 'Limitation of Liability' },
    { id: 'governing-law', title: 'Governing Law' },
  ]

  const certifications = [
    { id: 'msme', title: 'MSME Certification', src: 'msme.pdf' },
    { id: 'gst', title: 'GST Registration', src: 'gst.pdf' },
    { id: 'trademark', title: 'Trademark Registration', src: 't-mark.pdf' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Licensing</h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          <main className="lg:w-1/2 space-y-6">
            {sections.map((section) => (
              <section key={section.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-100 transition-colors duration-300"
                >
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      activeSection === section.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    activeSection === section.id ? 'max-h-[500px] py-4 px-6' : 'max-h-0'
                  }`}
                >
                  <LicensingContent id={section.id} />
                </div>
              </section>
            ))}
          </main>

          <aside className="lg:w-1/2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Official Certifications</h2>
              <p className="text-gray-600 mb-6">
                Below are our official certifications and registrations, validating our compliance with industry standards:
              </p>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setActivePdf(activePdf === cert.id ? null : cert.id)}
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
                    >
                      <div className="flex items-center">
                        <FileText className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="text-lg font-medium text-gray-900">{cert.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                          activePdf === cert.id ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {activePdf === cert.id && (
                      <div className="p-4 border-t border-gray-200">
                        <iframe
                          src={cert.src}
                          width="100%"
                          height="600px"
                          title={cert.title}
                          className="border border-gray-200 rounded-lg"
                        ></iframe>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  )
}

function LicensingContent({ id }) {
  const content = {
    introduction: 'By using our products, services, and website, you agree to the following licensing terms and conditions.',
    'license-grant': 'Subject to your compliance with these terms, Bedwood Furnishing grants you a limited license to use our products.',
    restrictions: 'You may not reproduce, distribute, or create derivative works based on our products without permission.',
    'intellectual-property': 'All intellectual property rights in our products remain exclusively with Bedwood Furnishing.',
    termination: 'This license will terminate if you fail to comply with any terms stated in this agreement.',
    'limitation-of-liability': 'Bedwood Furnishing is not liable for any damages arising from the use of our products.',
    'governing-law': 'This agreement is governed by the laws of the jurisdiction in which Bedwood Furnishing operates.',
  }

  return <p className="text-gray-600">{content[id]}</p>
}
