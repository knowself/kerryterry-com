import { render, screen, act } from '@testing-library/react';
import { SmoothCarousel } from './SmoothCarousel';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />
}));

describe('SmoothCarousel', () => {
  const mockImages = [
    { src: '/test1.jpg', alt: 'Test 1' },
    { src: '/test2.jpg', alt: 'Test 2' },
    { src: '/test3.jpg', alt: 'Test 3' }
  ];

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('renders without crashing', () => {
    render(<SmoothCarousel images={mockImages} />);
    expect(screen.getByAltText('Test 1')).toBeInTheDocument();
  });

  it('renders single image without carousel', () => {
    render(<SmoothCarousel images={[mockImages[0]]} />);
    expect(screen.getByAltText('Test 1')).toBeInTheDocument();
    expect(screen.queryByAltText('Test 2')).not.toBeInTheDocument();
  });

  it('renders nothing when images array is empty', () => {
    const { container } = render(<SmoothCarousel images={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('applies custom height', () => {
    render(<SmoothCarousel images={mockImages} height={500} />);
    const container = screen.getByAltText('Test 1').closest('div');
    expect(container?.parentElement).toHaveStyle({ height: '500px' });
  });

  it('applies custom className', () => {
    render(<SmoothCarousel images={mockImages} className="custom-class" />);
    expect(screen.getByTestId('carousel-container')).toHaveClass('custom-class');
  });

  it('transitions to next image', () => {
    jest.useFakeTimers();
    render(<SmoothCarousel images={mockImages} speed={1} />);

    // Initial state
    expect(screen.getByAltText('Test 1')).toBeInTheDocument();
    expect(screen.getByAltText('Test 2')).toBeInTheDocument();

    // Advance time to trigger transition
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    // Check if images have updated
    expect(screen.getByAltText('Test 2')).toBeInTheDocument();
    expect(screen.getByAltText('Test 3')).toBeInTheDocument();
  });

  it('handles custom spacing', () => {
    render(<SmoothCarousel images={mockImages} spacing={75} />);
    const nextImage = screen.getByAltText('Test 2').closest('div');
    expect(nextImage).toHaveStyle({ transform: 'translateX(75%)' });
  });

  it('pauses on hover when pauseOnHover is true', () => {
    render(<SmoothCarousel images={mockImages} pauseOnHover />);
    const container = screen.getByTestId('carousel-container');
    
    // Simulate hover
    act(() => {
      container.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    });

    // Check if animation is paused
    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img.closest('div')).toHaveStyle({ animationPlayState: 'paused' });
    });
  });
});
