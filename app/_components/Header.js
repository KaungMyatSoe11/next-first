import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="bg-slate-600 text-white py-5">
    <div className="container mx-auto">
      <div className="flex justify-between ">
        <div>Logo</div>
        <div className="flex gap-5">
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/post"}>Post</Link>
          <Link href={"/post/region"}>Post by Region</Link>
          <Link href={"/post/region/myanmar"}>
            Post by Region myanmar
          </Link>
          <ShoppingCart size={22} />
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header