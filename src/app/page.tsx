import Hero from "@/components/hero"
import Features from "@/components/features"
import Partners from "@/components/partners"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Partners />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
