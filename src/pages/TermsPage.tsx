import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

export default function TermsPage() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: `By accessing and using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
    },
    {
      title: 'Services Description',
      content: `Our services include:
        • Safety consulting and advisory
        • Risk assessment and management
        • Safety training programs
        • Workplace safety audits
        • Emergency response planning
        • Safety documentation and compliance support`,
    },
    {
      title: 'User Responsibilities',
      content: `When using our services, you agree to:
        • Provide accurate and complete information
        • Maintain the confidentiality of any account credentials
        • Comply with all applicable laws and regulations
        • Use our services in a professional and ethical manner
        • Not misuse or attempt to exploit our services`,
    },
    {
      title: 'Payment Terms',
      content: `• Payment terms will be specified in individual service agreements
        • All fees are non-refundable unless otherwise stated
        • We reserve the right to modify our fees with reasonable notice
        • Late payments may result in service suspension`,
    },
    {
      title: 'Intellectual Property',
      content: `• All materials, reports, and documentation provided remain our property
        • You may not reproduce or distribute our materials without permission
        • Your use of our services does not transfer any intellectual property rights
        • We respect and expect respect for all intellectual property rights`,
    },
    {
      title: 'Limitation of Liability',
      content: `• Our services are advisory in nature
        • We are not responsible for implementation decisions
        • We do not guarantee specific outcomes
        • Our liability is limited to the fees paid for services`,
    },
    {
      title: 'Confidentiality',
      content: `We maintain strict confidentiality of all client information and expect clients to:
        • Protect confidential information shared during service delivery
        • Use information only for intended purposes
        • Not disclose information to third parties without consent`,
    },
    {
      title: 'Termination',
      content: `• Either party may terminate services with written notice
        • Termination does not affect accrued rights or obligations
        • Confidentiality obligations survive termination
        • Unused prepaid services may be forfeited upon termination`,
    },
    {
      title: 'Contact Information',
      content: `For questions about these terms, please contact us at:
        Email: iamtoqeer74@gmail.com
        Phone: +92 344 0106404`,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <Scale className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Please read these terms carefully before using our services.
            </motion.p>
          </div>

          {/* Content Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={sectionVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Last Updated */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-500 dark:text-gray-500 text-center mt-12"
          >
            Last updated: {new Date().toLocaleDateString()}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
