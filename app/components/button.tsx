import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "default" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClassName: Record<ButtonVariant, string> = {
  default:
    "border-transparent bg-[var(--color-bg-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-bg-primary-hover)]",
  secondary:
    "border-[var(--color-border-strong)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary-hover)]",
};

export function Button({
  children,
  className = "",
  type = "button",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "effect-shadow-sm inline-flex h-12 items-center justify-center rounded-[var(--size-radius-lg)] border px-[var(--size-space-5)] py-0 transition-colors",
        variantClassName[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      type={type}
      {...props}
    >
      <span className="text-body-m">{children}</span>
    </button>
  );
}
