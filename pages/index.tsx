import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { OptimizedImage } from '@/components/OptimizedImage';
import StructuredData from '../components/StructuredData';

const features = [
  {
    title: 'Personalized Approach',
    description: 'Each student receives individualized attention and a curriculum tailored to their unique goals and learning style.',
  },
  {
    title: 'All Ages Welcome',
    description: 'From young beginners to adult learners, I provide engaging instruction adapted to every age and skill level.',
  },
  {
    title: 'Comprehensive Education',
    description: 'Learn proper technique, music theory, and performance skills in a supportive environment.',
  }
];

export default function Home() {
  return (
    <Layout>
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/piano-close.png"
              alt="Piano keys close-up"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-offwhite/95 to-offwhite/80" />
          </div>
          
          <div className="container relative z-10 pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-eb-garamond text-brown leading-[1.15] mb-10">
                Mrs. Terry's Piano Lessons
              </h1>
              <p className="text-xl md:text-2xl text-brown/90 mb-14 max-w-2xl leading-relaxed">
                Discover the joy of playing piano through personalized lessons tailored to your unique goals and learning style.
              </p>
              <Link
                href="/contact"
                className="button-primary text-lg px-10 py-4"
              >
                Schedule Your First Lesson
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-24 md:py-32 lg:py-36">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-eb-garamond text-brown mb-8 leading-tight">
                Welcome to Kerry Terry Piano
              </h2>
              <div className="prose max-w-none text-lg">
                <p className="mb-8">
                  With over 30 years of teaching experience, I help students of all ages discover 
                  their musical potential and develop a lifelong love for piano.
                </p>
                <p>
                  My teaching approach combines traditional methods with modern techniques, 
                  ensuring students build a strong foundation while maintaining their enthusiasm 
                  for music.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 md:py-32 lg:py-36 bg-brown/[0.03]">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-eb-garamond text-brown mb-8 leading-tight">
                Why Choose Kerry Terry Piano
              </h2>
              <p className="text-lg text-brown/90">
                Experience a comprehensive piano education that nurtures both technical skill and musical creativity.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(49,34,30,0.05)] hover:shadow-[0_4px_20px_rgba(49,34,30,0.1)] transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-eb-garamond text-brown mb-5">
                    {feature.title}
                  </h3>
                  <p className="text-brown/90 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 lg:py-36 relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/kerry-terry.png"
              alt="Kerry Terry Piano Studio"
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-offwhite/[0.97] to-offwhite/90" />
          </div>
          
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-eb-garamond text-brown mb-8 leading-tight">
                Begin Your Musical Journey
              </h2>
              <p className="text-xl text-brown/90 mb-10 leading-relaxed">
                Contact me today to schedule your first lesson or learn more about my teaching approach.
              </p>
              <Link
                href="/contact"
                className="button-primary text-lg px-10 py-4"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
