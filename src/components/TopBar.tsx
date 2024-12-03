import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-emerald-600 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-6">
            <a href="mailto:iamtoqeer74@gmail.com" className="flex items-center hover:text-emerald-200 text-sm">
              <Mail className="h-4 w-4 mr-2" />
              iamtoqeer74@gmail.com
            </a>
            <a href="tel:+923440106404" className="flex items-center hover:text-emerald-200 text-sm">
              <Phone className="h-4 w-4 mr-2" />
              +92 344 0106404
            </a>
          </div>
          <a 
            href="https://wa.me/923440106404" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center hover:text-emerald-200 text-sm"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
