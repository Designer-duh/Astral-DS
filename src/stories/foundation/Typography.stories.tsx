import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const S = {
  page: { fontFamily: 'var(--astral-font-family-sans)', padding: '40px 48px', maxWidth: '900px', color: '#191919' },
  eyebrow: { fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#8a8a8a', marginBottom: '10px' },
  h1: { fontSize: '30px', fontWeight: 700, letterSpacing: '-0.6px', margin: '0 0 12px 0', lineHeight: 1.2 },
  lead: { fontSize: '14px', lineHeight: 1.8, color: '#5e5e5e', margin: '0 0 40px 0', maxWidth: '540px' },
  h2: { fontSize: '18px', fontWeight: 700, letterSpacing: '-0.3px', color: '#191919', margin: '0 0 4px 0' },
  h2sub: { fontSize: '13px', color: '#8a8a8a', margin: '0 0 20px 0', lineHeight: 1.5 },
  section: { marginBottom: '52px' },
  hr: { border: 'none', borderTop: '1px solid #eeeeee', margin: '44px 0' },
  tableHeader: { display: 'grid', gridTemplateColumns: '80px 90px 100px 1fr', gap: '0 16px', padding: '8px 0', borderBottom: '2px solid #eeeeee', marginBottom: '2px' },
  tableHeaderCell: { fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#8a8a8a' },
  tableRow: { display: 'grid', gridTemplateColumns: '80px 90px 100px 1fr', gap: '0 16px', padding: '12px 0', borderBottom: '1px solid #f4f4f4', alignItems: 'center' },
  token: { fontSize: '11.5px', fontFamily: '"Geist Mono", monospace', color: '#8a8a8a' },
  value: { fontSize: '12.5px', fontFamily: '"Geist Mono", monospace', color: '#191919' },
  varCell: { fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: '#0029CC', wordBreak: 'break-all' as const },
  code: { backgroundColor: '#f4f4f4', padding: '2px 7px', borderRadius: '4px', fontSize: '12px', fontFamily: '"Geist Mono", monospace', color: '#191919' },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const fontFamilies = [
  {
    name: 'Sans',
    value: 'Geist',
    variable: '--astral-font-family-sans',
    usage: 'All UI text — body, labels, buttons, captions.',
    sample: 'The quick brown fox jumps over the lazy dog.',
  },
  {
    name: 'Display',
    value: 'Denton Test',
    variable: '--astral-font-family-display',
    usage: 'Hero headings, editorial titles, display copy.',
    sample: 'Building Beyond Earth.',
  },
];

const fontSizes = [
  { token: 'xs',  px: '11px',  variable: '--astral-font-size-xs'  },
  { token: 's',   px: '12px',  variable: '--astral-font-size-s'   },
  { token: 'm',   px: '14px',  variable: '--astral-font-size-m'   },
  { token: 'l',   px: '16px',  variable: '--astral-font-size-l'   },
  { token: 'xl',  px: '18px',  variable: '--astral-font-size-xl'  },
  { token: '2xl', px: '24px',  variable: '--astral-font-size-2xl' },
  { token: '3xl', px: '32px',  variable: '--astral-font-size-3xl' },
  { token: '4xl', px: '40px',  variable: '--astral-font-size-4xl' },
  { token: '5xl', px: '48px',  variable: '--astral-font-size-5xl' },
  { token: '6xl', px: '56px',  variable: '--astral-font-size-6xl' },
  { token: '7xl', px: '64px',  variable: '--astral-font-size-7xl' },
  { token: '8xl', px: '88px',  variable: '--astral-font-size-8xl' },
];

const fontWeights = [
  { token: '400', label: 'Regular',   variable: '--astral-font-weight-400' },
  { token: '500', label: 'Medium',    variable: '--astral-font-weight-500' },
  { token: '600', label: 'Semi-Bold', variable: '--astral-font-weight-600' },
  { token: '700', label: 'Bold',      variable: '--astral-font-weight-700' },
  { token: '800', label: 'Extra-Bold',variable: '--astral-font-weight-800' },
  { token: '900', label: 'Black',     variable: '--astral-font-weight-900' },
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

/* ─── Component ──────────────────────────────────────────────────────────── */

function TypographyDoc() {
  return (
    <div style={S.page}>
      <div style={S.eyebrow}>Tokens</div>
      <h1 style={S.h1}>Typography</h1>
      <p style={S.lead}>
        The type system covers two font families, a 12-step size scale, six weight levels,
        a 14-step line-height scale, and seven letter-spacing presets.
      </p>

      {/* Font Families */}
      <div style={S.section}>
        <h2 style={S.h2}>Font Family</h2>
        <p style={S.h2sub}>Two families — one for UI, one for editorial display.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {fontFamilies.map((f) => (
            <div key={f.name} style={{ padding: '24px', borderRadius: '12px', border: '1px solid #eeeeee', backgroundColor: '#fafafa' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#8a8a8a', marginBottom: '10px' }}>{f.name}</div>
              <div style={{ fontSize: '28px', fontWeight: 700, fontFamily: f.name === 'Display' ? 'Georgia, serif' : 'var(--astral-font-family-sans)', color: '#191919', marginBottom: '12px', lineHeight: 1.2 }}>{f.sample}</div>
              <div style={{ fontSize: '12px', color: '#8a8a8a', marginBottom: '4px' }}>{f.usage}</div>
              <code style={{ fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: '#0029CC', display: 'block', marginBottom: '2px' }}>{`var(${f.variable})`}</code>
              <code style={{ fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: '#a0a0a0' }}>{f.value}</code>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.hr} />

      {/* Font Sizes */}
      <div style={S.section}>
        <h2 style={S.h2}>Font Size</h2>
        <p style={S.h2sub}>12-step scale from 11px (xs) to 88px (8xl). Each step maps to a named token.</p>
        <div style={S.tableHeader}>
          <div style={S.tableHeaderCell}>Token</div>
          <div style={S.tableHeaderCell}>Value</div>
          <div style={{ ...S.tableHeaderCell, gridColumn: '3 / 5' }}>Variable</div>
        </div>
        {fontSizes.map((item) => (
          <div key={item.token} style={S.tableRow}>
            <div style={S.token}>{item.token}</div>
            <div style={S.value}>{item.px}</div>
            <div style={{ ...S.varCell, gridColumn: '3 / 5' }}>{`var(${item.variable})`}</div>
          </div>
        ))}

        {/* Visual preview */}
        <div style={{ marginTop: '32px', padding: '24px', border: '1px solid #eeeeee', borderRadius: '12px', backgroundColor: '#fafafa', overflow: 'hidden' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#8a8a8a', marginBottom: '20px' }}>Scale Preview</div>
          {fontSizes.slice(0, 8).map((item) => (
            <div key={item.token} style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px dashed #eeeeee' }}>
              <span style={{ fontSize: '11px', color: '#a0a0a0', fontFamily: '"Geist Mono", monospace', width: '28px', flexShrink: 0 }}>{item.token}</span>
              <span style={{ fontSize: item.px, fontWeight: 500, color: '#191919', lineHeight: 1, whiteSpace: 'nowrap' as const }}>Astral DS</span>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.hr} />

      {/* Font Weights */}
      <div style={S.section}>
        <h2 style={S.h2}>Font Weight</h2>
        <p style={S.h2sub}>Six weight steps from Regular (400) to Black (900).</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '2px' }}>
          {fontWeights.map((item) => (
            <div key={item.token} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '14px 16px', borderRadius: '8px', border: '1px solid #f4f4f4', backgroundColor: '#fafafa' }}>
              <span style={{ fontSize: '22px', fontWeight: parseInt(item.token), color: '#191919', lineHeight: 1, minWidth: '200px' }}>
                The quick brown fox
              </span>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: '#191919', marginRight: '8px' }}>{item.label}</span>
                <code style={S.code}>{item.token}</code>
              </div>
              <code style={{ fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: '#0029CC' }}>{`var(${item.variable})`}</code>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.hr} />

      {/* Line Heights */}
      <div style={S.section}>
        <h2 style={S.h2}>Line Height</h2>
        <p style={S.h2sub}>14-step scale from 14px (xxs) to 84px (9xl). Pair each with the closest font-size token.</p>
        <div style={S.tableHeader}>
          <div style={S.tableHeaderCell}>Token</div>
          <div style={S.tableHeaderCell}>Value</div>
          <div style={{ ...S.tableHeaderCell, gridColumn: '3 / 5' }}>Variable</div>
        </div>
        {lineHeights.map((item) => (
          <div key={item.token} style={S.tableRow}>
            <div style={S.token}>{item.token}</div>
            <div style={S.value}>{item.px}</div>
            <div style={{ ...S.varCell, gridColumn: '3 / 5' }}>{`var(${item.variable})`}</div>
          </div>
        ))}
      </div>

      <hr style={S.hr} />

      {/* Letter Spacing */}
      <div style={S.section}>
        <h2 style={S.h2}>Letter Spacing</h2>
        <p style={S.h2sub}>
          Seven named presets ranging from <strong>baggy</strong> (0px) to <strong>tight</strong> (−2px).
          Negative values are recommended for large display text.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '6px' }}>
          {letterSpacings.map((item) => (
            <div key={item.token} style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '16px', borderRadius: '8px', border: '1px solid #f4f4f4', backgroundColor: '#fafafa' }}>
              <span style={{ fontSize: '20px', fontWeight: 600, letterSpacing: item.px, color: '#191919', lineHeight: 1, minWidth: '280px', overflow: 'hidden' as const, whiteSpace: 'nowrap' as const }}>
                Astral Design System
              </span>
              <div style={{ flex: 1 }}>
                <code style={S.code}>{item.token}</code>
                <span style={{ fontSize: '12px', color: '#8a8a8a', marginLeft: '8px', fontFamily: '"Geist Mono", monospace' }}>{item.px}</span>
              </div>
              <code style={{ fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: '#0029CC' }}>{`var(${item.variable})`}</code>
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
