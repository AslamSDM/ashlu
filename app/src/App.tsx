import { useEffect, useState } from 'react';
import './App.css';
import { 
  MapPin, 
  Instagram, 
  MessageCircle, 
  Hash, 
  CloudSun, 
  Users, 
  Car,
  Play,
  Navigation
} from 'lucide-react';

// Countdown Timer Component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 34, hours: 5, minutes: 17 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 md:gap-8">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-serif text-gold font-light">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="text-xs md:text-sm text-cream/80 uppercase tracking-widest mt-1">D</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-serif text-gold font-light">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs md:text-sm text-cream/80 uppercase tracking-widest mt-1">H</div>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-serif text-gold font-light">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs md:text-sm text-cream/80 uppercase tracking-widest mt-1">M</div>
      </div>
    </div>
  );
}

// Event Card Component
interface EventCardProps {
  title: string;
  date: string;
  venue: string;
  time: string;
  index: number;
}

function EventCard({ title, date, venue, time, index }: EventCardProps) {
  return (
    <div 
      className="event-card rounded-2xl p-6 text-center group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-xl md:text-2xl font-serif text-teal-dark mb-3 tracking-wide">{title}</h3>
      <div className="space-y-1 text-sm text-gray-600">
        <p className="font-medium">{date}</p>
        <p>{venue}</p>
        <p className="text-gold">{time}</p>
      </div>
      <a 
        href="https://maps.google.com/?q=Rambagh+Palace+Jaipur" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-4 text-xs text-teal hover:text-teal-dark transition-colors"
      >
        <Navigation className="w-3 h-3" />
        See the route
      </a>
    </div>
  );
}

