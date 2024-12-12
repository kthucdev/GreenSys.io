import { Search, Globe } from 'lucide-react'
import { Button } from '../ui/button'
import MegaMenu from '../mega-menu/MegaMenu'
import Logo from './Logo'
import Link from 'next/link'
import Container from './Container'

const Header = () => {
    return (
        <Container>
            <header className="flex items-center justify-between py-4 bg-white shadow-sm">
            <Logo />
            <MegaMenu />
            <div className="flex items-center gap-4">
                <Button aria-label="Search" className="py-2 px-3 bg-gray-300 hover:bg-gray-200 rounded-full">
                    <Search className="w-5 h-5 text-gray-600" />
                </Button>
                <Button aria-label="Language" className="py-2 px-3 bg-gray-300 hover:bg-gray-200 rounded-full">
                    <Globe className="w-5 h-5 text-gray-600" />
                </Button>
                <Link href="/login" className="text-gray-600 hover:text-gray-900">
                    Log in
                </Link>
                <Button className="bg-blue-600 text-white font-semibold hover:bg-blue-700 rounded-full">
                    Get a demo
                </Button>
            </div>
        </header>
        </Container>      
    )
}

export default Header