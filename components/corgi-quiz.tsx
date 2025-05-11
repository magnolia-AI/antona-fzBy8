'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

type Question = {
  question: string
  options: string[]
  answer: number
}

const quizQuestions: Question[] = [
  {
    question: "What breed of dog was favored by Queen Elizabeth II?",
    options: ["Pembroke Welsh Corgi", "Cardigan Welsh Corgi", "English Corgi", "Royal Corgi"],
    answer: 0
  },
  {
    question: "What does the Welsh word 'Corgi' translate to in English?",
    options: ["Royal Dog", "Short Dog", "Dwarf Dog", "Herding Dog"],
    answer: 2
  },
  {
    question: "What were Corgis originally bred to do?",
    options: ["Hunt rabbits", "Herd cattle and sheep", "Guard royal castles", "Retrieve game"],
    answer: 1
  },
  {
    question: "What is a group of Corgis called?",
    options: ["A pack", "A herd", "A blessing", "A waddle"],
    answer: 2
  },
  {
    question: "Which of these is NOT a common Corgi color?",
    options: ["Red", "Sable", "Blue merle", "Pure white"],
    answer: 3
  }
]

export function CorgiQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  
  const handleStartQuiz = () => {
    setQuizStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setShowResults(false)
    setSelectedOption(null)
  }
  
  const handleAnswer = () => {
    if (selectedOption === null) return
    
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1)
    }
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
    } else {
      setShowResults(true)
    }
  }
  
  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setShowResults(false)
  }
  
  if (!quizStarted) {
    return (
      <Card className="w-full max-w-[600px] mx-auto border-orange-200 shadow-md">
        <CardHeader className="text-center bg-orange-50 rounded-t-lg">
          <CardTitle className="text-2xl text-orange-600">Corgi Knowledge Quiz</CardTitle>
          <CardDescription>Test your knowledge about these adorable pups!</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 text-center">
          <p className="mb-6">This quiz contains {quizQuestions.length} questions about Corgis. See how much you know about these royal pups!</p>
          <Button 
            onClick={handleStartQuiz}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Start Quiz
          </Button>
        </CardContent>
      </Card>
    )
  }
  
  if (showResults) {
    return (
      <Card className="w-full max-w-[600px] mx-auto border-orange-200 shadow-md">
        <CardHeader className="text-center bg-orange-50 rounded-t-lg">
          <CardTitle className="text-2xl text-orange-600">Quiz Results</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 text-center">
          <p className="text-xl mb-2">Your score: <span className="font-bold text-orange-600">{score}/{quizQuestions.length}</span></p>
          <p className="mb-6">
            {score === quizQuestions.length ? 
              "Perfect score! You're a true Corgi expert!" :
              score >= quizQuestions.length / 2 ?
                "Great job! You know your Corgis pretty well!" :
                "Keep learning about Corgis! They're amazing dogs!"}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button 
            onClick={handleRestart}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Try Again
          </Button>
        </CardFooter>
      </Card>
    )
  }
  
  return (
    <Card className="w-full max-w-[600px] mx-auto border-orange-200 shadow-md">
      <CardHeader className="bg-orange-50 rounded-t-lg">
        <CardTitle className="text-xl text-orange-600">Question {currentQuestion + 1} of {quizQuestions.length}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-lg font-medium mb-4">{quizQuestions[currentQuestion].question}</p>
        <RadioGroup value={selectedOption?.toString()} onValueChange={(value) => setSelectedOption(parseInt(value))}>
          <div className="space-y-3">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="cursor-pointer">{option}</Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setQuizStarted(false)}
          className="border-orange-300 hover:bg-orange-100"
        >
          Cancel
        </Button>
        <Button 
          onClick={handleAnswer} 
          disabled={selectedOption === null}
          className="bg-orange-500 hover:bg-orange-600"
        >
          {currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  )
}
