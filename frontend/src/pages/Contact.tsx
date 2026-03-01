import { Mail, MapPin, Phone, ChevronRight, Users, ExternalLink, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: 'oklch(0.22 0.09 155)' }}
      >
        <div className="container mx-auto px-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-4"
            style={{ backgroundColor: 'oklch(0.52 0.22 25 / 0.8)', color: 'white' }}
          >
            <Users size={12} /> Membership
          </div>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-white mb-4">
            Join the<br />
            <span style={{ color: 'oklch(0.78 0.12 75)' }}>Movement</span>
          </h1>
          <p className="text-white/75 font-sans text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Be part of Bangladesh's oldest and most storied political party. Join millions of Bangladeshis who believe in democracy, secularism, and a prosperous future.
          </p>
          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.albd.org/join-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: 'oklch(0.52 0.22 25)' }}
            >
              <Users size={16} />
              Join Us ↗
            </a>
            <a
              href="https://www.albd.org/pages/contact-en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white border border-white/30 backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <MessageSquare size={16} />
              Contact Us ↗
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                Icon: MapPin,
                title: 'Headquarters',
                info: '23 Bangabandhu Avenue, Dhaka 1000, Bangladesh',
              },
              {
                Icon: Phone,
                title: 'Phone',
                info: '+880-2-9559001',
              },
              {
                Icon: Mail,
                title: 'Email',
                info: 'info@albd.org',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center rounded-2xl p-6 border bg-card"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.25)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: 'oklch(0.38 0.1 155 / 0.1)' }}
                >
                  <item.Icon size={22} style={{ color: 'oklch(0.38 0.1 155)' }} />
                </div>
                <div className="font-serif font-bold text-base text-foreground mb-1">{item.title}</div>
                <div className="text-muted-foreground text-sm font-sans">{item.info}</div>
              </div>
            ))}
          </div>

          {/* Membership Info */}
          <div
            className="rounded-2xl p-8 border text-center"
            style={{ borderColor: 'oklch(0.38 0.1 155 / 0.25)', backgroundColor: 'oklch(0.38 0.1 155 / 0.05)' }}
          >
            <h2 className="font-serif font-bold text-2xl text-foreground mb-4">
              Membership Information
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto mb-8">
              To join the Awami League or its affiliated organizations, please visit your local district or upazila committee office, or contact the party headquarters directly. Membership is open to all Bangladeshi citizens who support the party's principles of democracy, secularism, Bengali nationalism, and social justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.albd.org/join-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{ backgroundColor: 'oklch(0.38 0.1 155)' }}
              >
                <Users size={16} />
                Join Us <ExternalLink size={14} />
              </a>
              <a
                href="https://www.albd.org/pages/contact-en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'transparent',
                  color: 'oklch(0.38 0.1 155)',
                  border: '2px solid oklch(0.38 0.1 155)',
                }}
              >
                <MessageSquare size={16} />
                Contact Us <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.96 0.008 90)' }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-foreground mb-3">
              Why Join the Awami League?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: 'A Legacy of Service',
                desc: 'Join a party with over 75 years of history serving the people of Bangladesh, from the Language Movement to independence and beyond.',
              },
              {
                title: 'Democratic Values',
                desc: 'Stand for democracy, free elections, and the rule of law — the principles that Bangabandhu fought and died for.',
              },
              {
                title: 'Secular Bangladesh',
                desc: 'Uphold the vision of a secular, inclusive Bangladesh where all citizens are equal regardless of religion, ethnicity, or gender.',
              },
              {
                title: 'Build the Future',
                desc: 'Be part of the Vision 2041 journey — transforming Bangladesh into a smart, developed nation for future generations.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6 border bg-card"
                style={{ borderColor: 'oklch(0.38 0.1 155 / 0.2)' }}
              >
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliated Wings */}
      <section
        className="py-16"
        style={{ backgroundColor: 'oklch(0.25 0.09 155)' }}
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-serif font-bold text-3xl text-white mb-4">
            Find Your Wing
          </h2>
          <p className="text-white/70 font-sans mb-8">
            The Awami League has affiliated organizations for students, youth, farmers, workers, and women. Find the wing that best represents you.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {[
              'Bangladesh Chhatra League',
              'Bangladesh Jubo League',
              'Bangladesh Krishak League',
              'Bangladesh Sramik League',
              'Bangladesh Mahila Awami League',
              'Awami Swechasebak League',
            ].map((wing) => (
              <div
                key={wing}
                className="rounded-xl p-3 text-sm font-sans text-white/80 border"
                style={{ backgroundColor: 'oklch(0.32 0.09 155)', borderColor: 'oklch(0.78 0.12 75 / 0.2)' }}
              >
                {wing}
              </div>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.albd.org/join-us/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ backgroundColor: 'oklch(0.52 0.22 25)' }}
            >
              <Users size={16} />
              Join Us ↗
            </a>
            <a
              href="https://www.albd.org/pages/contact-en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-sans font-semibold transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
              style={{ color: 'white', border: '1px solid oklch(0.78 0.12 75 / 0.5)' }}
            >
              <MessageSquare size={16} />
              Contact Us ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
