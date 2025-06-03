// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const toggleForm = () => {
    setShowForm(!showForm);
    if (!showForm && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <Head>
        <title>Delise Athletics | Train With Brywn</title>
        <meta name="description" content="High-performance coaching for women who want real results. Train with Brywn and transform your body, mindset, and life." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Delise Athletics" />
        <meta property="og:title" content="Delise Athletics | Train With Brywn" />
        <meta property="og:description" content="High-performance coaching for women ready to transform inside and out." />
        <meta property="og:image" content="/transformation.jpg" />
        <meta property="og:url" content="https://your-vercel-link.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-gray-900 text-white px-6 py-16 flex flex-col items-center font-sans">
        <header className="w-full max-w-6xl flex justify-between items-center mb-12">
          <Image src="/delise-logo.png" alt="Delise Athletics Logo" width={140} height={60} />
          <a href="#apply" className="text-cyan-400 hover:underline text-sm font-semibold">Apply</a>
        </header>

        <section className="max-w-4xl text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Built for <span className="text-cyan-400">Strong Women</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Delise Athletics is for women ready to level up. Online coaching, personalized training, and community — led by Coach Brywn.
          </p>
          <button
            onClick={toggleForm}
            className="inline-block bg-cyan-600 hover:bg-cyan-700 transition px-8 py-4 rounded-xl text-lg font-semibold"
          >
            Apply for Coaching
          </button>
        </section>

        <section className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard title="1-on-1 Coaching" description="Personalized plans, check-ins, and support from Coach Brywn every step of the way." />
          <FeatureCard title="Online Programs" description="Flexible, structured programs you can follow from anywhere with pro guidance." />
          <FeatureCard title="Group Sessions" description="Train alongside others with shared goals. Motivation, structure, results." />
          <FeatureCard title="Nutrition Planning" description="Macros, meals, and mindset. Fuel your performance and recovery properly." />
          <FeatureCard title="Transformation Challenges" description="Ready for a real change? Our seasonal challenges build accountability and momentum." />
        </section>

        <section className="max-w-4xl text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Delise Athletics?</h2>
          <p className="text-lg text-gray-300">
            Because you&apos;re not just training for looks. You&apos;re building strength, discipline, and self-respect — inside and out.
          </p>
        </section>

        <section className="w-full max-w-6xl mb-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard name="Jada M." title="Online Client" quote="Coach Brywn helped me finally stay consistent. I feel strong and confident again!" />
            <TestimonialCard name="Nina S." title="Group Training" quote="The energy in her classes is unmatched. I love training with other women who push each other." />
            <TestimonialCard name="Erica R." title="Transformation Challenge" quote="I dropped 12 pounds and gained so much confidence. Highly recommend joining." />
          </div>
        </section>

        <section className="text-center mb-12">
          <p className="text-sm text-gray-400">Ready to work with Coach Brywn?</p>
          <button
            onClick={toggleForm}
            className="text-cyan-400 underline text-sm hover:text-cyan-300 transition"
          >
            Apply for Coaching
          </button>
        </section>

        <AnimatePresence>
          {showForm && (
            <motion.section
              ref={formRef}
              className="w-full max-w-3xl mb-20"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-center mb-6">Apply for Coaching</h2>
              {/* TODO: Replace this Jotform with the real Google Form */}
              <iframe
                title="Coaching Application Form"
                src="https://form.jotform.com/251482303686156"
                width="100%"
                height="600"
                className="rounded-xl border-0 shadow-lg"
                loading="lazy"
              ></iframe>
            </motion.section>
          )}
        </AnimatePresence>

        <footer className="w-full max-w-6xl text-center text-sm text-gray-500 border-t border-white/10 pt-8">
          &copy; {new Date().getFullYear()} Delise Athletics. All rights reserved.
          <div className="mt-2">
            Powered by <a href="https://built.simple" className="text-cyan-400 hover:underline">Built Simple</a>
          </div>
        </footer>
      </main>
    </>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition text-left">
      <h3 className="text-xl font-bold mb-2 text-cyan-400">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, title, quote }: { name: string; title: string; quote: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left shadow-md">
      <p className="italic text-sm text-gray-300 mb-4">&quot;{quote}&quot;</p>
      <h4 className="text-md font-semibold text-white">{name}</h4>
      <p className="text-xs text-gray-400">{title}</p>
    </div>
  );
}