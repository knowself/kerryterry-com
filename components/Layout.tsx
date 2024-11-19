import Head from 'next/head';
import { useRouter } from 'next/router';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

export default function Layout({
  children,
  title = 'Piano Lessons in Lake County | Kerry Terry Piano',
  description = 'Discover the joy of piano with Kerry Terry. Offering personalized piano lessons in Lake County for beginners to advanced students. Traditional methods combined with modern techniques.',
  image = '/images/piano-lessons.jpg',
}: LayoutProps) {
  const router = useRouter();
  const canonicalUrl = `https://kerryterry.com${router.asPath}`;
  const siteName = 'Kerry Terry Piano';

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Canonical Link */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#F4EEEC" />

        {/* Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&family=Proza+Libre:wght@400;500&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&family=Proza+Libre:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Additional Meta Tags */}
        <meta name="author" content="Kerry Terry" />
        <meta name="keywords" content="piano lessons, piano teacher, music education, Lake County, California, Kerry Terry, piano instruction, beginner piano, advanced piano" />
        <meta name="format-detection" content="telephone=no" />
      </Head>

      <div className="min-h-screen flex flex-col bg-offwhite">
        <Navigation />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
