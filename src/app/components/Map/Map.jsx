"use client";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { protectEmail } from '@/app/util';

export const Map = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Our Training Center
          </h2>
          <p className="text-lg text-gray-600">
            Experience world-class training facilities in the heart of Hyderabad
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map iframe */}
          <motion.div
            className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8977827432514!2d78.44559147507726!3d17.43744298391675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8121771ef%3A0x3f1ea367e096a91b!2sAmeerpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1708670144949!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-gradient-to-r from-primary/15 via-primary/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-primary/5 shadow-lg"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600">
                    506/A, Aditya Enclave,<br />
                    Nilagiri Block, 5th Floor,<br />
                    Ameerpet, Hyderabad<br />
                    Telangana - 500016
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91-9032734343</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">info@vritsol.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};