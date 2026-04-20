import React, { useState } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// LoginScreen — built with Astral DS tokens only
//
// Layout tokens  : --astral-units-pos-*
// Color tokens   : --astral-color-surface-*, text-*, stroke-*, brand-*
// Typography     : --astral-font-family-sans, --astral-font-size-*, --astral-font-weight-*
// Border radius  : --astral-border-radius-*
// ─────────────────────────────────────────────────────────────────────────────

// ─── Icon Components ─────────────────────────────────────────────────────────

const EyeIcon = ({ visible }: { visible: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {visible ? (
      <>
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </>
    ) : (
      <>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </>
    )}
  </svg>
);

const AstralLogo = () => (
  // Surface token: brand-9 for the mark
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="8" fill="var(--astral-color-brand-9)" />
    <path
      d="M16 7L21.5 18H10.5L16 7Z"
      fill="var(--astral-color-text-inverse-default)"
    />
    <path
      d="M10.5 18L16 25L21.5 18H10.5Z"
      fill="var(--astral-color-text-inverse-default)"
      opacity="0.5"
    />
  </svg>
);

// ─── AstralInput ─────────────────────────────────────────────────────────────
// Tokens: stroke-default border, stroke-brand-active on focus, surface-default bg
// Radius: --astral-border-radius-xs (8px)
// Padding: pos-12 vertical, pos-16 horizontal

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  rightSlot?: React.ReactNode;
  error?: string;
}

const AstralInput: React.FC<InputProps> = ({ label, id, rightSlot, error, ...rest }) => {
  const [focused, setFocused] = useState(false);

  const wrapperStyle: React.CSSProperties = {
    // Layout: stack label + input with a small gap
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--astral-units-pos-6)',
  };

  const labelStyle: React.CSSProperties = {
    // Typography: body size, medium weight, default text
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-m)',
    fontWeight: 'var(--astral-font-weight-500)',
    color: 'var(--astral-color-text-default)',
    letterSpacing: 'var(--astral-letter-spacing-comfy)',
    lineHeight: 'var(--astral-line-height-s)',
  };

  const inputWrapStyle: React.CSSProperties = {
    // Surface: white bg, stroke border, xs radius
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--astral-color-surface-default)',
    border: `1px solid ${
      error
        ? 'var(--astral-color-stroke-error)'
        : focused
        ? 'var(--astral-color-stroke-brand-active)'
        : 'var(--astral-color-stroke-default)'
    }`,
    borderRadius: 'var(--astral-border-radius-xs)',
    // Transition is fine — no token needed for timing values
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    boxShadow: focused && !error
      ? '0 0 0 3px var(--astral-color-brand-2)'
      : 'none',
  };

  const inputStyle: React.CSSProperties = {
    // Typography: sans, m size, 400 weight, default text color
    flex: 1,
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-m)',
    fontWeight: 'var(--astral-font-weight-400)',
    color: 'var(--astral-color-text-default)',
    letterSpacing: 'var(--astral-letter-spacing-comfy)',
    // Spacing: pos-12 top/bottom, pos-16 left, pos-8 right if slot present
    padding: `var(--astral-units-pos-12) ${rightSlot ? 'var(--astral-units-pos-8)' : 'var(--astral-units-pos-16)'} var(--astral-units-pos-12) var(--astral-units-pos-16)`,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    width: '100%',
  };

  const slotStyle: React.CSSProperties = {
    // Icon slot: right padding, muted text color
    display: 'flex',
    alignItems: 'center',
    paddingRight: 'var(--astral-units-pos-12)',
    color: 'var(--astral-color-text-tertiary)',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-s)',
    fontWeight: 'var(--astral-font-weight-400)',
    color: 'var(--astral-color-text-error-default)',
    lineHeight: 'var(--astral-line-height-xs)',
    marginTop: 'var(--astral-units-pos-4)',
  };

  return (
    <div style={wrapperStyle}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <div style={inputWrapStyle}>
        <input
          id={id}
          style={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
        />
        {rightSlot && <div style={slotStyle}>{rightSlot}</div>}
      </div>
      {error && <span style={errorStyle}>{error}</span>}
    </div>
  );
};

