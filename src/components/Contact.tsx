import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error('Error sending email:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Let's Discuss Your Safety Needs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your workplace safety standards? Contact me for professional HSE consultation and services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2 bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Please describe your safety needs..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-primary disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center">Error sending message. Please try again.</p>
                )}
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">Phone</p>
                    <a href="tel:+923440106404" className="text-gray-600 hover:text-emerald-600">
                      +92 344 0106404
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-emerald-600 mt-1" />
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">Email</p>
                    <a href="mailto:iamtoqeer74@gmail.com" className="text-gray-600 hover:text-emerald-600">
                      iamtoqeer74@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-emerald-600 mt-1" />
                  <div className="ml-4">
                    <p className="font-medium text-gray-800">Office</p>
                    <p className="text-gray-600">
                      Toqeer Shafique<br />
                      Safety Consultant<br />
                      Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}