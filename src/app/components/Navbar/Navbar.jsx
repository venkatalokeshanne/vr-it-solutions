"use client";
import React, { useState, useCallback, useEffect } from "react";
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
import Image from "next/image";
import { client } from "@/lib/sanity.client";
import { getFormattedCategories } from "@/data/courses"; // Kept as fallback

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get categories and courses from Sanity
  useEffect(() => {
    const fetchCoursesAndCategories = async () => {
      try {
        // Fetch all course images with their categories
        const courses = await client.fetch(`
          *[_type == "courseImage"] {
            title,
            link,
            category
          } | order(title asc)
        `);

        // Group courses by category
        const categoriesMap = {};
        courses.forEach(course => {
          const category = course.category || "Uncategorized";
          
          if (!categoriesMap[category]) {
            categoriesMap[category] = {
              name: category,
              icon: getCategoryIcon(category),
              subcategories: []
            };
          }
          
          categoriesMap[category].subcategories.push({
            name: course.title,
            link: `/${course.link}`
          });
        });

        // Convert map to array
        const categoriesArray = Object.values(categoriesMap);
        setCategories(categoriesArray);
      } catch (error) {
        console.error("Error fetching courses and categories:", error);
        // Fallback to static data if fetch fails
        setCategories(getFormattedCategories());
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoursesAndCategories();
  }, []);

  // Helper to get icon based on category name
  const getCategoryIcon = (categoryName) => {
    const normalizedName = categoryName.toLowerCase();
    
    if (normalizedName.includes("cloud") || normalizedName.includes("aws") || normalizedName.includes("azure")) {
      return <Code className="h-5 w-5" />;
    } else if (normalizedName.includes("data") || normalizedName.includes("analytics")) {
      return <Building2 className="h-5 w-5" />;
    } else if (normalizedName.includes("sap") || normalizedName.includes("erp")) {
      return <Book className="h-5 w-5" />;
    } else if (normalizedName.includes("healthcare") || normalizedName.includes("clinical")) {
      return <Heart className="h-5 w-5" />;
    }
    
    // Default icon
    return <Code className="h-5 w-5" />;
  };

  const handleMenuItemClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Use fetched categories or fallback to static list if empty
  const categoryList = categories.length > 0 ? categories : getFormattedCategories();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-primary/10 sticky top-[38px] bg-white z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Categories */}
            <div className="flex items-center space-x-8">
              <Link href="/" onClick={handleMenuItemClick}>
                <div className="relative h-12 w-[160px]">
                  <Image
                    src="/logo.png"
                    alt="VR IT Solutions Logo"
                    fill
                    sizes="160px"
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-sm text-gray-700 hover:text-primary"
                  aria-label="View categories"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span>Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {/* Categories Dropdown */}
                <div 
                  className="absolute top-full left-0 w-60 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                  role="menu"
                >
                  {isLoading ? (
                    <div className="px-4 py-2 text-sm text-gray-500">Loading categories...</div>
                  ) : (
                    categoryList.map((category) => (
                      <div
                        key={category.name}
                        className="group/item px-4 py-2 hover:bg-primary-light relative"
                        role="menuitem"
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
                        <div 
                          className="absolute left-full top-0 w-60 bg-white shadow-lg rounded-lg py-2 invisible group-hover/item:visible opacity-0 group-hover/item:opacity-100 transition-all duration-200"
                          role="menu"
                        >
                          {category.subcategories.map((sub) => (
                            <Link
                              key={`${category.name}-${sub.name}`}
                              href={sub.link}
                              onClick={handleMenuItemClick}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                              role="menuitem"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-6">
              <Link href="/courses" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">
                Courses
              </Link>
              <Link href="/blogs" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">Blogs</Link>
              <Link href="/services" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">
                Services
              </Link>
              <Link href="/aboutus" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">
                About Us
              </Link>
              <Link href="/contactus" onClick={handleMenuItemClick} className="text-sm text-gray-700 hover:text-primary">
                Contact Us
              </Link>
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
        <div className="fixed top-[38px] left-0 right-0 h-16 bg-white border-b border-gray-200 z-40">
          <div
            className="flex items-center justify-between px-4 h-full"
            style={{ maxWidth: "100vw" }}
          >
            <button
              className="text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <Link href="/" onClick={handleMenuItemClick}>
              <div className="relative h-10 w-[130px]">
                <Image
                  src="/logo.png"
                  alt="VR IT Solutions Logo"
                  fill
                  sizes="130px"
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
            <Link 
              href="/contactus"
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
          fixed inset-0 top-[calc(38px+64px)] bg-white z-30
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="p-4 pb-24">
            {/* Mobile Categories */}
            <div className="space-y-4">
              {isLoading ? (
                <div className="text-sm text-gray-500 py-4">Loading categories...</div>
              ) : (
                categoryList.map((category) => (
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
                ))
              )}
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
                href="/blogs" 
                onClick={handleMenuItemClick}
                className="block text-gray-700 hover:text-primary w-full py-2 text-left"
              >
                Blogs
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