import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen animate-fade-in">
        {/* Banner Image */}
        <div className="pt-24 pb-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full h-[180px]">
              <Image
                src="/images/website-banner with picture.png"
                alt="Kerry Terry Piano"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-0 pb-16 overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center">
              <h1 className="mt-[10px] text-2xl sm:text-3xl lg:text-4xl font-eb-garamond font-medium tracking-tight text-gray-900 mb-[22px] animate-fade-in-up">
                Piano Lessons with Kerry Terry
              </h1>
              
              <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-4 animate-fade-in-up animation-delay-200">
                Discover the joy of music through personalized piano lessons 
                tailored to your unique journey.
              </p>
              
              <div className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-8 mb-10 shadow-sm animate-fade-in-up animation-delay-300 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-eb-garamond text-center mb-4">Personalized Learning with an Experienced Teacher</h2>
                <p className="text-gray-700 leading-relaxed text-center">
                  I have taught piano since 2008. With over a decade and a half of experience, I use a blend of lesson/theory books along with ear training, student composion and the occasional arrangement from well-known composers and song writers. I teach beginner to intermediate, children to adults. As the music skills progress, the confidence grows, we together help each student find their inner musician.
                </p>
              </div>

              {/* Objective and Intention Section with Image */}
              <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  {/* Image */}
                  <div className="relative rounded-lg overflow-hidden shadow-md">
                    <Image
                      src="/images/Music Reflections.JPG"
                      alt="Music Reflections"
                      width={600}
                      height={800}
                      className="w-full h-auto"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-eb-garamond font-medium text-gray-900 mb-6">
                      My Objective and Intention
                    </h2>
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        Learning piano music is like learning a language, hearing and seeing it played is not enough for most of us to become proficient or even simply play without frustration. One must actively play the instrument, learn the theory, and then practice it daily to achieve a level of enjoyment.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed italic font-medium">
                        I enjoy playing a variety of piano music and would love to develop that joy for you and/or your child.
                      </p>

                      <div className="pt-4">
                        <Link
                          href="/about"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brown hover:bg-brown/90 transition shadow-sm"
                        >
                          How I Teach
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
