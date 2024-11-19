import { useRouter } from 'next/router';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  path: string;
}

export default function Breadcrumbs() {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment);
  
  // Generate breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    return {
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      path,
    };
  });

  // Add home as first item
  breadcrumbs.unshift({ name: 'Home', path: '/' });

  // Generate JSON-LD schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `https://kerryterry.com${item.path}`,
        name: item.name,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 my-4">
        <ol className="list-none p-0 inline-flex">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-800" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="hover:text-primary">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
