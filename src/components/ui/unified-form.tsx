"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input as BaseInput } from "@/components/ui/input";
import { Textarea as BaseTextarea } from "@/components/ui/textarea";
import { CONTACT_FORM } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function UnifiedForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_FORM.recipientEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "New Lead from Technical Lifts (Site-wide form)",
          }),
        },
      );

      // Consider submission successful for UX purposes regardless of remote response
      setSuccess(true);
      // Notify other parts of the app without requiring props
      try {
        window.dispatchEvent(
          new CustomEvent("lead-submitted", { detail: data }),
        );
      } catch {}
    } catch {
      setSuccess(true);
      try {
        window.dispatchEvent(
          new CustomEvent("lead-submitted", { detail: data }),
        );
      } catch {}
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="bg-surface w-full rounded-2xl border border-white/[0.08] p-8 text-center">
        <div className="text-primary mb-4 text-5xl font-bold">Thanks</div>
        <p className="text-text-muted">We&apos;ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-surface w-full rounded-2xl border border-white/[0.08] p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4">
          <Field id="lead-name" label="Full name">
            <Input
              id="lead-name"
              name="name"
              required
              placeholder="First and last name"
            />
          </Field>

          <Field id="lead-phone" label="Phone">
            <Input
              id="lead-phone"
              name="phone"
              required
              placeholder="+91 98765 43210"
            />
          </Field>

          <Field id="lead-email" label="Email">
            <Input
              id="lead-email"
              name="email"
              required
              type="email"
              placeholder="you@domain.com"
            />
          </Field>
        </div>

        <Button
          type="submit"
          size="lg"
          className="h-12 w-full text-base"
          disabled={submitting}
        >
          {submitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}

// Small field helpers to keep consistent styles
export function Field({
  id,
  label,
  children,
  className,
}: {
  id?: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label
          htmlFor={id}
          className="text-text-muted block text-xs font-bold tracking-widest"
        >
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <BaseInput {...props} />;
}

export function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode;
}) {
  // We keep simple native select for simpler integration if needed,
  // but styled to match our system
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(
          "bg-surface text-text-base h-11 w-full appearance-none rounded-lg border border-white/[0.08] px-4 py-2 text-base transition-all outline-none md:text-sm",
          "focus:border-primary/50 focus:ring-primary/10 focus:ring-4",
          props.className,
        )}
      >
        {children}
      </select>
      <div className="text-text-muted pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg
          className="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return <BaseTextarea {...props} />;
}

export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={cn("mt-1", props.className)} type="checkbox" />
  );
}
