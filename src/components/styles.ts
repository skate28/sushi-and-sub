export const focusRing =
  "focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent";

export const buttonBase = `inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-semibold leading-none tracking-wide transition-colors ${focusRing}`;

export const buttonPrimary = `${buttonBase} bg-brand text-paper hover:bg-brand-deep`;

export const buttonSecondary = `${buttonBase} bg-paper text-ink ring-1 ring-inset ring-ink/15 hover:bg-ink hover:text-paper`;

export const buttonSalmon = `${buttonBase} bg-salmon text-ink hover:bg-paper`;
