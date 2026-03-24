import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "default" | "secondary";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClassName: Record<ButtonVariant, string> = {
  default:
    "border-transparent bg-[var(--color-bg-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-bg-primary-hover)]",
  secondary:
    "border-[var(--color-border-strong)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary-hover)]",
};

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const classes = [
    "effect-shadow-sm inline-flex h-12 items-center justify-center rounded-[var(--size-radius-lg)] border px-[var(--size-space-5)] py-0 transition-colors",
    variantClassName[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if ("href" in props) {
    return (
      <a className={classes} {...props}>
        <span className="text-body-m">{children}</span>
      </a>
    );
  }

  return (
    <button
      className={classes}
      type={props.type ?? "button"}
      {...props}
    >
      <span className="text-body-m">{children}</span>
    </button>
  );
}
