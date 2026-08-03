"use client";

import React from "react";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 sm:px-8 md:px-12 lg:px-[4.5cm] border-t border-gray-100">
      <div className="w-full mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1.25fr] gap-10 lg:gap-8 mb-16">

          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-start pr-4">
            {/* Logo */}
            <div className="mb-5 flex items-center">
              <Image src="/images/techosa.png" alt="Techosa Logo" width={150} height={42} className="object-contain" />
            </div>

            <p className="text-[#666] text-lg leading-relaxed mb-8 max-w-90">
              We're always in search for talented and motivated people.Don't be shy introduce yourself!
            </p>

            {/* Gradient Border Button */}
            <div className="relative group inline-block">
              <div className="absolute -inset-0.5 bg-linear-to-r from-[#4461E4] to-[#A445E7] rounded-full blur opacity-40 group-hover:opacity-75 transition duration-200"></div>
              <button className="relative bg-white text-[#1a1a2e] font-semibold text-base px-7 py-3.5 rounded-full border-[1.5px] border-transparent bg-clip-padding flex items-center justify-center gap-2"
                style={{
                  background: 'linear-gradient(white, white) padding-box, linear-gradient(90deg, #4461E4, #A445E7) border-box',
                  border: '2px solid transparent'
                }}>
                Contact With Us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-2xl font-extrabold text-[#1a1a2e] mb-6">Useful Links</h4>
            <ul className="space-y-4 text-[#666] text-lg font-medium">
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">kindergarten</a></li>
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">University</a></li>
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">Classic Lms</a></li>
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Our Company */}
          <div>
            <h4 className="text-2xl font-extrabold text-[#1a1a2e] mb-6">Our Company</h4>
            <ul className="space-y-4 text-[#666] text-lg font-medium">
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">Become Teacher</a></li>
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">Instructor</a></li>
              <li><a href="#" className="hover:text-[#4461E4] transition-colors">Events</a></li>
            </ul>
          </div>

          {/* Column 4: Get Contact */}
          <div>
            <h4 className="text-2xl font-extrabold text-[#1a1a2e] mb-6">Get Contact</h4>
            <ul className="space-y-4 text-[#666] text-lg font-medium mb-8">
              <li>Phone: <a href="tel:4065550120" className="hover:text-[#4461E4] transition-colors">(406) 555-0120</a></li>
              <li>E-mail: <a href="mailto:rainbow@example.com" className="hover:text-[#4461E4] transition-colors">rainbow@example.com</a></li>
              <li>Location: North America, USA</li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#888]">
              <a href="#" className="hover:text-[#4461E4] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-[#4461E4] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="hover:text-[#4461E4] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-[#4461E4] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-lg text-[#888] font-medium">
          <div>
            Copyright © 2025 <span className="font-extrabold text-[#1a1a2e]">Techosa.</span> All Rights Reserved
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a href="#" className="hover:text-[#4461E4] transition-colors">Terms of service</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#4461E4] transition-colors">Privacy policy</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#4461E4] transition-colors">Subscription</a>

          </div>
        </div>
      </div>
    </footer>
  );
}
