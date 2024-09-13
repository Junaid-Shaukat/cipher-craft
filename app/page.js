import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Star } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Resume Align</span>
          <svg
            className="h-6 w-6"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
            <path d="M8 7h6" />
            <path d="M8 11h8" />
            <path d="M8 15h6" />
          </svg>
          <span className="ml-2 text-xl font-bold">Resume Align</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Hiring Process with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Resume Align uses advanced AI to sort and filter resumes, matching the perfect candidates to your job openings.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>AI-Powered Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our advanced AI algorithms match resumes to job requirements with unparalleled accuracy.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Automated Sorting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Save time with intelligent resume sorting based on relevance and qualifications.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Customizable Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Create custom filters to find candidates that match your specific criteria.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <svg
                    className=" h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">1. Upload Resumes</h3>
                <p className="text-gray-500 dark:text-gray-400">Upload candidate resumes in bulk or individually.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <svg
                    className=" h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" x2="12" y1="22.08" y2="12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">2. AI Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">Our AI analyzes and matches resumes to job requirements.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <svg
                    className=" h-6 w-6"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">3. Review Results</h3>
                <p className="text-gray-500 dark:text-gray-400">Review sorted and filtered candidates for your job openings.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="pt-4">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-current text-yellow-500" />
                      ))}
                    </div>
                    <p className="mb-4">
                      "Resume Align has revolutionized our hiring process. We've saved countless hours and found better
                      candidates faster than ever before."
                    </p>
                    <p className="font-semibold">- HR Manager, Fortune 500 Company</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Pricing Plans</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { name: "Starter", price: "$99", features: ["Up to 100 resumes/month", "Basic AI matching", "Email support"] },
                {
                  name: "Pro",
                  price: "$299",
                  features: ["Up to 1000 resumes/month", "Advanced AI matching", "Priority support", "Custom filters"],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: ["Unlimited resumes", "Full AI suite", "24/7 support", "API access", "Custom integration"],
                },
              ].map((plan) => (
                <Card key={plan.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-3xl font-bold mb-4">{plan.price}</p>
                    <ul className="space-y-2 mb-4">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button className="w-full">Choose Plan</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of companies using Resume Align to find their perfect candidates faster and more efficiently.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full">Get Started Today</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 Resume Align. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}