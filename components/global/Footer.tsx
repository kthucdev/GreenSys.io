import Link from "next/link"
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import data from '@/mock/menu.json'
export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container px-4 py-12 mx-auto">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {data.menuItems.map((menuItem) => (
            <div key={menuItem.id} className="space-y-6">
              <Link href="#" className="text-lg font-semibold hover:underline">
                {menuItem.title}
              </Link>
              <ul className="space-y-6">
                {menuItem.children.map((section) => (
                  <li key={section.title}>
                    <div className="mb-3">
                      <Link href="#" className="uppercase text-sm text-gray-500 font-medium mb-2 hover:underline">
                        {section.title}
                      </Link>
                      <ul className="space-y-2 mt-2">
                        {section.children.map((item) => (
                          <li key={item.title}>
                            <Link 
                              className="text-gray-800 hover:underline text-sm" 
                              href={item.href}
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      <div className="flex flex-col gap-6 items-center justify-between pt-12 mt-12 border-t border-zinc-800 md:flex-row">
          <div className="flex gap-8">
            <Link className="text-gray-900  transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="text-gray-900  transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-gray-900  transition-colors" href="#">
              Cookie Settings
            </Link>
          </div>
          <div className="flex gap-4">
            <Link className="text-gray-900  transition-colors" href="#">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="text-gray-900  transition-colors" href="#">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="text-gray-900  transition-colors" href="#">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <div className="text-gray-900">
            © {new Date().getFullYear()} GreenSys. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}