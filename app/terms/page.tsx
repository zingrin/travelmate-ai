import React from "react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white flex justify-center items-start py-16 px-4">
      <div className="max-w-4xl w-full text-slate-700 leading-relaxed">
        <h1 className="text-4xl font-black text-slate-900 mb-8">
          Terms of Service
        </h1>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using TravelMate AI, you agree to be bound by
              these Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              2. Booking Responsibility
            </h2>
            <p>
              Users are responsible for providing accurate information during
              the booking process. Any errors in traveler details are the
              responsibility of the user.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              3. User Conduct
            </h2>
            <p>
              Users must not use the site for any unlawful purpose or to engage
              in any activity that could damage our reputation or services.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
