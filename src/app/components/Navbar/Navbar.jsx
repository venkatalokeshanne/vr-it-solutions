"use client";
import React, { useState } from "react";
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
import SearchBar from "../SearchBar";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categoryList = [
    {
      name: "Development",
      subcategories: [
        "Web Development",
        "Mobile Development",
        "Game Development",
      ],
      icon: <Code className="w-5 h-5" />,
    },
    {
      name: "Business",
      subcategories: ["Entrepreneurship", "Marketing", "Finance"],
      icon: <Building2 className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-primary/10 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Categories */}
            <div className="flex items-center space-x-8">
              <Link href="/">
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
                      className="group/item px-4 py-2 hover:bg-primary-light"
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
                      <div className="absolute left-full top-0 w-60 bg-white shadow-lg rounded-lg py-2 invisible group-hover/item:visible">
                        {category.subcategories.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <SearchBar />
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-6">
              <button className="text-sm text-gray-700 hover:text-primary">
                Blogs
              </button>
              <button className="text-sm text-gray-700 hover:text-primary">
                About us
              </button>
              <button className="text-primary hover:text-primary-hover">
                <Heart className="h-5 w-5" />
              </button>
              <button className="text-sm font-medium text-white bg-primary px-6 py-2.5 rounded-md hover:bg-primary-hover transition-colors duration-200">
                Request demo
              </button>
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
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-8" />
            </Link>
            <button className="text-sm font-medium text-white bg-primary px-4 py-2 rounded-md">
              Request Demo
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`
          fixed inset-0 top-16 bg-white z-40
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          <div className="p-4">
            {/* Mobile Search */}
            <div className="mb-6">
              <SearchBar />
            </div>

            {/* Mobile Categories */}
            <div className="space-y-4">
              {categoryList.map((category) => (
                <div key={category.name}>
                  <span>
                    {category.icon}
                    {category.name}
                  </span>
                  {category.subcategories.map((sub) => (
                    <button
                      key={sub}
                      className="w-full text-left text-sm text-gray-600 hover:text-primary hover:bg-primary-light"
                    >
                      {sub}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-6 space-y-4 border-t pt-6">
              <button className="text-gray-700 hover:text-primary w-full py-2 text-left">
                Blog
              </button>
              <button className="text-gray-700 hover:text-primary w-full py-2 text-left">
                About us
              </button>
              <button className="w-full bg-primary text-white py-2.5 rounded-md hover:bg-primary-hover">
                Request for free demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