// ─── AstralButton ─────────────────────────────────────────────────────────────
// Primary: brand-9 bg, inverse text, m radius
// Spacing: pos-14 vertical, pos-24 horizontal — fills full width on login form

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  loading?: boolean;
}

const AstralButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  loading,
  ...rest
}) => {
  const [hovered, setHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    // Layout
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--astral-units-pos-8)',
    width: '100%',
    // Spacing: pos-14 top/bottom (between m and s), pos-24 sides
    padding: 'var(--astral-units-pos-14) var(--astral-units-pos-24)',
    // Typography
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-m)',
    fontWeight: 'var(--astral-font-weight-600)',
    letterSpacing: 'var(--astral-letter-spacing-comfy)',
    lineHeight: 'var(--astral-line-height-s)',
    // Shape: button radius = m (16px)
    borderRadius: 'var(--astral-border-radius-m)',
    border: 'none',
    cursor: loading ? 'wait' : 'pointer',
    transition: 'background-color 150ms ease, transform 80ms ease',
    // Colors by variant
    ...(variant === 'primary'
      ? {
          backgroundColor: hovered
            ? 'var(--astral-color-brand-10)'
            : 'var(--astral-color-brand-9)',
          color: 'var(--astral-color-text-inverse-default)',
        }
      : {
          backgroundColor: 'transparent',
          color: 'var(--astral-color-text-secondary)',
          border: '1px solid var(--astral-color-stroke-default)',
        }),
  };

  return (
    <button
      style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        // Spinner — uses brand-2 track on inverse bg
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          style={{ animation: 'spin 0.8s linear infinite' }}
        >
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
          <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ) : null}
      {children}
    </button>
  );
};

// ─── Divider ──────────────────────────────────────────────────────────────────

