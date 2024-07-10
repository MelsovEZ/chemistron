/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/erJTHU7BXNt
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'
import { Rubik } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BeakerIcon className="h-6 w-6" />
          <span className="sr-only">ChemAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Testimonials
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your AI Chemistry Assistant
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Streamline your chemistry workflow with our powerful AI-driven tools. Visualize molecules, balance
                    equations, and get personalized lab equipment recommendations.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Get Started
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square" />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Chemistry Workflows
                </h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered chemistry helper provides a suite of tools to streamline your research and lab work.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Molecule Visualization</h3>
                <p className="text-sm text-muted-foreground">
                  Visualize complex molecular structures in 3D with our interactive viewer.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Chemical Equation Balancing</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically balance chemical equations with a few clicks.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Lab Equipment Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized recommendations for the right lab equipment based on your experiments.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Reaction Prediction</h3>
                <p className="text-sm text-muted-foreground">
                  Predict the products of chemical reactions with our advanced algorithms.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Safety Data Sheets</h3>
                <p className="text-sm text-muted-foreground">
                  Easily access safety information for chemicals and lab materials.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Experimental Design</h3>
                <p className="text-sm text-muted-foreground">
                  Get guidance on designing effective experiments for your research.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Users Say</h2>
              <p
                className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from the chemists and researchers who have used our AI chemistry helper to streamline their
                workflows.
              </p>
            </div>
            <div
              className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Chemist</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "ChemAI has been a game-changer for my research. The\n molecule visualization and equation
                      balancing tools have\n saved me so much time."
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Anderson</p>
                    <p className="text-sm text-muted-foreground">Lab Manager</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "The lab equipment recommendations from ChemAI have helped\n us optimize our lab setup and improve
                      efficiency."
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>MR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Michael Roberts</p>
                    <p className="text-sm text-muted-foreground">Researcher</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="space-y-2">
                    <p className="text-muted-foreground">
                      "ChemAI's reaction prediction and safety data sheets have\n been invaluable in my research. It's a
                      must-have tool for\n any chemistry lab."
                    </p>
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pricing</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your chemistry needs.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>Basic tools for individual researchers.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$9</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Molecule Visualization
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Chemical Equation Balancing
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Safety Data Sheets
                    </li>
                    <li className="flex items-center">
                      <XIcon className="mr-2 h-4 w-4 text-red-500" />
                      Lab Equipment Recommendations
                    </li>
                    <li className="flex items-center">
                      <XIcon className="mr-2 h-4 w-4 text-red-500" />
                      Reaction Prediction
                    </li>
                    <li className="flex items-center">
                      <XIcon className="mr-2 h-4 w-4 text-red-500" />
                      Experimental Design
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Professional</CardTitle>
                  <CardDescription>Advanced tools for chemistry labs and research teams.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">$49</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Molecule Visualization
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Chemical Equation Balancing
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Safety Data Sheets
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Lab Equipment Recommendations
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Reaction Prediction
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Experimental Design
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>Tailored solutions for large research organizations.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold">Contact Us</p>
                    <p className="text-sm text-muted-foreground">Custom pricing available</p>
                  </div>
                  <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Molecule Visualization
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Chemical Equation Balancing
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                      Safety Data Sheets
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className />
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>)
  );
}

function BeakerIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>)
  );
}


function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
