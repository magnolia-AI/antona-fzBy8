'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="flex flex-col gap-4 mt-8">
          <a
            href="#about"
            className="px-2 py-1 text-foreground hover:text-orange-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            About Corgis
          </a>
          <a
            href="#gallery"
            className="px-2 py-1 text-foreground hover:text-orange-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Corgi Gallery
          </a>
          <a
            href="#facts"
            className="px-2 py-1 text-foreground hover:text-orange-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Fun Facts
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 
