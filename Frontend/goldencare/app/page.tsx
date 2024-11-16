import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Heart, Activity, Calendar, Bell, BookOpen, MessageSquare, PhoneCall, Download } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SilverWatch</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#features" className="hover:underline">Features</Link></li>
              <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
              <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-green-500 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Monitor Your Health in Real-Time</h2>
            <p className="text-xl mb-8">Stay connected to your health with SilverWatch's advanced remote monitoring system.</p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-100">Get Started</Button>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Platform Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon={<Heart />} title="Vitals Monitoring" description="Track your heart rate, blood pressure, and oxygen levels in real-time." />
              <FeatureCard icon={<Activity />} title="Activity Tracking" description="Monitor your daily activity levels and step count." />
              <FeatureCard icon={<Calendar />} title="Appointment Scheduling" description="Easily book and manage appointments with your caregivers." />
              <FeatureCard icon={<Bell />} title="Alerts & Notifications" description="Receive timely alerts for critical vitals and medication reminders." />
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-green-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard name="John D." quote="SilverWatch has given me peace of mind knowing that my health is being monitored 24/7." />
              <TestimonialCard name="Sarah M." quote="The easy-to-use interface makes tracking my vitals and medications a breeze." />
              <TestimonialCard name="Robert L." quote="I love how I can easily share my health data with my doctor. It's improved my care significantly." />
            </div>
          </div>
        </section>

        <section id="faq" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does SilverWatch work?</AccordionTrigger>
                <AccordionContent>
                  SilverWatch uses advanced sensors and wearable technology to monitor your vital signs and activity levels. This data is securely transmitted to our platform, where it's analyzed and presented in an easy-to-understand format.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is my health data secure?</AccordionTrigger>
                <AccordionContent>
                  Yes, we take data security very seriously. All your health information is encrypted and stored securely in compliance with HIPAA regulations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I share my data with my doctor?</AccordionTrigger>
                <AccordionContent>
                  SilverWatch makes it easy to share your health data with your healthcare providers, ensuring they have the most up-to-date information about your health status.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contact" className="bg-green-500 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" className="w-full" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" className="w-full" />
              </div>
              <div className="mb-4">
                <textarea className="w-full p-2 rounded" rows={4} placeholder="Your Message"></textarea>
              </div>
              <Button type="submit" className="w-full bg-white text-green-600 hover:bg-green-100">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">SilverWatch</h3>
              <p>Empowering you to take control of your health.</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
              <ul>
                <li><Link href="#features" className="hover:underline">Features</Link></li>
                <li><Link href="#testimonials" className="hover:underline">Testimonials</Link></li>
                <li><Link href="#faq" className="hover:underline">FAQ</Link></li>
                <li><Link href="#contact" className="hover:underline">Contact</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-2">Download Our App</h4>
              <div className="flex space-x-4">
                <Button variant="outline" className="flex items-center">
                  <Download className="mr-2" size={16} />
                  App Store
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Download className="mr-2" size={16} />
                  Google Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
interface FeatureCardProps {
  icon: React.ReactNode; // or JSX.Element
  title: string;
  description: string;
}
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="text-green-500 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
interface TestimonialCardProps {
  name: string;
  quote: string;
}
function TestimonialCard({ name, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">"{quote}"</p>
      <p className="font-semibold">- {name}</p>
    </div>
  )
}