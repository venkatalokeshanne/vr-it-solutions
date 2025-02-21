import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">AchieversIT</h3>
            <p className="mb-4">
              Leading IT training institute providing quality education and placement assistance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses" className="hover:text-white">Courses</Link>
              </li>
              <li>
                <Link href="/corporate-training" className="hover:text-white">Corporate Training</Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-white">Placements</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/full-stack" className="hover:text-white">Full Stack Development</Link>
              </li>
              <li>
                <Link href="/courses/data-science" className="hover:text-white">Data Science</Link>
              </li>
              <li>
                <Link href="/courses/cloud" className="hover:text-white">Cloud Computing</Link>
              </li>
              <li>
                <Link href="/courses/devops" className="hover:text-white">DevOps</Link>
              </li>
              <li>
                <Link href="/courses/testing" className="hover:text-white">Software Testing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1" />
                <span>BTM Layout, 2nd Stage, Bangalore - 560076</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>+91 8880 4444 22</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span>info@achieversit.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} AchieversIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer