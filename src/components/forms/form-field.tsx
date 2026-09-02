import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };
export function FormField({ label, error, id, className = "", ...props }: Props) {
  return (
    <label className="grid gap-1.5 text-sm font-medium" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        className={`bg-surface min-h-10 rounded-md border px-3 text-sm font-normal ${className}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error ? (
        <span id={`${id}-error`} className="text-danger text-xs font-normal">
          {error}
        </span>
      ) : null}
    </label>
  );
}
