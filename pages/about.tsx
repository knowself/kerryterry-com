import Layout from '../components/Layout';
import Link from 'next/link';
import ImageCarousel from '../components/ImageCarousel';
import Image from 'next/image';

// Carousel images configuration - easy to add or rearrange
const carouselImages = [
  {
    src: '/images/01 Carosel Mind Grow Tree.jpg',
    alt: 'Mind Grow Tree - Piano Learning Journey'
  },
  {
    src: '/images/03 Kawai-DG30-Digital-Grand-600x600.jpg',
    alt: 'Kawai DG30 Digital Grand Piano'
  },
  {
    src: '/images/04 When you play never mind.jpg',
    alt: 'When You Play Piano Quote'
  },
  {
    src: '/images/Music Reflections.JPG',
    alt: 'Music Reflections'
  }
];

const staticGalleryImages = [
  ...carouselImages.filter((image) => image.src !== '/images/Music Reflections.JPG'),
  {
    src: '/images/why-teach-music.png',
    alt: 'Why teach music'
  }
];

export default function About() {
  return (
    <Layout
      title="About Kerry Terry's Piano Lessons"
      description="Learn about Kerry Terry's piano teaching experience and philosophy."
    >
      <div className="min-h-screen pt-16 animate-fade-in">
        <div className="pt-6">
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] px-6 sm:px-10 lg:px-16 mb-6 animate-fade-in-up">
            <div className="max-w-6xl mx-auto flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory sm:flex-wrap sm:justify-center sm:overflow-visible">
              {staticGalleryImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-square w-[85vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-2xl bg-gray-50 shadow-sm sm:w-[calc(50%-0.5rem)] sm:shrink sm:snap-none lg:w-[220px]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/*
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-6 animate-fade-in-up animation-delay-200">
            <ImageCarousel
              images={carouselImages}
              height={225}
            />
          </div>
          */}

        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">
          <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 pt-6 pb-12">
            <div className="max-w-3xl mx-auto animate-fade-in-right">
              <div className="space-y-4 text-gray-600">
                <p className="text-2xl font-bold text-center">
                  Lesson Outline
                </p>
                <p>
                  I try to keep it simple in the beginning to not overload and so I can assess the learning level and pace, as well as keep the desire and interest going. Ultimately, it is about the joy of playing the music. I teach using <a className="text-blue-600 hover:text-blue-700" href="https://www.alfred.com" target="_blank" rel="noopener noreferrer">Alfred Music</a> and <a className="text-blue-600 hover:text-blue-700" href="https://www.pianoadventures.com" target="_blank" rel="noopener noreferrer">Piano Adventures</a> materials, selecting books that match the student’s level and goals. Other piano music and composition materials will be discussed.
                </p>
                <p>
                  Practice is a necessary discipline. For the adult learner, we will work together to develop a practice plan. The young student generally requires extra encouragement to practice. As with all education for our children, it is helpful to have the parent work with the young student to find the best daily practice time, and then have it marked on a calendar or daily schedule. This will help the student to make piano practice time a daily habit.
                </p>
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
                    description: 'Helping students of all ages achieve their musical goals.'
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
                  Whether you're a complete beginner or looking to advance your skills,<br/>
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
        </div>
      </div>
    </Layout>
  );
}
