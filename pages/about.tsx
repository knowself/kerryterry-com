import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <div className="page-container">
        {/* Hero Section */}
        <section className="py-24 md:py-32 lg:py-36">
          <div className="container">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-eb-garamond text-brown leading-[1.15] mb-10">
                About Kerry Terry
              </h1>
              <p className="text-xl md:text-2xl text-brown/90 leading-relaxed max-w-3xl">
                With over 30 years of teaching experience, I help students of all ages discover their musical potential and develop a lifelong love for piano.
              </p>
            </div>
          </div>
        </section>

        {/* Teaching Philosophy */}
        <section className="py-24 md:py-32 lg:py-36 border-t border-brown/10">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/kerry-teaching.png"
                  alt="Kerry Terry teaching piano"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  priority
                  quality={90}
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-eb-garamond text-brown leading-tight mb-8">
                  My Teaching Philosophy
                </h2>
                <div className="space-y-8 text-lg text-brown/90">
                  <p className="leading-relaxed">
                    I believe that learning piano should be an enriching and enjoyable experience. My teaching approach 
                    combines traditional methods with modern techniques, ensuring students build a strong foundation 
                    while maintaining their enthusiasm for music.
                  </p>
                  <p className="leading-relaxed">
                    Each student receives personalized instruction tailored to their unique learning style, musical 
                    interests, and goals. Whether you're interested in classical, contemporary, or jazz piano, we'll 
                    work together to develop your skills and musicianship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-24 md:py-32 lg:py-36 border-t border-brown/10">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-eb-garamond text-brown leading-tight mb-8">
                  Experience & Qualifications
                </h2>
                <div className="space-y-8 text-lg text-brown/90">
                  <p className="leading-relaxed">
                    With a Bachelor's degree in Piano Performance and over three decades of teaching experience, 
                    I bring both expertise and passion to every lesson. I've taught students of all ages and skill 
                    levels, from young beginners to advanced adult players.
                  </p>
                  <p className="leading-relaxed">
                    My students have consistently achieved high scores in piano examinations and many have gone on 
                    to pursue music at the collegiate level. I'm proud to have helped countless students discover 
                    their musical voice and achieve their goals.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="button-primary text-lg px-10 py-4"
                    >
                      Start Your Musical Journey
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/piano-close.png"
                  alt="Close up of piano keys"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  quality={90}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lesson Details */}
        <section className="py-24 md:py-32 lg:py-36 border-t border-brown/10">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-eb-garamond text-brown leading-tight mb-16 text-center">
              Lesson Details
            </h2>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(49,34,30,0.05)] hover:shadow-[0_4px_20px_rgba(49,34,30,0.1)] transition-shadow duration-300">
                <h3 className="text-2xl font-eb-garamond text-brown mb-5">
                  Lesson Structure
                </h3>
                <p className="text-brown/90 leading-relaxed">
                  Lessons are 30, 45, or 60 minutes long, tailored to each student's needs and goals. 
                  Each lesson includes technique, repertoire, and music theory.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(49,34,30,0.05)] hover:shadow-[0_4px_20px_rgba(49,34,30,0.1)] transition-shadow duration-300">
                <h3 className="text-2xl font-eb-garamond text-brown mb-5">
                  Studio Location
                </h3>
                <p className="text-brown/90 leading-relaxed">
                  Lessons are held in my private studio in Portland, equipped with a Yamaha grand piano 
                  and comprehensive teaching materials.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(49,34,30,0.05)] hover:shadow-[0_4px_20px_rgba(49,34,30,0.1)] transition-shadow duration-300">
                <h3 className="text-2xl font-eb-garamond text-brown mb-5">
                  Student Ages
                </h3>
                <p className="text-brown/90 leading-relaxed">
                  I welcome students of all ages, from young children to adults. Beginners and advanced 
                  players are equally welcome.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 lg:py-36 border-t border-brown/10 bg-brown/[0.03]">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-eb-garamond text-brown leading-tight mb-8">
                Ready to Begin?
              </h2>
              <p className="text-xl text-brown/90 leading-relaxed mb-10">
                Contact me to schedule a consultation and discuss how we can work together to achieve your musical goals.
              </p>
              <Link
                href="/contact"
                className="button-primary text-lg px-10 py-4"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