const Divider: React.FC<{ label?: string }> = ({ label }) => (
  // Border: stroke-default color
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--astral-units-pos-12)',
    }}
  >
    <div
      style={{
        flex: 1,
        height: '1px',
        backgroundColor: 'var(--astral-color-stroke-default)',
      }}
    />
    {label && (
      <span
        style={{
          fontFamily: 'var(--astral-font-family-sans)',
          fontSize: 'var(--astral-font-size-s)',
          fontWeight: 'var(--astral-font-weight-400)',
          color: 'var(--astral-color-text-tertiary)',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
    )}
    <div
      style={{
        flex: 1,
        height: '1px',
        backgroundColor: 'var(--astral-color-stroke-default)',
      }}
    />
  </div>
);

// ─── LoginScreen ──────────────────────────────────────────────────────────────

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    if (!email) next.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) next.email = 'Enter a valid email address';
    if (!password) next.password = 'Password is required';
    else if (password.length < 8) next.password = 'Password must be at least 8 characters';
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate async sign-in
    setTimeout(() => setLoading(false), 1800);
  };

  // ── Page shell ──────────────────────────────────────────────────────────────
  // Surface: background (#fafafa) fills the viewport
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: 'var(--astral-color-surface-background)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--astral-units-pos-24)',
    fontFamily: 'var(--astral-font-family-sans)',
  };

  // ── Card ────────────────────────────────────────────────────────────────────
  // Surface: default white, stroke-default border, s radius (12px), pos-40 padding
  const cardStyle: React.CSSProperties = {
    backgroundColor: 'var(--astral-color-surface-default)',
    border: '1px solid var(--astral-color-stroke-default)',
    borderRadius: 'var(--astral-border-radius-s)',
    padding: 'var(--astral-units-pos-40)',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--astral-units-pos-24)',
  };

  // ── Header inside card ──────────────────────────────────────────────────────
  const headerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--astral-units-pos-16)',
  };

  const headingStyle: React.CSSProperties = {
    // Typography: 2xl size, 700 weight, tight letter spacing, default color
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-2xl)',
    fontWeight: 'var(--astral-font-weight-700)',
    color: 'var(--astral-color-text-default)',
    letterSpacing: 'var(--astral-letter-spacing-fitted)',
    lineHeight: 'var(--astral-line-height-2xl)',
    margin: 0,
  };

  const subtextStyle: React.CSSProperties = {
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-m)',
    fontWeight: 'var(--astral-font-weight-400)',
    color: 'var(--astral-color-text-secondary)',
    lineHeight: 'var(--astral-line-height-s)',
    margin: 0,
    letterSpacing: 'var(--astral-letter-spacing-comfy)',
  };

  // ── Form fields stack ───────────────────────────────────────────────────────
  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--astral-units-pos-20)',
  };

  // ── Forgot password link ────────────────────────────────────────────────────
  const forgotStyle: React.CSSProperties = {
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-s)',
    fontWeight: 'var(--astral-font-weight-500)',
    color: 'var(--astral-color-text-brand-default)',
    textDecoration: 'none',
    letterSpacing: 'var(--astral-letter-spacing-comfy)',
    alignSelf: 'flex-end',
    marginTop: 'var(--astral-units-neg-8)',
    lineHeight: 'var(--astral-line-height-xs)',
  };

  // ── Footer sign up ──────────────────────────────────────────────────────────
  const footerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'var(--astral-units-pos-4)',
  };

  const footerTextStyle: React.CSSProperties = {
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-m)',
    fontWeight: 'var(--astral-font-weight-400)',
    color: 'var(--astral-color-text-secondary)',
    letterSpacing: 'var(--astral-letter-spacing-comfy)',
  };

  const signUpLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--astral-font-family-sans)',
    fontSize: 'var(--astral-font-size-m)',
    fontWeight: 'var(--astral-font-weight-600)',
    color: 'var(--astral-color-text-brand-default)',
    textDecoration: 'none',
    letterSpacing: 'var(--astral-letter-spacing-comfy)',
  };

  return (
    <>
      {/* Spinner keyframe — purely a timing util, no token needed */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <div style={pageStyle}>
        <div style={cardStyle}>

          {/* ── Header ─────────────────────────────────────────────────────── */}
          <div style={headerStyle}>
            {/* Logo mark — brand-9 green */}
            <AstralLogo />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--astral-units-pos-4)' }}>
              <h1 style={headingStyle}>Welcome back</h1>
              <p style={subtextStyle}>Sign in to your Astral account</p>
            </div>
          </div>

          {/* ── Form ───────────────────────────────────────────────────────── */}
          <form onSubmit={handleSubmit} noValidate style={formStyle}>

            {/* Email field */}
            <AstralInput
              label="Email address"
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              error={errors.email}
              autoComplete="email"
            />

            {/* Password field with show/hide toggle */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--astral-units-pos-6)' }}>
              <AstralInput
                label="Password"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="········"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                }}
                error={errors.password}
                autoComplete="current-password"
                rightSlot={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 'var(--astral-units-pos-4)',
                      cursor: 'pointer',
                      color: 'var(--astral-color-text-tertiary)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <EyeIcon visible={showPassword} />
                  </button>
                }
              />
            </div>

            {/* Forgot password — brand-default green link */}
            <a href="#" style={forgotStyle}>Forgot password?</a>

            {/* Primary CTA — brand-9 green, full width */}
            <AstralButton type="submit" loading={loading}>
              {loading ? 'Signing in…' : 'Sign in'}
            </AstralButton>

          </form>

          {/* ── Divider ────────────────────────────────────────────────────── */}
          <Divider label="or" />

          {/* ── Sign up footer ──────────────────────────────────────────────── */}
          <div style={footerStyle}>
            <span style={footerTextStyle}>Don't have an account?</span>
            <a href="#" style={signUpLinkStyle}>Create one</a>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginScreen;
