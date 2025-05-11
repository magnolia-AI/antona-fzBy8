'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CorgiBanner() {
  const [visible, setVisible] = useState(true)
  const [fact, setFact] = useState('')
  
  const corgiFactsArray = [
    "Corgis were originally bred for herding cattle and sheep.",
    "The name 'Corgi' comes from Welsh words 'cor' and 'gi' meaning 'dwarf dog'.",
    "Corgis can run up to 25 mph despite their short legs!",
    "A group of Corgis is called a 'blessing'.",
    "Corgis are the 11th smartest dog breed according to canine psychologist Stanley Coren.",
    "Pembroke Welsh Corgis and Cardigan Welsh Corgis were recognized as separate breeds in 1934.",
    "Corgis have a double coat that sheds heavily twice a year.",
    "Queen Elizabeth II owned more than 30 Corgis during her reign.",
    "Corgis typically live between 12-15 years.",
    "Corgis are natural athletes who excel at agility competitions."
  ]
  
  useEffect(() => {
    const randomFact = corgiFactsArray[Math.floor(Math.random() * corgiFactsArray.length)]
    setFact(randomFact)
  }, [])
  
  if (!visible) return null
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-orange-100 border-t border-orange-200 p-4 shadow-lg z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">ud83dudc15</span>
          <p className="font-medium">Corgi Fact: <span className="text-muted-foreground">{fact}</span></p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="border-orange-300 hover:bg-orange-200"
            onClick={() => {
              const newFact = corgiFactsArray[Math.floor(Math.random() * corgiFactsArray.length)]
              setFact(newFact)
            }}
          >
            New Fact
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setVisible(false)}
          >
            Dismiss
          </Button>
        </div>
      </div>
    </div>
  )
}