// Info Card Component
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cream/50 flex items-center justify-center text-gold">
        {icon}
      </div>
      <h3 className="text-lg font-serif text-navy mb-2">{title}</h3>
      <p className="text-sm text-navy/70 leading-relaxed">{description}</p>
    </div>
  );
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const events = [
    { title: 'Mehendi', date: 'Friday, March 9th 2026', venue: 'Rambagh, Jaipur', time: '6pm Onwards' },
    { title: 'Haldi', date: 'Friday, March 10th 2026', venue: 'Rambagh, Jaipur', time: '6pm Onwards' },
    { title: 'Cocktail', date: 'Friday, March 10th 2026', venue: 'Rambagh, Jaipur', time: '6pm Onwards' },
    { title: 'Engagement', date: 'Friday, March 11th 2026', venue: 'Rambagh, Jaipur', time: '6pm Onwards' },
    { title: 'Shaadi', date: 'Friday, March 12th 2026', venue: 'Rambagh, Jaipur', time: '6pm Onwards' },
    { title: 'Reception', date: 'Friday, March 17th 2026', venue: 'Rambagh, Jaipur', time: '6pm Onwards' },
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Fixed Buy Now Button */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        <a 
          href="https://rzp.io/rzp/city2" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-800 shadow-lg hover:bg-white transition-all"
        >
          Buy Now
        </a>
        <div className="bg-navy text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
          SGD 55.59
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img 
            src="/hero-image.jpg" 
            alt="Wedding Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 py-20">
          {/* Play Button */}
          <button className="mb-8 w-14 h-14 rounded-full bg-orange-500/90 flex items-center justify-center mx-auto hover:bg-orange-500 transition-all shadow-lg hover:scale-110">
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </button>

          {/* Names */}
          <div className="space-y-2 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream tracking-wider drop-shadow-lg">
              ABHISHEK
            </h1>
            <p className="text-2xl md:text-3xl font-script text-gold drop-shadow-md">WEDS</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream tracking-wider drop-shadow-lg">
              KANIKA
            </h1>
          </div>

          {/* Sanskrit Blessing */}
          <p className="mt-8 text-lg md:text-xl text-cream/90 font-serif tracking-widest animate-fade-in" style={{ animationDelay: '0.5s' }}>
            ॐ श्री गणेशाय नम
          </p>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="relative py-20 md:py-32 bg-teal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Ganesh Symbol */}
          <div className="mb-8 animate-float">
            <svg viewBox="0 0 100 100" className="w-20 h-20 mx-auto text-gold">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <text x="50" y="60" textAnchor="middle" className="text-3xl fill-current">🕉</text>
            </svg>
          </div>

          <p className="text-cream/80 text-sm md:text-base tracking-widest uppercase mb-4">
            With the heavenly blessings of
          </p>
          
          <div className="space-y-1 text-cream/90 text-sm md:text-base mb-6">
            <p>Smt. Lata Devi & Sm. Kamal Kapoor</p>
            <p className="text-gold">——</p>
            <p>Mrs. Reena & Mr. Rajiv Kapoor</p>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-gold tracking-widest mb-6">
            INVITE
          </h2>

          <p className="text-cream/80 text-sm tracking-widest mb-8">
            You to join us in the wedding celebrations of
          </p>

          <div className="space-y-2 mb-8">
            <h3 className="text-4xl md:text-5xl font-script text-cream">Abhishek</h3>
            <p className="text-gold text-2xl">&</p>
            <h3 className="text-4xl md:text-5xl font-script text-cream">Kanika</h3>
          </div>

          <p className="text-cream/70 text-sm">
            Daughter of<br />
            Mrs. Shalini & Mr. Aakash Mittal,
          </p>

          <p className="text-cream/80 text-sm tracking-widest mt-8 uppercase">
            On the following events
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24 bg-teal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={event.title} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* See the Route Section */}
      <section className="py-16 md:py-24 bg-teal relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-cream mb-4">SEE THE ROUTE</h2>
          <p className="text-cream/70 text-sm mb-8">Click to open the map</p>
          
          <a 
            href="https://maps.google.com/?q=Rambagh+Palace+Jaipur" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block relative group"
          >
            <div className="w-20 h-20 rounded-full border-2 border-cream/50 flex items-center justify-center group-hover:border-gold transition-colors">
              <MapPin className="w-8 h-8 text-cream group-hover:text-gold transition-colors" />
            </div>
          </a>

          {/* Car Image */}
          <div className="mt-12 relative">
            <img 
              src="/route-car.jpg" 
              alt="Vintage Car" 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Bride & Groom Section */}
      <section className="py-20 md:py-32 bg-pink relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-navy/60 text-sm tracking-widest uppercase mb-2">meet the</p>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-12">bride and groom</h2>
          
          <p className="text-navy/80 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            We are both so delighted that you are able to join us in celebrating what we hope will be one of the 
            happiest days of our lives. The affection shown to us by so many people since our roka has been 
            incredibly moving, and has touched us both deeply. We would like to take this opportunity to thank 
            everyone most sincerely for their kindness. We are looking forward to see you at the wedding.
          </p>

          {/* Couple Image with Ornate Frame */}
          <div className="relative max-w-md mx-auto">
            <div className="ornate-frame rounded-lg overflow-hidden">
              <img 
                src="/couple-frame.jpg" 
                alt="Bride and Groom" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 md:py-32 bg-pink relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-navy/60 text-sm tracking-widest uppercase mb-2">Please</p>
          <h2 className="text-5xl md:text-6xl font-serif text-navy mb-8">RSVP</h2>
          
          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm tracking-wide">Click to message on WhatsApp</span>
          </a>
        </div>

        {/* Decorative Car */}
        <div className="mt-16 relative">
          <img 
            src="/route-car.jpg" 
            alt="Decorative Car" 
            className="w-full max-w-xl mx-auto opacity-80"
          />
        </div>
      </section>

      {/* Things to Know Section */}
      <section className="py-20 md:py-32 bg-yellow relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">Things to know</h2>
            <p className="text-navy/70 text-sm max-w-xl mx-auto">
              To help you feel at ease and enjoy every moment of the celebrations, we've gathered a few 
              thoughtful details we'd love for you to know before the big day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard 
              icon={<Hash className="w-7 h-7" />}
              title="Hashtag"
              description="While posting photos on social media please use the hashtag - #abkan"
            />
            <InfoCard 
              icon={<CloudSun className="w-7 h-7" />}
              title="Weather"
              description="It will be mostly sunny with temperature reaching up to 28 degrees at the venue"
            />
            <InfoCard 
              icon={<Users className="w-7 h-7" />}
              title="Staff"
              description="We recommend the nearby hotel called Bhola Bhawan near the venue for the staff members"
            />
            <InfoCard 
              icon={<Car className="w-7 h-7" />}
              title="Parking"
              description="Valet parking for all our guests will be available at the venue"
            />
          </div>
        </div>
      </section>

      {/* Follow the Action Section */}
      <section className="py-20 md:py-32 bg-yellow relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-navy/60 text-sm tracking-widest uppercase mb-2">Follow</p>
          <h2 className="text-4xl md:text-5xl font-serif text-navy mb-8">the action</h2>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm tracking-wide">Click to open our Instagram page</span>
          </a>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/night-car.jpg" 
            alt="Night Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-cream/70 text-sm tracking-widest uppercase mb-4">The countdown begins</p>
          <CountdownTimer />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-8 text-center">
        <a 
          href="https://missingpieceinvites.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-cream/60 text-sm hover:text-gold transition-colors"
        >
          Missingpiece
        </a>
      </footer>
    </div>
  );
}

export default App;
