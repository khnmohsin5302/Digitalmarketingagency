function GrowthSyndicateLogo({ className = '' }) {
  return (
    <div className={`relative inline-block ${className}`} aria-label="Growth Syndicate logo">
      <div className="absolute inset-0 blur-2xl opacity-60 bg-gradient-to-r from-[#0a2d7a] via-[#d9a530] to-[#0a2d7a] rounded-full" />

      <div className="relative flex flex-col items-center leading-none">
        <div
          className="text-[34px] md:text-[42px] font-black tracking-[0.08em] uppercase"
          style={{
            color: '#082c78',
            textShadow: '0 0 18px rgba(8,44,120,0.45)',
          }}
        >
          GROWTH
        </div>

        <div
          className="-mt-1 text-[32px] md:text-[40px] font-black tracking-[0.08em] uppercase"
          style={{
            color: '#e0aa37',
            textShadow: '0 0 24px rgba(224,170,55,0.7)',
          }}
        >
          SYNDICATE
        </div>

        <div className="mt-2 flex items-center gap-3 text-[12px] md:text-[13px] font-semibold tracking-[0.08em] text-white/90">
          <span className="h-[2px] w-10 bg-[#e0aa37] shadow-[0_0_12px_rgba(224,170,55,0.8)]" />
          <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.45)]">
            Inevitable Marketing
          </span>
          <span className="h-[2px] w-10 bg-[#e0aa37] shadow-[0_0_12px_rgba(224,170,55,0.8)]" />
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CartIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6h15l-2 8H8L6 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 6 5 3H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TargetIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function UsersIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3 20c.7-4 3-6 6-6s5.3 2 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 15c2.6.3 4.5 2 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TrendIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 16l5-5 4 4 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h5v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AwardIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2" />
      <path d="M9 13l-2 8 5-3 5 3-2-8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PenIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20l4-1 11-11-3-3L5 16l-1 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 7l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function GearIcon({ className = 'w-8 h-8' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.3 3a7 7 0 0 0-1.7 1l-2.4-1-2 3.5 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 1.7 1l.3 3h5l.3-3a7 7 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5c.1-.3.1-.7.1-1Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

const values = [
  { title: 'Result-Driven', text: 'Every strategy is backed by data and designed to deliver measurable growth.', Icon: TargetIcon },
  { title: 'Client-First', text: 'We treat your business like our own — your success is our reputation.', Icon: UsersIcon },
  { title: 'Consistent Growth', text: 'No one-time spikes. We build systems that deliver leads month after month.', Icon: TrendIcon },
  { title: 'Proven Track Record', text: '100,000+ leads generated and ₹70 Cr+ revenue driven for our clients.', Icon: AwardIcon },
];

const services = [
  {
    title: 'Google Visibility',
    Icon: SearchIcon,
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop',
    text: 'SEO + Maps optimization so customers find you first when they search nearby.',
  },
  {
    title: 'Social Media Marketing',
    Icon: UsersIcon,
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop',
    text: 'Strategic content creation and management across Instagram, Facebook & LinkedIn to build your brand and engage your audience.',
  },
  {
    title: 'Paid Ads That Convert',
    Icon: TrendIcon,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    text: 'Strategic Meta & Google ad campaigns that deliver qualified leads daily.',
  },
  {
    title: 'Content & Creatives',
    Icon: PenIcon,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    text: 'Scroll-stopping content, reels & brand shoots that build authority.',
  },
  {
    title: 'Full-Funnel Marketing',
    Icon: GearIcon,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    text: 'From awareness to conversion — we handle everything so you get real results.',
  },
];

