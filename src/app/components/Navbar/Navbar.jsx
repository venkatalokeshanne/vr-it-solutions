"use client";
import React, { useState, useCallback } from "react";
import {
  Book,
  Building2,
  ChevronDown,
  ChevronRight,
  Code,
  Heart,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { getFormattedCategories } from "@/data/courses";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const categoryList = getFormattedCategories();

  const handleMenuItemClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-primary/10 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Categories */}
            <div className="flex items-center space-x-8">
              <Link href="/" onClick={handleMenuItemClick}>
                <img src="/logo.png" alt="Logo" className="h-8" />
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-sm text-gray-700 hover:text-primary">
                  <span>Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {/* Categories Dropdown */}
                <div className="absolute top-full left-0 w-60 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {categoryList.map((category) => (
                    <div
                      key={category.name}
                      className="group/item px-4 py-2 hover:bg-primary-light relative"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-primary">{category.icon}</div>
                          <span className="text-sm font-medium group-hover:text-primary">
                            {category.name}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </div>
                      <div className="absolute left-full top-0 w-60 bg-white shadow-lg rounded-lg py-2 invisible group-hover/item:visible opacity-0 group-hover/item:opacity-100 transition-all duration-200">
                        {category.subcategories.map((sub) => (
                          <Link
                            key={`${category.name}-${sub.name}`}
                            href={sub.link}
                            onClick={handleMenuItemClick}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-6">
              <Link href="/courses" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">
                Courses
              </Link>
              <Link href="/services" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">
                Services
              </Link>
              <Link href="/aboutus" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">
                About Us
              </Link>
              <Link href="/contactus" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">
                Contact Us
              </Link>
              <button className="text-primary hover:text-primary-hover">
                <Heart className="h-5 w-5" />
              </button>
              <Link 
                href="/contactus"
                onClick={handleMenuItemClick}
                className="text-sm font-medium text-white bg-primary px-6 py-2.5 rounded-md hover:bg-primary-hover transition-colors duration-200"
              >
                Request demo
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
          <div
            className="flex items-center justify-between px-4 h-full"
            style={{ maxWidth: "100vw" }}
          >
            <button
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <Link href="/" onClick={handleMenuItemClick}>
              <img src="/logo.png" alt="Logo" className="h-8" />
            </Link>
            <Link 
              href="/demo"
              onClick={handleMenuItemClick}
              className="text-sm font-medium text-white bg-primary px-4 py-2 rounded-md"
            >
              Request Demo
            </Link>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`
          fixed inset-0 top-16 bg-white z-40
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="p-4 pb-24">
            {/* Mobile Categories */}
            <div className="space-y-4">
              {categoryList.map((category) => (
                <div key={category.name} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-primary">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <div className="pl-8 space-y-2">
                    {category.subcategories.map((sub) => (
                      <Link
                        key={`${category.name}-${sub.name}`}
                        href={sub.link}
                        onClick={handleMenuItemClick}
                        className="block w-full text-left text-sm text-gray-600 hover:text-primary hover:bg-primary-light px-3 py-2 rounded-md"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-6 space-y-4 border-t pt-6">
              <Link 
                href="/courses" 
                onClick={handleMenuItemClick}
                className="block text-gray-700 hover:text-primary w-full py-2 text-left"
              >
                Courses
              </Link>
              <Link 
                href="/services" 
                onClick={handleMenuItemClick}
                className="block text-gray-700 hover:text-primary w-full py-2 text-left"
              >
                Services
              </Link>
              <Link 
                href="/aboutus" 
                onClick={handleMenuItemClick}
                className="block text-gray-700 hover:text-primary w-full py-2 text-left"
              >
                About Us
              </Link>
              <Link 
                href="/contactus" 
                onClick={handleMenuItemClick}
                className="block text-gray-700 hover:text-primary w-full py-2 text-left"
              >
                Contact Us
              </Link>
              <Link 
                href="/contactus"
                onClick={handleMenuItemClick}
                className="block w-full bg-primary text-white py-2.5 rounded-md hover:bg-primary-hover text-center"
              >
                Request for free demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;