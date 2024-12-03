import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const inputClasses = `
    w-full
    px-4
    py-2
    rounded-lg
    border
    border-gray-300
    focus:border-emerald-500
    focus:ring-2
    focus:ring-emerald-200
    outline-none
    transition-colors
    dark:bg-gray-800
    dark:border-gray-700
    dark:text-white
    dark:focus:border-emerald-400
    dark:focus:ring-emerald-800
  `;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            placeholder="+1 (234) 567-8900"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Company Ltd."
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your safety consulting needs..."
        />
      </div>

      <div className="flex items-center justify-between">
        <Button
          type="submit"
          disabled={status === 'sending'}
          className="w-full sm:w-auto"
        >
          {status === 'sending' ? (
            <>
              <span className="animate-spin mr-2">
                <Send className="w-4 h-4" />
              </span>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>

        {status === 'success' && (
          <div className="flex items-center text-green-600 dark:text-green-400">
            <CheckCircle className="w-5 h-5 mr-2" />
            Message sent successfully!
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-center text-red-600 dark:text-red-400">
            <AlertCircle className="w-5 h-5 mr-2" />
            Failed to send message. Please try again.
          </div>
        )}
      </div>
    </form>
  );
}