const templateTestCases = [
  { name: 'logo component is available', pass: typeof GrowthSyndicateLogo === 'function' },
  { name: 'has four value cards', pass: values.length === 4 },
  { name: 'has five service cards', pass: services.length === 5 },
  { name: 'every service has a local icon component', pass: services.every((service) => typeof service.Icon === 'function') },
  { name: 'every service has an image URL', pass: services.every((service) => service.image.startsWith('https://')) },
  { name: 'every value has visible text content', pass: values.every((item) => item.title.length > 0 && item.text.length > 0) },
  { name: 'every service has visible text content', pass: services.every((service) => service.title.length > 0 && service.text.length > 0) },
];

templateTestCases.forEach((test) => {
  if (!test.pass && typeof console !== 'undefined') {
    console.error(`Template test failed: ${test.name}`);
  }
});

export default function GrowthSyndicateWebsite() {
  return (
    <div className="min-h-screen bg-[#061427] text-white font-sans overflow-hidden">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatOne {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(22px, -32px); }
        }
        @keyframes slowZoom {
          0%, 100% { transform: scale(1.04); }
          50% { transform: scale(1.1); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 34px rgba(224, 170, 55, 0.26); }
          50% { box-shadow: 0 0 78px rgba(224, 170, 55, 0.48); }
        }
        .fade-up { animation: fadeUp 0.8s ease both; }
        .fade-up-delay { animation: fadeUp 0.8s ease 0.18s both; }
        .float-one { animation: floatOne 9s ease-in-out infinite; }
        .slow-zoom { animation: slowZoom 16s ease-in-out infinite; }
        .gold-glow { animation: glowPulse 2.8s ease-in-out infinite; }
      `}</style>

      <section className="relative min-h-screen overflow-hidden bg-[#061427]">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
          alt="Modern marketing agency office"
          className="absolute inset-0 h-full w-full object-cover opacity-20 slow-zoom"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(224,170,55,0.35),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.28),rgba(6,20,39,0.92)_42%,rgba(2,10,22,0.98))]" />
        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-[#e0aa37]/20 blur-[140px] float-one" />
        <div className="absolute bottom-0 right-0 h-[620px] w-[620px] rounded-full bg-[#04204a]/70 blur-[130px]" />

        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <GrowthSyndicateLogo className="scale-75 origin-left md:scale-90" />
          <nav className="hidden items-center gap-9 text-sm text-white/90 lg:flex">
            <a href="#" className="hover:text-[#d4a12f]">Home</a>
            <a href="#about" className="hover:text-[#d4a12f]">About Us</a>
            <a href="#services" className="hover:text-[#d4a12f]">Services</a>
            <a href="#approach" className="hover:text-[#d4a12f]">Our Approach</a>
            <a href="#results" className="hover:text-[#d4a12f]">Results</a>
            <a href="#contact" className="hover:text-[#d4a12f]">Contact</a>
          </nav>
          <button className="hidden rounded-xl border border-[#d4a12f] px-6 py-3 font-semibold text-[#d4a12f] transition hover:bg-[#d4a12f] hover:text-[#061427] lg:inline-flex items-center gap-2">
            Order Now <ArrowRightIcon className="h-4 w-4" />
          </button>
          <button className="rounded-xl border border-[#d4a12f]/60 px-4 py-3 text-[#d4a12f] lg:hidden">☰</button>
        </header>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-12 pt-10 lg:grid-cols-[1fr_1.15fr] lg:pb-20 lg:pt-12">
          <div id="about" className="fade-up">
            <p className="mb-7 inline-flex rounded-full border border-[#d4a12f] bg-white/10 px-5 py-2 text-xs uppercase tracking-wide text-white backdrop-blur-xl">
              Digital Marketing Agency
            </p>
            <h1 className="mb-7 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight text-white drop-shadow-xl md:text-6xl lg:text-7xl">
              We Help Brands Grow Where It <span className="text-[#e0aa37]">Matters Most</span>
            </h1>
            <p className="mb-5 max-w-xl text-lg leading-8 text-white/90">
              Growth Syndicate is a performance-focused digital marketing agency built for local businesses and growing brands. We combine strategy, creativity, and technology to turn online visibility into real-world revenue.
            </p>
            <p className="mb-8 max-w-xl text-lg leading-8 text-white/85">
              From salons and clinics to gyms and restaurants — we’ve helped 50+ businesses dominate their local market with consistent leads, calls, and bookings.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="gold-glow inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#f1c45f] to-[#d59a24] px-8 py-4 text-lg font-bold text-white transition hover:scale-105">
                <CartIcon /> Order Now
              </button>
              <button className="inline-flex items-center gap-3 rounded-xl border border-[#d4a12f] bg-[#061427]/50 px-8 py-4 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-[#d4a12f] hover:text-[#061427]">
                Our Services <ArrowRightIcon />
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((item) => (
                  <img
                    key={item}
                    src={`https://i.pravatar.cc/80?img=${item + 20}`}
                    alt="Client avatar"
                    className="h-11 w-11 rounded-full border-2 border-[#e0aa37] object-cover"
                  />
                ))}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#e0aa37] bg-[#e0aa37] text-sm font-bold">+12</div>
              </div>
              <p className="text-sm font-medium text-white">Trusted by 50+<br />local businesses</p>
            </div>
          </div>

          <div className="fade-up-delay relative">
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-[#07152a]/80 shadow-2xl backdrop-blur-xl transition duration-500 hover:scale-[1.015]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
                alt="Digital marketing performance dashboard"
                className="h-[430px] w-full object-cover opacity-90"
              />
            </div>
            <div className="absolute -bottom-10 right-6 rounded-3xl border border-white/20 bg-[#020a1a] px-8 py-7 shadow-2xl md:right-12">
              <h3 className="text-5xl font-black text-[#e0aa37]">50+</h3>
              <p className="text-2xl leading-6 text-white">Businesses<br />Transformed</p>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="relative bg-[#061427] px-6 pb-16">
        <div className="mx-auto grid max-w-7xl gap-0 overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-4 md:p-9">
          {values.map((item, index) => {
            const Icon = item.Icon;
            return (
              <div key={item.title} className={`p-4 ${index !== values.length - 1 ? 'md:border-r md:border-white/15' : ''}`}>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black/25 text-[#e0aa37]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="leading-7 text-white/75">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="services" className="relative bg-[#061427] px-6 py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,82,128,0.35),transparent_45%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#e0aa37]">What We Do</p>
            <h2 className="mb-5 text-4xl font-black md:text-5xl">Services Built for Local Growth</h2>
            <p className="mx-auto max-w-3xl text-lg text-white/80">A complete system designed to put your business in front of every potential customer.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => {
              const Icon = service.Icon;
              return (
                <div key={service.title} className="group overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#e0aa37]/70">
                  <div className="relative h-44 overflow-hidden">
                    <img src={service.image} alt={service.title} className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-110" />
                    <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#061427]/80 text-[#e0aa37] backdrop-blur-xl">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-2xl font-bold leading-tight text-white">{service.title}</h3>
                    <p className="leading-7 text-white/75">{service.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-[#061427] px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/15 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:flex md:items-center md:justify-between md:p-12">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#e0aa37]">Our Approach</p>
            <h2 className="mb-4 text-4xl font-black">Ready to Grow Your Business?</h2>
            <p className="max-w-2xl text-lg text-white/80">Let's build a system that brings you more leads, more calls, and more revenue.</p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/85">
              <span>▣ Free Strategy Call</span>
              <span>⌁ Custom Growth Plan</span>
              <span>◎ Results-Driven Approach</span>
            </div>
          </div>
          <button className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#f1c45f] to-[#d59a24] px-9 py-5 text-xl font-bold text-white transition hover:scale-105 md:mt-0">
            <CartIcon /> Order Now <ArrowRightIcon />
          </button>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-[#020a1a] px-6 py-10 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <GrowthSyndicateLogo className="scale-75" />
          <p>© 2026 Growth Syndicate. Inevitable Marketing.</p>
        </div>
      </footer>
    </div>
  );
}
