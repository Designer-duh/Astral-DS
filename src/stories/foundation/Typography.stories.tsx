import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/* ─── Shared styles ──────────────────────────────────────────────────────── */

const S = {
  page: {
    fontFamily: 'var(--astral-font-family-sans)',
    padding: '40px 48px',
    maxWidth: '960px',
    color: '#191919',
    backgroundColor: '#ffffff',
  },
  eyebrow: {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: '#8a8a8a',
    marginBottom: '10px',
  },
  h1: { fontSize: '30px', fontWeight: 700, letterSpacing: '-0.6px', margin: '0 0 12px 0', lineHeight: 1.2 },
  lead: { fontSize: '14px', lineHeight: 1.8, color: '#5e5e5e', margin: '0 0 40px 0', maxWidth: '560px' },
  sectionTitle: { fontSize: '18px', fontWeight: 700, letterSpacing: '-0.3px', color: '#191919', margin: '0 0 4px 0' },
  sectionSub: { fontSize: '13px', color: '#8a8a8a', margin: '0 0 24px 0', lineHeight: 1.5 },
  section: { marginBottom: '60px' },
  hr: { border: 'none', borderTop: '1px solid #eeeeee', margin: '48px 0' },
  mono: { fontFamily: '"Geist Mono", monospace' },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    gap: '6px',
    backgroundColor: '#f4f4f4',
    borderRadius: '6px',
    padding: '3px 8px',
    fontSize: '11px',
    fontFamily: '"Geist Mono", monospace',
    color: '#5e5e5e',
  },
  varPill: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    backgroundColor: '#EBF3FF',
    borderRadius: '6px',
    padding: '3px 8px',
    fontSize: '11px',
    fontFamily: '"Geist Mono", monospace',
    color: '#00AE35',
    whiteSpace: 'nowrap' as const,
  },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const fontFamilies = [
  {
    name: 'Sans',
    value: 'Geist',
    variable: '--astral-font-family-sans',
    usage: 'All UI text — body, labels, buttons, captions.',
    sample: 'The quick brown fox jumps over the lazy dog.',
    cssFamily: 'var(--astral-font-family-sans)',
  },
  {
    name: 'Display',
    value: 'Denton Test',
    variable: '--astral-font-family-display',
    usage: 'Hero headings, editorial titles, display copy.',
    sample: 'Building Beyond Earth.',
    cssFamily: 'Georgia, serif',
  },
];

const typeScale = [
  { token: '8xl', px: '88px', lh: '84px', variable: '--astral-font-size-8xl' },
  { token: '7xl', px: '64px', lh: '62px', variable: '--astral-font-size-7xl' },
  { token: '6xl', px: '56px', lh: '58px', variable: '--astral-font-size-6xl' },
  { token: '5xl', px: '48px', lh: '48px', variable: '--astral-font-size-5xl' },
  { token: '4xl', px: '40px', lh: '42px', variable: '--astral-font-size-4xl' },
  { token: '3xl', px: '32px', lh: '40px', variable: '--astral-font-size-3xl' },
  { token: '2xl', px: '24px', lh: '36px', variable: '--astral-font-size-2xl' },
  { token: 'xl',  px: '18px', lh: '32px', variable: '--astral-font-size-xl'  },
  { token: 'l',   px: '16px', lh: '28px', variable: '--astral-font-size-l'   },
  { token: 'm',   px: '14px', lh: '24px', variable: '--astral-font-size-m'   },
  { token: 's',   px: '12px', lh: '20px', variable: '--astral-font-size-s'   },
  { token: 'xs',  px: '11px', lh: '16px', variable: '--astral-font-size-xs'  },
];

const fontWeights = [
  { token: '400', label: 'Regular',    variable: '--astral-font-weight-400' },
  { token: '500', label: 'Medium',     variable: '--astral-font-weight-500' },
  { token: '600', label: 'Semi-Bold',  variable: '--astral-font-weight-600' },
  { token: '700', label: 'Bold',       variable: '--astral-font-weight-700' },
  { token: '800', label: 'Extra-Bold', variable: '--astral-font-weight-800' },
  { token: '900', label: 'Black',      variable: '--astral-font-weight-900' },
];

