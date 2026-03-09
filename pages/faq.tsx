import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const faqItems = [
  {
    question: 'Do I need a piano?',
    answer: (
      <p>
       Yes. A piano or keyboard is needed for lessons. If you do not have one, I can help you find a good option to get started. Generally, a full-size keyboard with weighted keys is ideal for learning proper technique and developing finger strength.
      </p>
    )
  },
  {
    question: 'How to get started?',
    answer: (
      <p>
        Connect with me via <Link href="/contact" className="text-blue-600 hover:text-blue-700">email</Link> and
        we will find a time that fits our schedule, Monday through Friday. I do not require a contract for any
        time period, it is month to month. If you decide it is no longer a good fit, or for any other reason,
        just let me know and we&apos;ll end the lessons.
      </p>
    )
  },
 {
    question: 'Who are lessons for?',
    answer:
      'Lessons are designed for beginner to intermediate students, including children and adults. Instruction is personalized so each student can learn at a pace that supports confidence, growth, and enjoyment.'
  },
  {
    question: 'What can I expect at the first lesson?',
    answer: 'First Lesson is free so that you and/or the student can decide if I\'m the right teacher. Should you decide to continue the next lesson and onward is for pay.'
  },
  {
    question: 'What are the rates?',
    answer:
      'The current rate is $25 per half hour lesson for each student. If you continue after the first free lesson, regular lesson rates begin with the next scheduled session.'
  },
  {
    question: 'What materials are needed?',
    answer:
      'Students usually need piano books for lesson, theory, technique and performance work. I teach using Alfred Music and Piano Adventures materials, selecting books that match the student’s level and goals. These can be ordered online to be received before the first lesson. Other piano music and composition materials will be discussed.'
  },
  {
    question: 'What happens if a lesson is missed?',
    answer:
      'Missed lessons are handled flexibly. With advance notice, a lesson can be rescheduled for another day during the same week if availability permits. Otherwise, the lesson is skipped for that week which means more time for playing music.'
  },
    {
    question: 'A Word About Practicing',
    answer: (
      <>
        <p>
          Each student is unique. The young child should have time to practice at least 15 to 30 minutes a day
          in the beginning. The older child and adult should have time to practice at least 30 to 45 minutes a
          day in the first weeks. Hands and fingers will get tired, this is normal.
        </p>
        <p className="mt-4">
          Students will build strength with consistent practice. I encourage students to practice every day, but
          sometimes that may not be possible. Even playing the songs a couple of times, which might not be longer
          than 5 minutes at the keyboard during that day, is good and is still considered practice.
        </p>
        <p className="mt-4">
          Daily experience at the keyboard is good for the student&apos;s hands, ears, eyes, and mind. As they
          progress, so should their daily practice time. Focused and consistent practice develops a greater
          understanding of the music and helps one become a better musician.
        </p>
      </>
    )
  }

];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index));
  };

  return (
    <Layout
      title="FAQ | Kerry Terry Piano Lessons"
      description="Frequently asked questions about Kerry Terry's piano lessons, rates, scheduling, and getting started."
    >
      <div className="min-h-screen pt-16 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-eb-garamond font-medium text-gray-900 mb-6">
              FAQ
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about lessons, scheduling, practice, and getting started.
            </p>
          </div>

          <section className="max-w-3xl mx-auto space-y-4 animate-fade-in-up animation-delay-200">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className="text-xl font-eb-garamond font-medium text-gray-900">
                      {item.question}
                    </span>
                    <span
                      className={`text-2xl leading-none text-brown transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  {isOpen ? (
                    <div
                      id={answerId}
                      className="border-t border-gray-200 bg-white px-6 py-5 text-gray-600 leading-relaxed"
                    >
                      {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </Layout>
  );
}
