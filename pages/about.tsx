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

export default function About() {
  return (
    <Layout
      title="About Kerry Terry's Piano Lessons"
      description="Learn about Kerry Terry's piano teaching experience and philosophy."
    >
      <div className="min-h-screen pt-16 animate-fade-in">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-eb-garamond font-medium text-gray-900 mb-6">
              About Kerry Terry's Piano Lessons
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">
                Dedicated piano teacher with over 15 years of experience, sharing the joy of music with students.
              </p>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-16 animate-fade-in-up animation-delay-200">
            <ImageCarousel 
              images={carouselImages}
              height={450}
            />
          </div>

          {/* How I Teach Piano Section */}
          <section id="how-i-teach" className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg animate-fade-in-left">
                  <Image
                    src="/images/why-teach-music.png"
                    alt="Why teach music"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    quality={100}
                  />
                </div>
                <div className="animate-fade-in-right">
                  <h2 className="text-3xl font-eb-garamond font-medium text-gray-900 mb-6">
                    How I Teach Piano
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      The piano teaching methods I use most:
                    </p>
                    <p className="text-2xl text-blue-600 hover:text-blue-700 text-center py-2">
                      <a href="https://www.alfred.com" target="_blank" rel="noopener noreferrer">
                        Alfred Music
                      </a>
                    </p>
                    <p className="text-2xl text-blue-600 hover:text-blue-700 text-center py-2">
                      <a href="https://www.pianoadventures.com" target="_blank" rel="noopener noreferrer">
                      Piano Adventures
                      </a>
                    </p>
                    <p>
                      I try to keep it simple in the beginning to not overload and so I can assess the learning level and pace, as well as keep the desire and interest going. Ultimately, it is about the joy of playing the music.
                    </p>
                    <p>
                      Practice is a necessary discipline. For the adult learner, we will work together to develop a practice plan. The young student generally requires extra encouragement to practice. As with all education for our children, it is helpful to have the parent work with the young student to find the best daily practice time, and then have it marked on a calendar or daily schedule. This will help the student to make piano practice time a daily habit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How Do We Begin section */}
          <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
            <h2 className="text-4xl font-eb-garamond mb-8 text-center">How Do We Begin?</h2>
            
            <div className="space-y-8 text-lg">
              <div className="space-y-4">
                <h3 className="text-2xl font-eb-garamond text-brown-600 underline">Rates and Materials</h3>
                <p>
                  My current rate for each student is $25 per half hour, plus the cost of the piano books, 
                  usually a lesson, theory, and performance books.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-eb-garamond text-brown-600 underline">First Lesson</h3>
                <p>
                  The first lesson is free so that you and/or the student can decide if I'm the right teacher. 
                  Should you decide to continue, the next lesson and onward is for pay.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-eb-garamond text-brown-600 underline">Commitment</h3>
                <p>
                  I do not require a contract for any time period, it is month to month. If you decide it is 
                  no longer a good fit, or for any other reason, just let me know and we'll end the lessons.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-eb-garamond text-brown-600 underline">Missed Lessons</h3>
                <p>
               I am flexible and always allow for sick days. When you need to miss your calendared lesson, with advanced notice, you may reschedule for another day that same week, 
                  availability permitting. Otherwise we just skip the lesson for that week, which means more time to practice.
                </p>
              </div>
            </div>
          </div>

          {/* A Word About Practicing section */}
          <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
            <h2 className="text-4xl font-eb-garamond mb-8 text-center">A Word About Practicing…</h2>
            
            <div className="space-y-8 text-lg">
              <div className="space-y-4">
                <h3 className="text-2xl font-eb-garamond text-brown-600 underline">Practice Time Guidelines</h3>
                <p>
                  Each student is unique. The young child should have time to practice at least 15-30 minutes 
                  a day in the beginning. The older child and adult should have time to practice at least 
                  30 - 45 minutes a day in the first weeks. Hands and fingers will get tired, this is normal.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-eb-garamond text-brown-600 underline">Building Consistency</h3>
                <p>
                  Students will build strength with consistent practice. I encourage students to practice 
                  every day, but sometimes that may not be possible, yet even playing the song(s) a couple 
                  times, which might not be longer than 5 minutes at the keyboard during that day, is good; 
                  it is still considered practice.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-eb-garamond text-brown-600 underline">Benefits of Daily Practice</h3>
                <p>
                  Daily experience at the keyboard is good for the student's hands, ears, eyes, and mind. 
                  As they progress, so should their daily practice time. As a matter of course, focused and 
                  consistent practice develops a greater understanding of the music and one becomes a better musician.
                </p>
              </div>

              <div className="space-y-4 mt-12 text-center italic">
                <p>
                  I hope this helps in understanding my teaching method. If you have other questions, just ask. 
                  I do hope to help you and/or your child learn to play the piano sometime soon.
                </p>
                <p className="font-semibold mt-4">
                  Thank you!
                </p>
              </div>
            </div>
          </div>

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
    </Layout>
  );
}
