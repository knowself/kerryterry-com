import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen animate-fade-in">
        {/* Banner Image */}
        <div className="pt-24 pb-6">
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/website-banner.png"
              alt="Kerry Terry Piano"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-eb-garamond font-medium tracking-tight text-gray-900 mb-8 animate-fade-in-up">
                Piano Lessons with{' '}
                <span className="text-brown">Kerry Terry</span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-4 animate-fade-in-up animation-delay-200">
                Discover the joy of music through personalized piano lessons 
                tailored to your unique journey.
              </p>
              
              <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 animate-fade-in-up animation-delay-200">
                Serving Lake County, California and surrounding areas
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brown hover:bg-brown/90 transition shadow-sm"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Personalized Learning',
                  description: 'Tailored instruction that adapts to your pace and learning style.'
                },
                {
                  title: 'Experienced Teacher',
                  description: 'Over 15 years of teaching experience with students of all ages.'
                },
                {
                  title: 'Convenient Location',
                  description: 'Conveniently located in Lake County, California.'
                }
              ].map((feature, index) => (
                <div 
                  key={feature.title}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <h3 className="text-xl font-eb-garamond font-medium text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
