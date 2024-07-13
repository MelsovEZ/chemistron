/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/vpfCauHeZDw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Comfortaa } from 'next/font/google'
import { Syne } from 'next/font/google'

comfortaa({
  subsets: ['latin'],
  display: 'swap',
})

syne({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Pastel() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BeakerIcon className="h-6 w-6" />
          <span className="sr-only">Chemistron AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            About
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main id="about" className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unlock the Power of Chemistry with Chemistron AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Revolutionize your chemistry research and experiments with our cutting-edge AI-powered chemistry
                    helper. Visualize molecules, predict reactions, and get personalized recommendations for lab
                    equipment.
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
              <Image
                src="Banner.webp"
                width={550}
                height={550}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Revolutionize Your Chemistry Workflow
                </h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered chemistry helper provides cutting-edge tools to streamline your research and
                  experiments. From visualizing molecules to predicting reactions and recommending lab equipment, we&apos;ve
                  got you covered.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/Visualize.webp"
                width={550}
                height={310}
                alt="Molecule Visualization"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Molecule Visualization</h3>
                  <p className="text-muted-foreground">
                    Easily visualize and manipulate complex molecules in 3D, gaining deeper insights into their
                    structure and properties.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Reaction Prediction</h3>
                  <p className="text-muted-foreground">
                    Our AI-powered reaction prediction engine can help you anticipate the outcomes of your experiments,
                    saving you time and resources.
                  </p>
                </div>
              </div>
              <Image
                src="/Prediction.webp"
                width={550}
                height={310}
                alt="Reaction Prediction"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/Equipment.webp"
                width={550}
                height={310}
                alt="Lab Equipment Recommendations"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Lab Equipment Recommendations</h3>
                  <p className="text-muted-foreground">
                    Get personalized recommendations for the best lab equipment to use in your experiments, tailored to
                    your specific needs and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from real users about how Chemistron AI has transformed their chemistry research and experiments.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AA</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">Azatkadyr Askar</div>
                      <div className="text-muted-foreground">Chemistry Teacher</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    &quot;Chemistron AI has been a game-changer for my research. The
                    molecule visualization and reaction prediction features
                    have saved me so much time and effort.&quot;
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">Assanali Rakhimov</div>
                      <div className="text-muted-foreground">Chemistry Researcher</div>
                    </div>
                  </div>
                  <div className="text-muted-foreground">
                    &quot;I&apos;ve been using Chemistron AI for the past year, and it&apos;s
                    completely transformed my workflow. The lab equipment
                    recommendations have been invaluable.&quot;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable Pricing for Every Chemist
                </h2>
                <p
                  className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your needs and budget. Get started with Chemistron AI today and revolutionize
                  your chemistry workflow.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div
                className="flex flex-col justify-center space-y-4 bg-background rounded-lg p-6 shadow-lg h-96">
                <div className="space-y-2">
                  <div className="text-xl font-bold">Basic</div>
                  <div className="text-4xl font-bold">$9</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Molecule Visualization
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Reaction Prediction
                  </li>
                  <li>
                    <XIcon className="mr-2 inline-block h-4 w-4" />
                    Lab Equipment Recommendations
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Get Started
                </Link>
              </div>
              <div
                className="flex flex-col justify-center space-y-4 bg-background rounded-lg p-6 shadow-lg h-96">
                <div className="space-y-2">
                  <div className="text-xl font-bold">Pro</div>
                  <div className="text-4xl font-bold">$19</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Molecule Visualization
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Reaction Prediction
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Lab Equipment Recommendations
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Get Started
                </Link>
              </div>
              <div
                className="flex flex-col justify-center space-y-4 bg-background rounded-lg p-6 shadow-lg h-96">
                <div className="space-y-2">
                  <div className="text-xl font-bold">Enterprise</div>
                  <div className="text-4xl font-bold">$49</div>
                  <div className="text-muted-foreground">/month</div>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Molecule Visualization
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Reaction Prediction
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Lab Equipment Recommendations
                  </li>
                  <li>
                    <CheckIcon className="mr-2 inline-block h-4 w-4" />
                    Priority Support
                  </li>
                </ul>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have any questions or need support? Reach out to our team and we&apos;ll be happy to assist you.
                </p>
                <p className="text-muted-foreground">
                  Email: ernurmelsov@gmail.com
                </p>
                <p className="text-muted-foreground">
                  Phone: +7 (708) 108-6578
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="px-4 lg:px-6 py-8 bg-primary-foreground">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-white">
                &copy; 2024 Chemistron AI. All rights reserved.
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link
                  href="#"
                  className="text-sm text-white hover:underline"
                  prefetch={false}
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-white hover:underline"
                  prefetch={false}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function BeakerIcon(props) {
  return (
    <svg
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
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
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
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
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
    </svg>
  );
}
