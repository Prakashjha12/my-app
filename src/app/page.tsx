import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 z-0">

        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80"></div>
        {/* Signature Glow Orbs */}
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-glow-orb rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-glow-orb rounded-full"></div>
      </div>

      {/* Navigation Shell */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-transparent backdrop-blur-md dark:bg-black/20 rounded-full mt-6 mx-auto w-[90%] max-w-5xl border border-white/10 shadow-[0_20px_50px_rgba(75,35,123,0.3)] animate-blur-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="text-2xl font-black italic tracking-tighter text-white">
          CollabWise
        </div>

        <a href="#email-input" className="px-6 py-2 rounded-full bg-primary text-white text-sm font-bold tracking-tight hover:scale-95 transition-transform duration-300 ease-out inline-block">
          Early Access
        </a>
      </nav>

      {/* Main Canvas */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 animate-blur-fade-in" style={{ animationDelay: '0.3s' }}>
        {/* Hero Section */}
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-white/5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#4b237b]"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant/100">
              Now accepting early-access applications.
            </span>
          </div>
          {/* Heading */}
          <h1 className="font-headline italic text-7xl md:text-9xl tracking-tight leading-[0.85] text-white">
            Something <br />
            <span className="text-primary text-glow">Significant</span> <br />
            Is Coming.
          </h1>
          {/* Subtext */}
          <p className="max-w-lg mx-auto text-on-surface-variant/70 text-lg md:text-xl font-light leading-relaxed">
            The digital stage for modern icons. <br />
            Enter your email to join the waitlist.
          </p>
          {/* Email Form */}
          <div className="max-w-md mx-auto w-full group">
            <WaitlistForm />
          </div>
        </div>


      </main>

      {/* Footer Shell */}
      <footer className="w-full flex flex-col md:flex-row items-center justify-between px-12 py-12 mt-auto bg-black border-t border-white/5 relative z-10 text-white animate-blur-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="font-[family-name:var(--font-manrope)] uppercase tracking-widest text-[10px] text-gray-500 mb-6 md:mb-0">
          {new Date().getFullYear()} - CollabWise.
        </div>
        <div className="flex items-center gap-8">
          <a className="font-[family-name:var(--font-manrope)] uppercase tracking-widest text-[10px] text-white hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100" href="https://www.instagram.com/collabwise?igsh=M3pwOTUycWx5ZWJv">Instagram</a>

          <a className="font-[family-name:var(--font-manrope)] uppercase tracking-widest text-[10px] text-white hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100" href="tel:+919982399828">Contact</a>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[1]">
        {/* Film Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
    </>
  );
}