const lineHeights = [
  { token: 'xxs', px: '14px', variable: '--astral-line-height-xxs' },
  { token: 'xs',  px: '16px', variable: '--astral-line-height-xs'  },
  { token: 's',   px: '20px', variable: '--astral-line-height-s'   },
  { token: 'm',   px: '24px', variable: '--astral-line-height-m'   },
  { token: 'l',   px: '28px', variable: '--astral-line-height-l'   },
  { token: 'xl',  px: '32px', variable: '--astral-line-height-xl'  },
  { token: '2xl', px: '36px', variable: '--astral-line-height-2xl' },
  { token: '3xl', px: '40px', variable: '--astral-line-height-3xl' },
  { token: '4xl', px: '42px', variable: '--astral-line-height-4xl' },
  { token: '5xl', px: '48px', variable: '--astral-line-height-5xl' },
  { token: '6xl', px: '58px', variable: '--astral-line-height-6xl' },
  { token: '7xl', px: '62px', variable: '--astral-line-height-7xl' },
  { token: '8xl', px: '64px', variable: '--astral-line-height-8xl' },
  { token: '9xl', px: '84px', variable: '--astral-line-height-9xl' },
];

const letterSpacings = [
  { token: 'baggy',  px: '0px',    variable: '--astral-letter-spacing-baggy'  },
  { token: 'loose',  px: '-0.2px', variable: '--astral-letter-spacing-loose'  },
  { token: 'comfy',  px: '-0.4px', variable: '--astral-letter-spacing-comfy'  },
  { token: 'trim',   px: '-0.6px', variable: '--astral-letter-spacing-trim'   },
  { token: 'fitted', px: '-0.9px', variable: '--astral-letter-spacing-fitted' },
  { token: 'snug',   px: '-1px',   variable: '--astral-letter-spacing-snug'   },
  { token: 'tight',  px: '-2px',   variable: '--astral-letter-spacing-tight'  },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace' }}>
      {children}
    </span>
  );
}

function Var({ name }: { name: string }) {
  return <span style={S.varPill}>{`var(${name})`}</span>;
}

function Chip({ children }: { children: React.ReactNode }) {
  return <span style={S.pill}>{children}</span>;
}

/* ─── Main component ─────────────────────────────────────────────────────── */

