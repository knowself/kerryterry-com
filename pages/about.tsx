import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Layout
      title="About Kerry Terry | Piano Teacher in Lake County"
      description="Learn more about Kerry Terry, an experienced piano teacher in Lake County with over 15 years of teaching experience. Discover my teaching philosophy and approach to piano education."
    >
      <div className="min-h-screen pt-16 animate-fade-in">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-eb-garamond font-medium tracking-tight text-gray-900 mb-6">
                About Kerry Terry
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dedicated to helping students discover their musical potential and develop a lifelong love for piano.
              </p>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg animate-fade-in-left">
                <Image
                  src="/images/piano-lessons.jpg"
                  alt="Piano lessons with Kerry Terry"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="animate-fade-in-right">
                <h2 className="text-3xl font-eb-garamond font-medium text-gray-900 mb-6">
                  Teaching Philosophy
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    My approach combines traditional methods with modern techniques, ensuring students build a strong 
                    foundation while maintaining their enthusiasm for music.
                  </p>
                  <p>
                    Each student receives personalized instruction tailored to their unique learning style and goals, 
                    whether they're interested in classical, contemporary, or jazz piano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: '15+ Years',
                  subtitle: 'Teaching Experience',
                  description: 'Helping students of all ages and skill levels achieve their musical goals.'
                },
                {
                  title: 'Personalized',
                  subtitle: 'Learning Plans',
                  description: 'Tailored instruction that adapts to your unique learning style and interests.'
                },
                {
                  title: 'Comprehensive',
                  subtitle: 'Music Education',
                  description: 'From theory and technique to performance and composition.'
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`text-center animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                >
                  <h3 className="text-2xl font-eb-garamond font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <h4 className="text-lg font-medium text-gray-600 mb-4">
                    {item.subtitle}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-eb-garamond font-medium text-gray-900 mb-6">
                Ready to Begin Your Musical Journey?
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're a complete beginner or looking to advance your skills, 
                I'm here to guide you on your musical path.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brown hover:bg-brown/90 transition shadow-sm"
              >
                Schedule Your First Lesson
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
