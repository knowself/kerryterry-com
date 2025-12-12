import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout
      title="Contact | Kerry Terry Piano Lessons"
      description="Contact Kerry Terry for piano lessons. Offering lessons for beginners to advanced students."
    >
      <div className="min-h-screen pt-16 animate-fade-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-eb-garamond font-medium text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your musical journey? I'd love to hear from you.
            </p>
          </div>

          <div className="max-w-xl mx-auto animate-fade-in-up">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="space-y-8 text-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:kerryterry@aol.com"
                    className="nav-link text-2xl font-eb-garamond"
                  >
                    kerryterry@aol.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Availability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lessons are available Monday through Friday.<br />
                    New students are always welcome!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
