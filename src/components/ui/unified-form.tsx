"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type UnifiedFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  children?: React.ReactNode;
  submitLabel?: string;
  submittingLabel?: string;
  showWrapper?: boolean;
};

export function UnifiedForm({
  children,
  submitLabel = "Submit",
  submittingLabel = "Sending...",
  className,
  showWrapper = true,
  ...formProps
}: UnifiedFormProps) {
  const [submitting, setSubmitting] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (formProps.onSubmit) {
      e.preventDefault();
      setSubmitting(true);
      try {
        // @ts-ignore
        await formProps.onSubmit(e);
      } finally {
        setSubmitting(false);
      }
    }
    // if action is provided, let the native form submit continue
  }

  const wrapper = (
    <form onSubmit={handleSubmit} {...formProps} className={cn(className)}>
      {children}
      <div className="mt-4">
        <Button type="submit" size="lg" className="w-full sm:w-fit" disabled={submitting}>
          {submitting ? submittingLabel : submitLabel}
        </Button>
      </div>
    </form>
  );

  if (!showWrapper) return <>{children}</>;

  return <div className="w-full rounded-xl border border-white/[0.08] p-8">{wrapper}</div>;
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
    <div className={cn(className)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium mb-1">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn("w-full rounded-md bg-background border border-white/[0.06] px-3 py-2 text-text-base", props.className)}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn("w-full rounded-md bg-background border border-white/[0.06] px-3 py-2 text-text-base", props.className)}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn("w-full rounded-md bg-background border border-white/[0.06] px-3 py-2 text-text-base", props.className)}
    />
  );
}

export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn("mt-1", props.className)} type="checkbox" />;
}

export default UnifiedForm;
