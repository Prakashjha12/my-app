"use client";

import { useActionState } from "react";
import { submitWaitlist } from "@/app/actions/submitAccess";

const initialState = {
  message: "",
  success: false,
};

export default function WaitlistForm() {
  const [state, formAction, isPending] = useActionState(submitWaitlist, initialState);

  if (state.success) {
    return (
      <div className="relative flex flex-col items-center justify-center p-8 rounded-xl liquid-glass-strong border border-primary/20 text-center animate-fade-in">
        <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <span className="material-symbols-outlined text-primary text-2xl">check</span>
        </div>
        <h3 className="text-2xl font-headline italic text-white mb-2">Welcome to the CollabWise</h3>
        <p className="text-on-surface-variant/70 text-sm max-w-sm">
          {state.message} We will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <form action={formAction} className="relative flex flex-col p-4 sm:p-5 rounded-3xl liquid-glass-strong border border-white/10 w-full gap-3 sm:gap-4 max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          <input
            id="name-input"
            name="name"
            className="w-full sm:w-1/2 min-w-0 bg-white/5 rounded-2xl border-none focus:outline-none focus:ring-0 text-white placeholder:text-white/50 px-4 py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50 transition-colors"
            placeholder="Your Name"
            required
            type="text"
            aria-label="Name"
            disabled={isPending}
          />
          <select
            name="category"
            required
            aria-label="Category"
            disabled={isPending}
            defaultValue=""
            className="w-full sm:w-1/2 min-w-0 bg-white/5 rounded-2xl border-none focus:outline-none focus:ring-0 text-white/80 [&>option]:text-black px-4 py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50 transition-colors cursor-pointer appearance-none"
          >
            <option value="" disabled>Select Category</option>
            <option value="Influencer/creator">Influencer / Creator</option>
            <option value="Dj / artist">DJ / Artist</option>
            <option value="Photographers/cinematographers">Photographers / Cinematographers</option>
          </select>
        </div>
        <input
          id="email-input"
          name="email"
          className="w-full min-w-0 bg-white/5 rounded-2xl border-none focus:outline-none focus:ring-0 text-white placeholder:text-white/50 px-4 py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50 transition-colors"
          placeholder="your@email.com"
          required
          type="email"
          aria-label="Email address"
          disabled={isPending}
        />
        <button
          className="w-full bg-white text-black font-bold px-4 py-3 sm:py-4 md:py-4 mt-2 rounded-2xl hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-50 shrink-0 text-sm sm:text-base disabled:cursor-wait"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Joining..." : (
            <>
              <span>Join the collabwise</span>
              <span className="material-symbols-outlined text-[1rem] sm:text-sm">arrow_forward</span>
            </>
          )}
        </button>
      </form>
      {state.message && (
        <div className="mt-4 flex items-center justify-center gap-2 text-error text-sm font-medium">
          <span className="material-symbols-outlined text-sm">error</span>
          {state.message}
        </div>
      )}
      <div className="mt-4 flex items-center justify-center gap-6 opacity-40">
        <span className="text-[10px] uppercase tracking-widest">Limited Invitations Remaining</span>
      </div>
    </>
  );
}
