"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  ChevronLeft,
  BarChart3,
  PiggyBank,
  TrendingUp,
  BookOpen,
  Target,
  MessageSquare,
  Bell,
  Settings,
  User,
  ChevronDown,
  Search,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  HelpCircle,
  Calendar,
  MoreVertical,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function FinWiseApp() {
  const [currentTab, setCurrentTab] = useState("dashboard")
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [currentOnboardingStep, setCurrentOnboardingStep] = useState(0)

  const onboardingSteps = [
    {
      title: "Welcome to FinWise",
      description: "Your personal finance companion that makes managing money simple and professional.",
      icon: "🚀",
    },
    {
      title: "Learn at Your Pace",
      description: "Bite-sized financial lessons that fit into your busy schedule.",
      icon: "📚",
    },
    {
      title: "Set Meaningful Goals",
      description: "Define what matters to you and track your progress along the way.",
      icon: "🎯",
    },
    {
      title: "Connect with Your Advisor",
      description: "Seamless collaboration with your bank manager, on your schedule.",
      icon: "🤝",
    },
  ]

  const handleNextStep = () => {
    if (currentOnboardingStep < onboardingSteps.length - 1) {
      setCurrentOnboardingStep(currentOnboardingStep + 1)
    } else {
      setShowOnboarding(false)
    }
  }

  const handlePrevStep = () => {
    if (currentOnboardingStep > 0) {
      setCurrentOnboardingStep(currentOnboardingStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {showOnboarding ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-md border border-gray-100 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentOnboardingStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-6"
                >
                  <div className="flex flex-col items-center text-center mb-8">
                    <motion.div
                      className="text-6xl mb-4"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      {onboardingSteps[currentOnboardingStep].icon}
                    </motion.div>
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">
                      {onboardingSteps[currentOnboardingStep].title}
                    </h2>
                    <p className="text-gray-600">{onboardingSteps[currentOnboardingStep].description}</p>
                  </div>

                  <div className="flex justify-between items-center">
                    <Button
                      variant="ghost"
                      onClick={handlePrevStep}
                      disabled={currentOnboardingStep === 0}
                      className="text-gray-600 hover:bg-gray-100"
                    >
                      <ChevronLeft className="mr-1" size={16} />
                      Back
                    </Button>

                    <div className="flex space-x-1">
                      {onboardingSteps.map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 rounded-full w-6 ${
                            index === currentOnboardingStep ? "bg-green-500" : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>

                    <Button onClick={handleNextStep} className="bg-green-600 hover:bg-green-700 text-white">
                      {currentOnboardingStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
                      <ChevronRight className="ml-1" size={16} />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 border-r border-gray-200 bg-white flex flex-col">
            <div className="p-4 border-b border-gray-200 flex items-center">
              <PiggyBank className="h-6 w-6 text-green-600 mr-2" />
              <h1 className="text-xl font-bold text-green-600">FinWise</h1>
            </div>

            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dipa" />
                  <AvatarFallback className="bg-green-100 text-green-800">D</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Dipa Sharma</p>
                  <p className="text-xs text-gray-500">Premium Account</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              <p className="text-xs font-semibold text-gray-500 mb-2 pl-2">GENERAL</p>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  currentTab === "dashboard" ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentTab("dashboard")}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  currentTab === "learn" ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentTab("learn")}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Learn
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  currentTab === "goals" ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentTab("goals")}
              >
                <Target className="h-4 w-4 mr-2" />
                Goals
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  currentTab === "advisor" ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentTab("advisor")}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Advisor
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  currentTab === "insights" ? "bg-green-50 text-green-700" : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setCurrentTab("insights")}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Insights
              </Button>

              <Separator className="my-4" />

              <p className="text-xs font-semibold text-gray-500 mb-2 pl-2">SETTINGS</p>
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-100">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-100">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-600 hover:bg-gray-100">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help & Support
              </Button>
            </nav>

            <div className="p-4 border-t border-gray-200">
              <div className="bg-green-50 rounded-lg p-3">
                <p className="text-sm font-medium text-green-800 mb-1">Need assistance?</p>
                <p className="text-xs text-green-700 mb-2">Schedule a call with your advisor</p>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6">
              <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  className="pl-8 h-9 bg-gray-50 border-gray-200 focus-visible:ring-green-500"
                />
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon" className="text-gray-500 border-gray-200">
                  <Bell size={18} />
                </Button>
                <Button variant="outline" size="icon" className="text-gray-500 border-gray-200">
                  <Calendar size={18} />
                </Button>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Dipa" />
                    <AvatarFallback className="bg-green-100 text-green-800">D</AvatarFallback>
                  </Avatar>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
              </div>
            </header>

            {/* Content */}
            <main className="flex-1 overflow-auto bg-gray-50 p-6">
              {currentTab === "dashboard" && <DashboardTab />}
              {currentTab === "learn" && <LearningTab />}
              {currentTab === "goals" && <GoalsTab />}
              {currentTab === "advisor" && <AdvisorTab />}
              {currentTab === "insights" && <InsightsTab />}
            </main>
          </div>
        </div>
      )}
    </div>
  )
}

function DashboardTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-500">Welcome back, Dipa! Here's your financial overview.</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
          <Card className="border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,85,400</div>
              <div className="flex items-center mt-1 text-sm">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  12.5%
                </Badge>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Monthly Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹75,000</div>
              <div className="flex items-center mt-1 text-sm">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  5.2%
                </Badge>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Monthly Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹42,800</div>
              <div className="flex items-center mt-1 text-sm">
                <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  2.4%
                </Badge>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="md:col-span-2"
        >
          <Card className="border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">Financial Health</CardTitle>
                <CardDescription>Your financial health score is 72/100</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="text-gray-500 border-gray-200">
                View Details
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-[250px] flex items-end justify-between px-2">
                {[65, 72, 58, 81, 75, 68, 79].map((value, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <motion.div
                      className="w-12 bg-green-500 rounded-t-sm"
                      initial={{ height: 0 }}
                      animate={{ height: `${value * 2}px` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                    <span className="text-xs mt-1 text-gray-500">
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card className="border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Savings Progress</CardTitle>
              <CardDescription>You're on track to reach your goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Emergency Fund</span>
                    <span className="font-medium">75%</span>
                  </div>
                  <Progress value={75} className="h-2" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Vacation</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" indicatorClassName="bg-green-500" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>New Laptop</span>
                    <span className="font-medium">90%</span>
                  </div>
                  <Progress value={90} className="h-2" indicatorClassName="bg-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Card className="border border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
            <CardDescription>Your latest financial activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Grocery Store",
                  date: "Today, 10:30 AM",
                  amount: "-₹2,450",
                  category: "Groceries",
                  icon: "🛒",
                },
                {
                  name: "Salary Deposit",
                  date: "Yesterday",
                  amount: "+₹75,000",
                  category: "Income",
                  icon: "💼",
                },
                {
                  name: "Electric Bill",
                  date: "Jul 15, 2023",
                  amount: "-₹1,850",
                  category: "Utilities",
                  icon: "⚡",
                },
                {
                  name: "Restaurant",
                  date: "Jul 14, 2023",
                  amount: "-₹3,200",
                  category: "Dining",
                  icon: "🍽️",
                },
                {
                  name: "Investment Deposit",
                  date: "Jul 10, 2023",
                  amount: "-₹15,000",
                  category: "Investment",
                  icon: "📈",
                },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-3 text-lg">
                      {transaction.icon}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <p className="text-xs text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p
                      className={`font-medium ${
                        transaction.amount.startsWith("+") ? "text-green-600" : "text-gray-800"
                      }`}
                    >
                      {transaction.amount}
                    </p>
                    <Button variant="ghost" size="icon" className="ml-2 text-gray-400">
                      <MoreVertical size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t border-gray-100 px-6 py-3">
            <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 mx-auto">
              View All Transactions
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

function LearningTab() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const lessons = [
    {
      title: "Understanding Mutual Funds",
      duration: "3 min",
      progress: 0,
      completed: false,
      icon: "📊",
    },
    {
      title: "Basics of Tax-Saving Investments",
      duration: "5 min",
      progress: 100,
      completed: true,
      icon: "💰",
    },
    {
      title: "Emergency Fund: Why & How",
      duration: "4 min",
      progress: 60,
      completed: false,
      icon: "🛡️",
    },
    {
      title: "Understanding Credit Scores",
      duration: "3 min",
      progress: 0,
      completed: false,
      icon: "📈",
    },
  ]

  const quiz = {
    question: "Which of these is NOT a type of mutual fund?",
    options: ["Equity Funds", "Debt Funds", "Savings Funds", "Hybrid Funds"],
    correctAnswer: 2,
  }

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
    setIsCorrect(index === quiz.correctAnswer)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Financial Learning</h1>
          <p className="text-gray-500">Expand your financial knowledge with bite-sized lessons</p>
        </div>
        <div className="text-sm bg-green-50 px-3 py-1 rounded-full text-green-700">
          <span className="font-bold">2</span> of <span>12</span> lessons completed
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2"
        >
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              {!showQuiz ? (
                <div>
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{lessons[currentLesson].icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{lessons[currentLesson].title}</h3>
                      <p className="text-sm text-gray-500">{lessons[currentLesson].duration} read</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="mb-4 text-gray-700">
                      Mutual funds pool money from many investors to purchase securities. They offer diversification and
                      professional management, making them ideal for beginners.
                    </p>
                    <p className="mb-4 text-gray-700">There are several types of mutual funds:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-4 text-gray-700">
                      <li>Equity funds invest primarily in stocks</li>
                      <li>Debt funds invest in bonds and fixed-income securities</li>
                      <li>Hybrid funds invest in both stocks and bonds</li>
                    </ul>
                    <p className="text-gray-700">
                      When choosing a mutual fund, consider your risk tolerance, investment horizon, and financial
                      goals.
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                      Save for Later
                    </Button>
                    <Button onClick={() => setShowQuiz(true)} className="bg-green-600 hover:bg-green-700 text-white">
                      Take Quiz
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Quiz</h3>

                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <p className="mb-4 font-medium text-gray-800">{quiz.question}</p>

                    <div className="space-y-3">
                      {quiz.options.map((option, index) => (
                        <motion.div
                          key={index}
                          whileTap={{ scale: 0.98 }}
                          className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                            selectedAnswer === index
                              ? isCorrect
                                ? "bg-green-50 border-green-500 text-green-800"
                                : "bg-red-50 border-red-500 text-red-800"
                              : "border-gray-200 hover:border-green-500 text-gray-700"
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          {option}
                        </motion.div>
                      ))}
                    </div>

                    {selectedAnswer !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-4 p-4 rounded-lg ${
                          isCorrect ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
                        }`}
                      >
                        {isCorrect
                          ? "Correct! Savings Funds is not a standard type of mutual fund."
                          : `Incorrect. The correct answer is "${quiz.options[quiz.correctAnswer]}".`}
                      </motion.div>
                    )}
                  </div>

                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-gray-200 text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowQuiz(false)}
                    >
                      Back to Lesson
                    </Button>
                    {selectedAnswer !== null && (
                      <Button
                        onClick={() => {
                          setShowQuiz(false)
                          setSelectedAnswer(null)
                          setIsCorrect(null)
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Continue
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="border border-gray-200 h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Your Learning Path</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {lessons.map((lesson, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className={`bg-white border rounded-lg p-3 cursor-pointer ${
                    currentLesson === index ? "border-green-500 shadow-sm" : "border-gray-200"
                  }`}
                  onClick={() => setCurrentLesson(index)}
                >
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">{lesson.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium text-gray-800">{lesson.title}</h4>
                        <span className="text-xs text-gray-500">{lesson.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Progress
                          value={lesson.progress}
                          className="h-1.5 flex-1 mr-2"
                          indicatorClassName="bg-green-500"
                        />
                        {lesson.completed ? (
                          <span className="text-xs text-green-600">Completed</span>
                        ) : (
                          <span className="text-xs text-gray-500">{lesson.progress}%</span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
            <CardFooter className="border-t border-gray-100 px-6 py-3">
              <Button variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-50 mx-auto">
                View All Lessons
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function GoalsTab() {
  const [showNewGoal, setShowNewGoal] = useState(false)

  const goals = [
    {
      title: "Emergency Fund",
      target: 300000,
      current: 150000,
      deadline: "Dec 2023",
      icon: "🛡️",
    },
    {
      title: "International Vacation",
      target: 500000,
      current: 125000,
      deadline: "Jun 2024",
      icon: "✈️",
    },
    {
      title: "New Laptop",
      target: 120000,
      current: 90000,
      deadline: "Mar 2024",
      icon: "💻",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Financial Goals</h1>
          <p className="text-gray-500">Track and manage your savings goals</p>
        </div>
        <Button onClick={() => setShowNewGoal(!showNewGoal)} className="bg-green-600 hover:bg-green-700 text-white">
          {showNewGoal ? "Cancel" : "New Goal"}
        </Button>
      </div>

      {showNewGoal && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="border border-gray-200 mb-6">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Create New Goal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal Name</label>
                <Input
                  type="text"
                  placeholder="e.g., New Car, Home Down Payment"
                  className="border-gray-200 focus-visible:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Amount (₹)</label>
                <Input
                  type="number"
                  placeholder="e.g., 500000"
                  className="border-gray-200 focus-visible:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Date</label>
                <Input type="date" className="border-gray-200 focus-visible:ring-green-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal Icon</label>
                <div className="flex flex-wrap gap-2">
                  {["🏠", "🚗", "✈️", "💻", "👨‍🎓", "💍", "👶", "🏥", "🛡️"].map((icon) => (
                    <button
                      key={icon}
                      className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-md text-xl hover:bg-green-50 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-100 px-6 py-3">
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Create Goal</Button>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <Card className="border border-gray-200 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{goal.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">{goal.title}</h3>
                    <p className="text-sm text-gray-500">Target: {goal.deadline}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-1 text-sm text-gray-600">
                    <span>₹{goal.current.toLocaleString()}</span>
                    <span>₹{goal.target.toLocaleString()}</span>
                  </div>
                  <Progress
                    value={(goal.current / goal.target) * 100}
                    className="h-2"
                    indicatorClassName="bg-green-500"
                  />
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-medium text-gray-800">
                      {Math.round((goal.current / goal.target) * 100)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Remaining</span>
                    <span className="text-sm font-medium text-gray-800">
                      ₹{(goal.target - goal.current).toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:bg-gray-50">
                    Edit
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    Add Funds
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function AdvisorTab() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const messages = [
    {
      id: 1,
      from: "advisor",
      name: "Rajesh Kumar",
      message:
        "Hi Dipa, I've reviewed your spending patterns and noticed you could optimize your monthly budget. Would you like to discuss some strategies?",
      time: "Yesterday, 2:45 PM",
      read: true,
    },
    {
      id: 2,
      from: "user",
      name: "You",
      message: "Yes, I'd appreciate that. I've been trying to save more for my vacation goal.",
      time: "Yesterday, 3:20 PM",
      read: true,
    },
    {
      id: 3,
      from: "advisor",
      name: "Rajesh Kumar",
      message:
        "Great! Based on your spending, I recommend reducing dining out expenses by 20% and redirecting those funds to your vacation goal. This could help you reach your target 2 months earlier.",
      time: "Yesterday, 4:05 PM",
      read: true,
    },
  ]

  const templates = [
    {
      id: "investment-advice",
      title: "Investment Advice",
      message:
        "I'm interested in learning more about investment options that align with my financial goals. Could you provide some recommendations?",
    },
    {
      id: "budget-review",
      title: "Budget Review",
      message:
        "I'd like to review my current budget. Here are my major expenses for the past month. Do you see any areas where I could optimize?",
    },
    {
      id: "goal-planning",
      title: "Goal Planning",
      message:
        "I'm planning for a new financial goal. I'd like your advice on the best approach to save for it while maintaining my other financial commitments.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Advisor Chat</h1>
          <p className="text-gray-500">Connect with your financial advisor</p>
        </div>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-2 border-2 border-green-500">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Rajesh Kumar" />
            <AvatarFallback className="bg-green-100 text-green-800">RK</AvatarFallback>
          </Avatar>
          <div>
            <div className="text-sm font-medium text-gray-800">Rajesh Kumar</div>
            <div className="text-xs text-green-600">Online</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2"
        >
          <Card className="border border-gray-200">
            <CardContent className="p-0">
              <div className="h-[400px] flex flex-col">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] ${
                          message.from === "user" ? "bg-green-600 text-white" : "bg-gray-100 text-gray-800"
                        } rounded-lg p-3`}
                      >
                        <div className="text-sm mb-1">{message.name}</div>
                        <div>{message.message}</div>
                        <div
                          className={`text-xs mt-1 text-right ${
                            message.from === "user" ? "text-green-100" : "text-gray-500"
                          }`}
                        >
                          {message.time}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="p-4 border-t border-gray-200">
                  {selectedTemplate ? (
                    <div className="space-y-3">
                      <div className="bg-gray-50 rounded-lg p-3">
                        <div className="text-sm font-medium mb-1 text-gray-800">
                          {templates.find((t) => t.id === selectedTemplate)?.title}
                        </div>
                        <div className="text-sm text-gray-700">
                          {templates.find((t) => t.id === selectedTemplate)?.message}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-200 text-gray-700 hover:bg-gray-50"
                          onClick={() => setSelectedTemplate(null)}
                        >
                          Cancel
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white flex-1">
                          Send Message
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Type a message or use a template..."
                          className="pr-10 border-gray-200 focus-visible:ring-green-500"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-400 hover:text-green-600 hover:bg-transparent"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m22 2-7 20-4-9-9-4Z" />
                            <path d="M22 2 11 13" />
                          </svg>
                        </Button>
                      </div>

                      <div>
                        <div className="text-sm mb-2 text-gray-600">Message Templates:</div>
                        <div className="flex flex-wrap gap-2">
                          {templates.map((template) => (
                            <Button
                              key={template.id}
                              variant="outline"
                              size="sm"
                              className="border-gray-200 text-gray-700 hover:bg-green-50 hover:border-green-500"
                              onClick={() => setSelectedTemplate(template.id)}
                            >
                              {template.title}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Upcoming Meetings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Calendar className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Quarterly Financial Review</h4>
                      <p className="text-sm text-gray-600">May 15, 2023 • 2:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <div className="text-sm mb-2 text-gray-700">Meeting Agenda:</div>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Review Q1 financial progress</li>
                    <li>Discuss investment portfolio adjustments</li>
                    <li>Update emergency fund strategy</li>
                    <li>Plan for upcoming tax season</li>
                  </ul>
                </div>

                <div className="flex space-x-2 mt-3">
                  <Button variant="outline" size="sm" className="border-gray-200 text-gray-700 hover:bg-gray-50 flex-1">
                    Reschedule
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white flex-1">
                    Join
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="w-full border-gray-200 text-green-600 hover:bg-green-50">
                Schedule New Meeting
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function InsightsTab() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Financial Insights</h1>
          <p className="text-gray-500">Personalized recommendations based on your financial data</p>
        </div>
        <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-gray-50">
          Last 30 Days
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Personalized Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-green-50 rounded-lg p-4 border border-green-100"
            >
              <div className="flex items-start">
                <div className="bg-green-100 rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Optimize Your Spending</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    You're spending 30% more on dining out compared to last month. Reducing this could help you reach
                    your vacation goal faster.
                  </p>
                  <Button variant="link" className="text-green-600 p-0 h-auto">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-blue-50 rounded-lg p-4 border border-blue-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                    <path d="M12 18V6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Tax-Saving Investment Opportunity</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    You can save up to ₹45,000 in taxes by investing in ELSS mutual funds before the end of this
                    financial year.
                  </p>
                  <Button variant="link" className="text-blue-600 p-0 h-auto">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-amber-50 rounded-lg p-4 border border-amber-100"
            >
              <div className="flex items-start">
                <div className="bg-amber-100 rounded-full p-2 mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                    <path d="M13 5v2" />
                    <path d="M13 17v2" />
                    <path d="M13 11v2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Emergency Fund Alert</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Your emergency fund covers 3 months of expenses. Financial experts recommend 6 months. Consider
                    increasing your monthly contribution.
                  </p>
                  <Button variant="link" className="text-amber-600 p-0 h-auto">
                    Learn More
                  </Button>
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Spending Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Top Spending Categories</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Shopping</span>
                      <span className="text-sm font-medium text-gray-800">₹15,800</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: "79%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Groceries</span>
                      <span className="text-sm font-medium text-gray-800">₹12,500</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: "62%" }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Entertainment</span>
                      <span className="text-sm font-medium text-gray-800">₹8,200</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: "41%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Dining Out</span>
                      <span className="text-sm font-medium text-gray-800">₹7,600</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: "38%" }}
                        transition={{ duration: 1, delay: 0.6 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Transportation</span>
                      <span className="text-sm font-medium text-gray-800">₹5,400</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: 0 }}
                        animate={{ width: "27%" }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Month-over-Month Comparison</h4>
                <div className="bg-gray-50 rounded-lg p-4 h-[calc(100%-24px)]">
                  <div className="flex h-full items-end justify-between">
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-10 bg-green-200 rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: "60%" }}
                        transition={{ duration: 1 }}
                      />
                      <span className="text-xs mt-1 text-gray-500">Feb</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-10 bg-green-200 rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: "75%" }}
                        transition={{ duration: 1, delay: 0.1 }}
                      />
                      <span className="text-xs mt-1 text-gray-500">Mar</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-10 bg-green-200 rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: "50%" }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                      <span className="text-xs mt-1 text-gray-500">Apr</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="w-10 bg-green-500 rounded-t-sm"
                        initial={{ height: 0 }}
                        animate={{ height: "85%" }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                      <span className="text-xs mt-1 text-gray-500">May</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
