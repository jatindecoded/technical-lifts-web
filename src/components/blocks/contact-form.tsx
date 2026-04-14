"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { CONTACT_FORM } from "@/lib/constants";

// Simple HTML form posting to FormSubmit.co for static export compatibility.
// TODO: Replace the action email (you@example.com) with the real recipient and set _next to your thank-you page.
export function ContactForm() {
  return (
    <div className="w-full rounded-xl border border-white/[0.08] p-8">
      <form
        action="https://formsubmit.co/you@example.com"
        method="POST"
        className="flex flex-col gap-5"
      >
        {/* FormSubmit hidden fields - replace _next and email in action */}
        <input type="hidden" name="_subject" value="Website inquiry — Technical Lifts" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://example.com/thank-you" />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium mb-1">Full name *</label>
            <input
              id="contact-name"
              name="name"
              required
              className="w-full rounded-md bg-background border border-white/[0.06] px-3 py-2 text-text-base"
              placeholder="First and last name"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium mb-1">Phone / WhatsApp *</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              className="w-full rounded-md bg-background border border-white/[0.06] px-3 py-2 text-text-base"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-inquiry" className="block text-sm font-medium mb-1">What are you looking for? *</label>
          <select
            id="contact-inquiry"
            name="inquiry"
            required
            className="w-full rounded-md bg-background border border-white/[0.06] px-3 py-2 text-text-base"
          >
            {CONTACT_FORM.inquiryOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium mb-1">Anything else?</label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            className="w-full rounded-md bg-background border border-white/[0.06] px-3 py-2 text-text-base"
            placeholder="Tell us about your goal, schedule, any injuries — anything helpful"
          />
        </div>

        <div className="flex items-start gap-3">
          <input id="contact-agree" name="agree" type="checkbox" className="mt-1" />
          <label htmlFor="contact-agree" className="text-sm text-muted-foreground">
            I agree to be contacted by the Technical Lifts team
          </label>
        </div>

        <Button type="submit" size="lg" className="w-full sm:w-fit">
          {CONTACT_FORM.submitLabel}
        </Button>
      </form>
    </div>
  );
}
