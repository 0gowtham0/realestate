import { Sun, Wind, Home, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-green-800">
        <Link className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6 text-white" />
          <span className="ml-2 text-lg font-bold text-white">SunnyHomes</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline text-white" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline text-white" href="#listings">
            Listings
          </Link>
          <Link className="text-sm font-medium hover:underline text-white" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-green-800">
                  Welcome to SunnyHomes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Discover houses with perfect ventilation and abundant natural light.
                </p>
              </div>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700"
                href="#listings"
              >
                View Listings
              </Link>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800 mb-8">
              Our Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <Sun className="h-10 w-10 text-green-600" />
                <h3 className="text-xl font-bold text-green-800">Abundant Sunlight</h3>
                <p className="text-sm text-gray-500 text-center">
                  All our homes are designed to maximize natural light exposure.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <Wind className="h-10 w-10 text-green-600" />
                <h3 className="text-xl font-bold text-green-800">Perfect Ventilation</h3>
                <p className="text-sm text-gray-500 text-center">
                  Enjoy fresh air with our strategically designed ventilation systems.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg shadow-sm">
                <Home className="h-10 w-10 text-green-600" />
                <h3 className="text-xl font-bold text-green-800">Energy Efficient</h3>
                <p className="text-sm text-gray-500 text-center">
                  Our homes are built with energy efficiency in mind, saving you money.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="listings" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800 mb-8">
              Featured Listings
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    alt={`House ${i}`}
                    className="object-cover w-full h-60"
                    height="300"
                    src={`/placeholder.svg?height=300&width=400`}
                    style={{
                      aspectRatio: "400/300",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                      className="text-white text-lg font-bold hover:underline"
                      href="#"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-800 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Contact Us
            </h2>
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@sunnyhomes.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-green-100">
        <p className="text-xs text-gray-700">© 2023 SunnyHomes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-700" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}