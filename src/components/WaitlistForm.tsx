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
      <form action={formAction} className="relative flex items-center p-1 sm:p-2 rounded-full liquid-glass-strong border border-white/10 w-full">
        <input
          id="email-input"
          name="email"
          className="flex-1 min-w-0 bg-transparent border-none focus:outline-none focus:ring-0 text-white placeholder:text-white/50 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base disabled:opacity-50"
          placeholder="your@email.com"
          required
          type="email"
          aria-label="Email address"
          disabled={isPending}
        />
        <button
          className="bg-white text-black font-bold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center gap-1 sm:gap-2 disabled:opacity-50 shrink-0 text-sm sm:text-base disabled:cursor-wait"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Joining..." : (
            <>
              <span className="hidden sm:inline">Join the collabwise</span>
              <span className="inline sm:hidden">Join</span>
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
