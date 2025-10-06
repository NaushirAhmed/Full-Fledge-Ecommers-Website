import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <div className="bg-gray-700 text-white w-full h-300px flex items-center justify-center p-4">
      <div className="w-full bg-gray-600 rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Get In Touch Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-2">
             Aurai Bhadohi uttar pradesh, India <br />PinCode - 221301
            </p>
            <p className="mb-2">(+91)7084395434</p>
            <p>nuravi@786gmail.com</p>
            <div className='flex items-center justify between gap-3 mt-4'>
            <Link to="/"><img className='w-9' src='/insta.png'/></Link>
             <Link to="/"><img className='w-9' src='/whatsapp.png'/></Link>
              <Link to="/"><img className='w-9' src='/facebook.png'/></Link>
           
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="s/hipping" className="hover:text-blue-600">Shipping Policy</a></li>
              <li><a href="/return" className="hover:text-blue-600">Return & Refund Policy</a></li>
              <li><a href="terms" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="customer" className="hover:text-blue-600">Customer Service</a></li>
              <li><a href="privacy" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="faqs" className="hover:text-blue-600">FAQ</a></li>
            </ul>
          </div>

          {/* Information Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Information</h2>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/products" className="hover:text-blue-600">Shop</a></li>
              <li><a href="contact" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="service" className="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Footer with country indicator */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-white">
         Copyright © 2025, Nuravi — Designed & Maintained By Nuravi
        </div>
      </div>
    </div>
  )
}

export default Footer