function TypographyDoc() {
  return (
    <div style={S.page}>
      <div style={S.eyebrow}>Tokens</div>
      <h1 style={S.h1}>Typography</h1>
      <p style={S.lead}>
        Two font families, a 12-step size scale, six weight levels, a 14-step line-height scale,
        and seven letter-spacing presets — all exposed as CSS custom properties.
      </p>

      {/* ── Font Families ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.sectionTitle}>Font Family</h2>
        <p style={S.sectionSub}>Two families — one for UI, one for editorial display.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {fontFamilies.map((f) => (
            <div
              key={f.name}
              style={{
                padding: '28px 24px 24px',
                borderRadius: '12px',
                border: '1px solid #eeeeee',
                backgroundColor: '#fafafa',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {/* Specimen */}
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  fontFamily: f.cssFamily,
                  color: '#191919',
                  lineHeight: 1.15,
                  letterSpacing: '-0.5px',
                  borderBottom: '1px solid #eeeeee',
                  paddingBottom: '16px',
                }}
              >
                {f.sample}
              </div>

              {/* Alphabet specimen */}
              <div
                style={{
                  fontSize: '13px',
                  fontFamily: f.cssFamily,
                  color: '#8a8a8a',
                  lineHeight: 1.6,
                  letterSpacing: '0.03em',
                  borderBottom: '1px solid #f4f4f4',
                  paddingBottom: '12px',
                }}
              >
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
                a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
                0 1 2 3 4 5 6 7 8 9
              </div>

              {/* Meta */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Label>{f.name}</Label>
                  <Chip>{f.value}</Chip>
                </div>
                <Var name={f.variable} />
                <div style={{ fontSize: '12px', color: '#8a8a8a', marginTop: '2px' }}>{f.usage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.hr} />

      {/* ── Type Scale ────────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.sectionTitle}>Type Scale</h2>
        <p style={S.sectionSub}>12 steps from 11px (xs) to 88px (8xl). Each token maps to a named CSS variable.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {/* Header row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '56px 56px 1fr auto',
              gap: '0 24px',
              padding: '6px 16px 10px',
              borderBottom: '2px solid #eeeeee',
            }}
          >
            <Label>Size</Label>
            <Label>px</Label>
            <Label>Sample</Label>
            <Label>Variable</Label>
          </div>

          {typeScale.map((item) => {
            const pxNum = parseInt(item.px);
            const clampedSize = Math.min(pxNum, 48); // cap display size at 48px so rows fit
            return (
              <div
                key={item.token}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '56px 56px 1fr auto',
                  gap: '0 24px',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  alignItems: 'center',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#fafafa'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'; }}
              >
                {/* Token */}
                <span style={{ fontSize: '12px', fontFamily: '"Geist Mono", monospace', color: '#8a8a8a', fontWeight: 600 }}>
                  {item.token}
                </span>
                {/* Value */}
                <span style={{ fontSize: '12px', fontFamily: '"Geist Mono", monospace', color: '#191919' }}>
                  {item.px}
                </span>
                {/* Live specimen */}
                <span
                  style={{
                    fontSize: `${clampedSize}px`,
                    fontFamily: 'var(--astral-font-family-sans)',
                    fontWeight: 500,
                    color: '#191919',
                    lineHeight: 1.1,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  Astral
                </span>
                {/* Variable */}
                <Var name={item.variable} />
              </div>
            );
          })}
        </div>
      </div>

      <hr style={S.hr} />

      {/* ── Font Weight ───────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.sectionTitle}>Font Weight</h2>
        <p style={S.sectionSub}>Six weight steps from Regular (400) to Black (900).</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {fontWeights.map((item) => (
            <div
              key={item.token}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                alignItems: 'center',
                gap: '24px',
                padding: '20px 24px',
                borderRadius: '10px',
                border: '1px solid #f0f0f0',
                backgroundColor: '#fafafa',
              }}
            >
              {/* Left: specimen */}
              <div>
                <div
                  style={{
                    fontSize: '26px',
                    fontWeight: parseInt(item.token),
                    fontFamily: 'var(--astral-font-family-sans)',
                    color: '#191919',
                    lineHeight: 1.1,
                    letterSpacing: '-0.3px',
                    marginBottom: '8px',
                  }}
                >
                  The quick brown fox jumps over the lazy dog
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Label>{item.label}</Label>
                  <Chip>{item.token}</Chip>
                </div>
              </div>

              {/* Right: variable */}
              <Var name={item.variable} />
            </div>
          ))}
        </div>
      </div>

      <hr style={S.hr} />

      {/* ── Line Height ───────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.sectionTitle}>Line Height</h2>
        <p style={S.sectionSub}>14-step scale from 14px (xxs) to 84px (9xl). Pair each with the closest font-size token.</p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}
        >
          {lineHeights.map((item) => (
            <div
              key={item.token}
              style={{
                padding: '16px 18px',
                borderRadius: '10px',
                border: '1px solid #f0f0f0',
                backgroundColor: '#fafafa',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              {/* Visual bar */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', marginBottom: '6px' }}>
                {[0.4, 0.65, 1].map((ratio, i) => (
                  <div
                    key={i}
                    style={{
                      width: '18px',
                      height: `${Math.max(8, (parseInt(item.px) / 84) * 48 * ratio)}px`,
                      backgroundColor: i === 2 ? 'var(--astral-color-grey-7)' : 'var(--astral-color-grey-5)',
                      borderRadius: '3px',
                    }}
                  />
                ))}
              </div>

              <div style={{ fontSize: '20px', fontWeight: 700, color: '#191919', fontFamily: '"Geist Mono", monospace', lineHeight: 1 }}>
                {item.px}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Label>{item.token}</Label>
              </div>
              <Var name={item.variable} />
            </div>
          ))}
        </div>
      </div>

      <hr style={S.hr} />

      {/* ── Letter Spacing ────────────────────────────────────────────────── */}
      <div style={S.section}>
        <h2 style={S.sectionTitle}>Letter Spacing</h2>
        <p style={S.sectionSub}>
          Seven named presets from <strong>baggy</strong> (0px) to <strong>tight</strong> (−2px).
          Use negative values for large display text to keep it optically balanced.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '120px 64px 1fr auto', gap: '0 24px', padding: '6px 16px 10px', borderBottom: '2px solid #eeeeee' }}>
            <Label>Token</Label>
            <Label>Value</Label>
            <Label>Preview</Label>
            <Label>Variable</Label>
          </div>

          {letterSpacings.map((item) => (
            <div
              key={item.token}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 64px 1fr auto',
                gap: '0 24px',
                padding: '14px 16px',
                borderRadius: '8px',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = '#fafafa'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = 'transparent'; }}
            >
              <Chip>{item.token}</Chip>
              <span style={{ fontSize: '12px', fontFamily: '"Geist Mono", monospace', color: '#191919' }}>{item.px}</span>
              <span
                style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  letterSpacing: item.px,
                  color: '#191919',
                  fontFamily: 'var(--astral-font-family-sans)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  lineHeight: 1,
                }}
              >
                Astral Design System
              </span>
              <Var name={item.variable} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Story config ───────────────────────────────────────────────────────── */

const meta: Meta = {
  title: 'Tokens/Typography',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Font families, size scale, weights, line-heights, and letter-spacing tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Docs: Story = {
  name: 'Typography',
  render: () => <TypographyDoc />,
};
