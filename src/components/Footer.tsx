import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/toqeer-shafique/',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/toqeer-hussain',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/923440106404',
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M20.463 3.488C18.217 1.24 15.231 0 12.05 0 5.495 0 .16 5.334.157 11.892c0 2.096.546 4.142 1.588 5.945L.057 24l6.304-1.654a11.882 11.882 0 005.693 1.448h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.181-1.237-6.167-3.489-8.413zm-8.413 18.29h-.004a9.866 9.866 0 01-5.031-1.378l-.36-.214-3.741.981 1-3.648-.235-.374a9.84 9.84 0 01-1.51-5.26c0-5.445 4.434-9.878 9.884-9.878 2.641 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.448-4.437 9.878-9.884 9.878zm5.412-7.396c-.296-.148-1.76-.867-2.035-.967-.274-.099-.475-.148-.676.148-.198.297-.77.967-.944 1.165-.173.198-.347.223-.643.074-.297-.148-1.255-.462-2.39-1.474-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.371-.025-.52-.074-.148-.676-1.627-.927-2.228-.244-.586-.492-.507-.676-.516-.173-.009-.372-.01-.57-.01-.199 0-.52.074-.793.371-.273.297-1.042.017-1.042 1.016 0 .998.727 1.963.828 2.16.1.198 1.418 2.166 3.436 3.036 2.018.87 2.018.579 2.381.542.364-.037 1.172-.48 1.338-1.043.165-.562.165-1.043.116-1.145-.05-.099-.248-.158-.545-.307z" clipRule="evenodd" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-sm text-gray-400 max-w-xs">
              Professional safety consulting services for businesses of all sizes.
              Ensuring workplace safety and compliance.
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon({ className: 'h-6 w-6' })}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="tel:+923440106404"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                >
                  <Icon icon="mdi:phone" className="h-5 w-5 mr-2" />
                  +92 344 0106404
                </a>
              </li>
              <li>
                <a
                  href="mailto:iamtoqeer74@gmail.com"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                >
                  <Icon icon="mdi:email" className="h-5 w-5 mr-2" />
                  iamtoqeer74@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923440106404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                >
                  <Icon icon="mdi:whatsapp" className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              {currentYear} HSE Solutions by Toqeer. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-6">
              {navigation.main.slice(4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}