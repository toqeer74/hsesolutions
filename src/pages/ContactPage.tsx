import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    content: '+92 344 0106404',
    href: 'tel:+923440106404',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    content: 'iamtoqeer74@gmail.com',
    href: 'mailto:iamtoqeer74@gmail.com',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'WhatsApp',
    content: '+92 344 0106404',
    href: 'https://wa.me/923440106404',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Location',
    content: 'Lahore, Pakistan',
    href: 'https://maps.google.com/?q=Lahore,Pakistan',
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have questions about our safety consulting services? We're here to help!
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
          >
            {contactInfo.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === 'Location' ? '_blank' : undefined}
                rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
