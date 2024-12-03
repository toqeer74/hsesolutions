import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information Collection',
      content: `We collect information that you provide directly to us when using our services, including:
        • Contact information (name, email, phone number)
        • Professional information (company, role)
        • Communication preferences
        • Inquiry and consultation details`,
    },
    {
      title: 'Use of Information',
      content: `We use the collected information to:
        • Provide and improve our safety consulting services
        • Respond to your inquiries and requests
        • Send relevant updates and communications
        • Maintain and enhance our service quality`,
    },
    {
      title: 'Information Sharing',
      content: `We do not sell, trade, or otherwise transfer your personal information to third parties. Your information may be shared only:
        • With your consent
        • To comply with legal obligations
        • To protect our rights and safety`,
    },
    {
      title: 'Data Security',
      content: `We implement appropriate security measures to protect your personal information, including:
        • Encryption of sensitive data
        • Regular security assessments
        • Limited access to personal information
        • Secure data storage practices`,
    },
    {
      title: 'Your Rights',
      content: `You have the right to:
        • Access your personal information
        • Request corrections to your data
        • Opt-out of marketing communications
        • Request deletion of your information
        • Withdraw consent at any time`,
    },
    {
      title: 'Contact Us',
      content: `If you have questions about this privacy policy or our practices, please contact us at:
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
              <Shield className="w-16 h-16 text-emerald-600 dark:text-emerald-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-400"
            >
              Your privacy is important to us. This policy outlines how we collect,
              use, and protect your personal information.
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
