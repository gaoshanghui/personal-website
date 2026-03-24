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

function isLinkProps(props: ButtonProps): props is ButtonAsLinkProps {
  return typeof props.href === "string";
}

const variantClassName: Record<ButtonVariant, string> = {
  default:
    "border-transparent bg-[var(--color-bg-primary)] text-[var(--color-text-inverse)] hover:bg-[var(--color-bg-primary-hover)]",
  secondary:
    "border-[var(--color-border-strong)] bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary-hover)]",
};

export function Button({
  ...props
}: ButtonProps) {
  const { children, className = "", variant = "default" } = props;

  const classes = [
    "effect-shadow-sm inline-flex h-12 items-center justify-center rounded-[var(--size-radius-lg)] border px-[var(--size-space-5)] py-0 transition-colors",
    variantClassName[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isLinkProps(props)) {
    const {
      children: _children,
      className: _className,
      variant: _variant,
      href,
      ...anchorProps
    } = props;

    return (
      <a className={classes} href={href} {...anchorProps}>
        <span className="text-body-m">{children}</span>
      </a>
    );
  }

  const {
    children: _children,
    className: _className,
    variant: _variant,
    type,
    ...buttonProps
  } = props;

  return (
    <button
      className={classes}
      type={type ?? "button"}
      {...buttonProps}
    >
      <span className="text-body-m">{children}</span>
    </button>
  );
}
