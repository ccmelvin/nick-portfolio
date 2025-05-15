import Link from "next/link"
import { Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif text-2xl text-[#333333] font-light">
              Nick
            </Link>
            <p className="font-sans text-[#555555] mt-4 max-w-md">
              A creative studio specializing in branding, web design, and digital experiences that connect with your
              audience.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-[#333333] hover:text-[#888888] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-[#333333] hover:text-[#888888] transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-[#333333] hover:text-[#888888] transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#333333] mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="font-sans text-sm text-[#555555] hover:text-[#333333] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="font-sans text-sm text-[#555555] hover:text-[#333333] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="font-sans text-sm text-[#555555] hover:text-[#333333] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="font-sans text-sm text-[#555555] hover:text-[#333333] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="font-sans text-sm text-[#555555] hover:text-[#333333] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg text-[#333333] mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="font-sans text-sm text-[#555555]">hello@example.com</li>
              <li className="font-sans text-sm text-[#555555]">+1 (555) 123-4567</li>
              <li className="font-sans text-sm text-[#555555]">New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#e5e5e5] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-sans text-sm text-[#555555]">© {new Date().getFullYear()} Nick. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="font-sans text-sm text-[#555555] hover:text-[#333333] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-sans text-sm text-[#555555] hover:text-[#333333] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
