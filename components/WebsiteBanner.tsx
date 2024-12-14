import Image from 'next/image';

export default function WebsiteBanner() {
  return (
    <div className="bg-offwhite">
      <div className="max-w-7xl mx-auto">
        <div className="w-1/3 mx-auto" style={{ maxWidth: '500px' }}>
          <Image
            src="/images/website-banner.png"
            alt="Kerry Terry's Piano Lessons Banner"
            width={500}
            height={80}
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
