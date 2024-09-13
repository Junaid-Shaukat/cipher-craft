import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  CheckCircle,
  ArrowRight,
  Star,
  Menu,
  Briefcase,
  Zap,
  Filter,
  Upload,
  Search,
  CheckSquare,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex items-center flex-col  min-h-screen">
      <header className="sticky px-9 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link className="flex items-center justify-center mr-6" href="#">
            <FileText className="h-6 w-6 text-primary" />
            <span className="ml-2 text-xl font-bold hidden sm:inline-block">
              Resume Align
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1">
            <Link
              className="hidden sm:inline-block transition-colors hover:text-primary"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="hidden sm:inline-block transition-colors hover:text-primary"
              href="#how-it-works"
            >
              How It Works
            </Link>
            <Link
              className="hidden sm:inline-block transition-colors hover:text-primary"
              href="#pricing"
            ></Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button>
              <Briefcase className="mr-2 h-4 w-4" /> Create a Job
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="ml-2 sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl max-w-4xl mx-auto font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Hiring with Resume Align
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Harness the power of artificial intelligence to streamline
                  your recruitment process, match ideal candidates, and make
                  data-driven hiring decisions.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  size="lg"
                  className="transition-transform hover:scale-105"
                >
                  <Zap className="mr-2 h-4 w-4" />

                  <Link href="/dashboard">Get Started</Link>
                </Button>
                  {/* <Button
                    size="lg"
                    variant="outline"
                    className="transition-transform hover:scale-105"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" /> Schedule Demo
                  </Button> */}
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Cutting-Edge Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-primary" />
                    AI-Powered Matching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our advanced algorithms match resumes to job requirements
                    with unparalleled accuracy and efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Search className="h-5 w-5 mr-2 text-primary" />
                    Intelligent Sorting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Save valuable time with smart resume sorting based on
                    relevance, qualifications, and job fit.
                  </p>
                </CardContent>
              </Card>
              <Card className="transition-transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-primary" />
                    Customizable Filters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Create and apply custom filters to pinpoint candidates that
                    precisely match your specific criteria.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Streamlined Process
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <Upload className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Upload Resumes</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Effortlessly upload candidate resumes in bulk or individually
                  through our intuitive interface.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. AI Analysis</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our sophisticated AI analyzes and matches resumes to job
                  requirements with precision.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <CheckSquare className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Review Results</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Efficiently review sorted and filtered candidates, making
                  informed decisions for your job openings.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Client Success Stories
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote:
                    "Resume Align has revolutionized our hiring process. We've saved countless hours and found better candidates faster than ever before.",
                  author: "Sarah Johnson",
                  position: "HR Director, TechCorp Inc.",
                },
                {
                  quote:
                    "The AI-powered matching is incredibly accurate. It's like having a team of expert recruiters working 24/7.",
                  author: "Michael Chen",
                  position: "Talent Acquisition Manager, Global Innovations",
                },
                {
                  quote:
                    "We've seen a 40% increase in successful hires since implementing Resume Align. It's been a game-changer for our recruitment team.",
                  author: "Emily Rodriguez",
                  position: "VP of Human Resources, StartUp Dynamics",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="transition-transform hover:scale-105">
                  <CardContent className="pt-4">
                    <div className="flex mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-current text-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="mb-4 italic">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Flexible Pricing Plans
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Starter",
                  price: "$99",
                  period: "per month",
                  features: [
                    "Up to 100 resumes/month",
                    "Basic AI matching",
                    "Email support",
                    "Job posting integration",
                  ],
                },
                {
                  name: "Professional",
                  price: "$299",
                  period: "per month",
                  features: [
                    "Up to 1000 resumes/month",
                    "Advanced AI matching",
                    "Priority support",
                    "Custom filters",
                    "API access",
                  ],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  period: "tailored solution",
                  features: [
                    "Unlimited resumes",
                    "Full AI suite",
                    "24/7 dedicated support",
                    "Custom integration",
                    "On-premise deployment option",
                  ],
                },
              ].map((plan) => (
                <Card
                  key={plan.name}
                  className="flex flex-col transition-transform hover:scale-105"
                >
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-3xl font-bold mb-2">{plan.price}</p>
                    <p className="text-gray-500 mb-4">{plan.period}</p>
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
                    <Button className="w-full">
                      {plan.name === "Enterprise"
                        ? "Contact Sales"
                        : "Get Started"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Hiring Process?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of companies using Resume Align to find their
                  ideal candidates faster and more efficiently.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  <Zap className="mr-2 h-4 w-4" /> Start Your Free Trial
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  No credit card required. 14-day free trial.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Resume Align</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2023 Resume Align. All rights reserved.
            </p>
            <nav className="flex gap-4">
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-sm hover:underline underline-offset-4"
                href="#"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
