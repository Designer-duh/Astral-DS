import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/* ─── Shared style helpers ──────────────────────────────────────────────── */
const S = {
  page: { fontFamily: 'var(--astral-font-family-sans)', padding: '40px 48px', maxWidth: '900px', color: '#191919' },
  eyebrow: { fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: '#8a8a8a', marginBottom: '10px' },
  h1: { fontSize: '30px', fontWeight: 700, letterSpacing: '-0.6px', margin: '0 0 12px 0', lineHeight: 1.2 },
  lead: { fontSize: '14px', lineHeight: 1.8, color: '#5e5e5e', margin: '0 0 40px 0', maxWidth: '540px' },
  h2: { fontSize: '18px', fontWeight: 700, letterSpacing: '-0.3px', color: '#191919', margin: '0 0 4px 0' },
  h2sub: { fontSize: '13px', color: '#8a8a8a', margin: '0 0 20px 0', lineHeight: 1.5 },
  section: { marginBottom: '52px' },
  hr: { border: 'none', borderTop: '1px solid #eeeeee', margin: '44px 0' },
  swatchGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '10px' },
  scaleRow: { display: 'flex', gap: 0, borderRadius: '10px', overflow: 'hidden', height: '56px', marginBottom: '12px' },
  swatchCard: { borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)' },
  swatchColor: (hex: string, h = '80px') => ({ width: '100%', height: h, backgroundColor: hex }),
  swatchMeta: { padding: '8px 10px', backgroundColor: '#fafafa', borderTop: '1px solid #eeeeee' },
  swatchName: { fontSize: '11.5px', fontWeight: 600, color: '#191919', margin: '0 0 2px 0', lineHeight: 1.3 },
  swatchVar: { fontSize: '10.5px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace', display: 'block', marginBottom: '2px', wordBreak: 'break-all' as const },
  swatchHex: { fontSize: '10.5px', color: '#a0a0a0', fontFamily: '"Geist Mono", monospace' },
  semanticRow: { display: 'flex', alignItems: 'center', gap: '14px', padding: '10px 0', borderBottom: '1px solid #f4f4f4' },
  semanticSwatch: (hex: string) => ({ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: hex, border: '1px solid rgba(0,0,0,0.07)', flexShrink: 0 }),
  semanticInfo: { flex: 1 },
  semanticName: { fontSize: '13px', fontWeight: 600, color: '#191919', margin: '0 0 2px 0' },
  semanticVar: { fontSize: '11px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace', display: 'block' },
  semanticRef: { fontSize: '11px', color: '#a0a0a0', fontFamily: '"Geist Mono", monospace' },
  semanticHex: { fontSize: '11.5px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace', flexShrink: 0 },
  groupLabel: { fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#8a8a8a', padding: '12px 0 6px 0', marginTop: '4px' },
};

/* ─── Data ───────────────────────────────────────────────────────────────── */

const greyScale = [
  { n: 1, hex: '#ffffff' }, { n: 2, hex: '#fafafa' }, { n: 3, hex: '#f4f4f4' }, { n: 4, hex: '#eeeeee' },
  { n: 5, hex: '#e5e5e5' }, { n: 6, hex: '#d9d9d9' }, { n: 7, hex: '#c9c9c9' }, { n: 8, hex: '#b5b5b5' },
  { n: 9, hex: '#a0a0a0' }, { n: 10, hex: '#8a8a8a' }, { n: 11, hex: '#747474' }, { n: 12, hex: '#5e5e5e' },
  { n: 13, hex: '#424242' }, { n: 14, hex: '#2c2c2c' }, { n: 15, hex: '#191919' }, { n: 16, hex: '#141414' },
];
const greenScale = [
  { n: 1, hex: '#f2f7f4' }, { n: 2, hex: '#d7ebdf' }, { n: 3, hex: '#b8e3c8' }, { n: 4, hex: '#95deaf' },
  { n: 5, hex: '#6fdd95' }, { n: 6, hex: '#44e079' }, { n: 7, hex: '#18e55b' }, { n: 8, hex: '#0acb47' },
  { n: 9, hex: '#00ae35' }, { n: 10, hex: '#02972c' }, { n: 11, hex: '#048124' }, { n: 12, hex: '#056c1d' },
  { n: 13, hex: '#055716' }, { n: 14, hex: '#054210' }, { n: 15, hex: '#042f0b' }, { n: 16, hex: '#031c06' },
];
const redScale = [
  { n: 1, hex: '#fcf3f3' }, { n: 2, hex: '#fce9ea' }, { n: 3, hex: '#f9dcde' }, { n: 4, hex: '#f7cbcd' },
  { n: 5, hex: '#f4b4b9' }, { n: 6, hex: '#f1979f' }, { n: 7, hex: '#eb7382' }, { n: 8, hex: '#e14562' },
  { n: 9, hex: '#ec0033' }, { n: 10, hex: '#b30032' }, { n: 11, hex: '#940023' }, { n: 12, hex: '#740018' },
  { n: 13, hex: '#53000d' }, { n: 14, hex: '#360007' }, { n: 15, hex: '#1d0004' }, { n: 16, hex: '#1e0005' },
];
const yellowScale = [
  { n: 1, hex: '#f9f4ec' }, { n: 2, hex: '#f6ede0' }, { n: 3, hex: '#f4e6d1' }, { n: 4, hex: '#f0dbbb' },
  { n: 5, hex: '#eacc9f' }, { n: 6, hex: '#e0b676' }, { n: 7, hex: '#d19942' }, { n: 8, hex: '#bb7400' },
  { n: 9, hex: '#cd4b00' }, { n: 10, hex: '#8d3200' }, { n: 11, hex: '#702400' }, { n: 12, hex: '#541700' },
  { n: 13, hex: '#3b1000' }, { n: 14, hex: '#280900' }, { n: 15, hex: '#150500' }, { n: 16, hex: '#1a0700' },
];
const brandScale = greenScale; // Equal AI theme maps Brand → Green

const semanticText = [
  { name: 'Text Default',           variable: '--astral-color-text-default',           hex: '#191919', ref: 'Grey.15' },
  { name: 'Text Secondary',         variable: '--astral-color-text-secondary',          hex: '#5e5e5e', ref: 'Grey.12' },
  { name: 'Text Tertiary',          variable: '--astral-color-text-tertiary',           hex: '#8a8a8a', ref: 'Grey.10' },
  { name: 'Text Disabled',          variable: '--astral-color-text-disabled',           hex: '#b5b5b5', ref: 'Grey.8'  },
  { name: 'Text Inverse Default',   variable: '--astral-color-text-inverse-default',    hex: '#ffffff', ref: 'Grey.1'  },
  { name: 'Text Inverse Secondary', variable: '--astral-color-text-inverse-secondary',  hex: '#fafafa', ref: 'Grey.2'  },
  { name: 'Text Inverse Tertiary',  variable: '--astral-color-text-inverse-tertiary',   hex: '#eeeeee', ref: 'Grey.4'  },
  { name: 'Text Brand Default',     variable: '--astral-color-text-brand-default',      hex: '#00ae35', ref: 'Brand.9 → Green.9'  },
  { name: 'Text Brand Secondary',   variable: '--astral-color-text-brand-secondary',    hex: '#054210', ref: 'Brand.14 → Green.14' },
  { name: 'Text Success',           variable: '--astral-color-text-success-default',    hex: '#055716', ref: 'Green.13' },
  { name: 'Text Error',             variable: '--astral-color-text-error-default',      hex: '#940023', ref: 'Red.11'   },
  { name: 'Text Warning',           variable: '--astral-color-text-warning-default',    hex: '#8d3200', ref: 'Yellow.10' },
];

const semanticStroke = [
  { name: 'Stroke Subtle',        variable: '--astral-color-stroke-subtle',       hex: '#f4f4f4', ref: 'Grey.3'  },
  { name: 'Stroke Default',       variable: '--astral-color-stroke-default',      hex: '#eeeeee', ref: 'Grey.4'  },
  { name: 'Stroke Medium',        variable: '--astral-color-stroke-medium',       hex: '#c9c9c9', ref: 'Grey.7'  },
  { name: 'Stroke Hover',         variable: '--astral-color-stroke-hover',        hex: '#d9d9d9', ref: 'Grey.6'  },
  { name: 'Stroke Pressed',       variable: '--astral-color-stroke-pressed',      hex: '#eeeeee', ref: 'Grey.4'  },
  { name: 'Stroke Disabled',      variable: '--astral-color-stroke-disabled',     hex: '#d9d9d9', ref: 'Grey.6'  },
  { name: 'Stroke White',         variable: '--astral-color-stroke-white',        hex: '#ffffff', ref: 'Grey.1'  },
  { name: 'Stroke Brand',         variable: '--astral-color-stroke-brand',        hex: '#d7ebdf', ref: 'Brand.2 → Green.2'  },
  { name: 'Stroke Brand Active',  variable: '--astral-color-stroke-brand-active', hex: '#02972c', ref: 'Brand.10 → Green.10' },
  { name: 'Stroke Success',       variable: '--astral-color-stroke-success',      hex: '#00ae35', ref: 'Green.9' },
  { name: 'Stroke Error',         variable: '--astral-color-stroke-error',        hex: '#ec0033', ref: 'Red.9'   },
  { name: 'Stroke Warning',       variable: '--astral-color-stroke-warning',      hex: '#cd4b00', ref: 'Yellow.9' },
];

const semanticSurface = [
  { name: 'Surface Background',        variable: '--astral-color-surface-background',        hex: '#fafafa', ref: 'Grey.2'  },
  { name: 'Surface Default',           variable: '--astral-color-surface-default',            hex: '#ffffff', ref: 'Grey.1'  },
  { name: 'Surface Hover',             variable: '--astral-color-surface-hover',              hex: '#f4f4f4', ref: 'Grey.3'  },
  { name: 'Surface Pressed',           variable: '--astral-color-surface-pressed',            hex: '#e5e5e5', ref: 'Grey.5'  },
  { name: 'Surface Selected',          variable: '--astral-color-surface-selected',           hex: '#eeeeee', ref: 'Grey.4'  },
  { name: 'Surface Disabled',          variable: '--astral-color-surface-disabled',           hex: '#f4f4f4', ref: 'Grey.3'  },
  { name: 'Surface Secondary Default', variable: '--astral-color-surface-secondary-default',  hex: '#ffffff', ref: 'Grey.1'  },
  { name: 'Surface Secondary Hover',   variable: '--astral-color-surface-secondary-hover',    hex: '#eeeeee', ref: 'Grey.4'  },
  { name: 'Surface Inverse Default',   variable: '--astral-color-surface-inverse-default',    hex: '#191919', ref: 'Grey.15' },
  { name: 'Surface Inverse Hover',     variable: '--astral-color-surface-inverse-hover',      hex: '#2c2c2c', ref: 'Grey.14' },
  { name: 'Surface Inverse Pressed',   variable: '--astral-color-surface-inverse-pressed',    hex: '#424242', ref: 'Grey.13' },
  { name: 'Surface Inverse Disabled',  variable: '--astral-color-surface-inverse-disabled',   hex: '#747474', ref: 'Grey.11' },
];

/* ─── Sub-components ─────────────────────────────────────────────────────── */

function PaletteGrid({ items, prefix }: { items: { n: number; hex: string }[]; prefix: string }) {
  return (
    <div style={S.swatchGrid}>
      {items.map(({ n, hex }) => (
        <div key={n} style={S.swatchCard}>
          <div style={S.swatchColor(hex)} />
          <div style={S.swatchMeta}>
            <p style={S.swatchName}>{n}</p>
            <span style={S.swatchVar}>{`--astral-color-${prefix}-${n}`}</span>
            <span style={S.swatchHex}>{hex}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SemanticTable({ items }: { items: { name: string; variable: string; hex: string; ref: string }[] }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item.variable} style={S.semanticRow}>
          <div style={S.semanticSwatch(item.hex)} />
          <div style={S.semanticInfo}>
            <p style={S.semanticName}>{item.name}</p>
            <span style={S.semanticVar}>{`var(${item.variable})`}</span>
            <span style={S.semanticRef}>→ {item.ref}</span>
          </div>
          <span style={S.semanticHex}>{item.hex}</span>
        </div>
      ))}
    </div>
  );
}

function ScaleBar({ items, prefix }: { items: { n: number; hex: string }[]; prefix: string }) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <div style={S.scaleRow}>
        {items.map(({ n, hex }) => (
          <div key={n} style={{ flex: 1, backgroundColor: hex, title: `${prefix}-${n}: ${hex}` }} title={`${prefix}-${n}: ${hex}`} />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#a0a0a0', fontFamily: '"Geist Mono", monospace', padding: '0 2px' }}>
        <span>1 (lightest)</span>
        <span>16 (darkest)</span>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */

function ColorsDoc() {
  return (
    <div style={S.page}>
      <div style={S.eyebrow}>Tokens</div>
      <h1 style={S.h1}>Colors</h1>
      <p style={S.lead}>
        The color system is built in three layers: <strong>Primitive</strong> raw palette values,
        <strong> Semantic</strong> purpose-driven aliases used in components, and <strong>Brand / Theme</strong>
        tokens that adapt to the active theme.
      </p>

      {/* Brand */}
      <div style={S.section}>
        <h2 style={S.h2}>Brand — Equal AI</h2>
        <p style={S.h2sub}>The active brand theme maps <code>Brand.1–16</code> to the Green primitive palette. Swap the theme to remap brand colors without touching component code.</p>
        <ScaleBar items={brandScale} prefix="brand" />
        <PaletteGrid items={brandScale} prefix="brand" />
      </div>

      <hr style={S.hr} />

      {/* Semantic */}
      <div style={S.section}>
        <h2 style={S.h2}>Semantic Colors — Light Mode</h2>
        <p style={S.h2sub}>
          Always use semantic tokens in components. They describe intent, not value, and stay correct across theme changes.
        </p>

        <div style={S.groupLabel}>Text</div>
        <SemanticTable items={semanticText} />

        <div style={S.groupLabel}>Stroke / Border</div>
        <SemanticTable items={semanticStroke} />

        <div style={S.groupLabel}>Surface</div>
        <SemanticTable items={semanticSurface} />
      </div>

      <hr style={S.hr} />

      {/* Primitives */}
      <div style={S.section}>
        <h2 style={S.h2}>Primitives — Grey</h2>
        <p style={S.h2sub}>16-step neutral scale. Used for text, surfaces, borders, and icons. Only reference these directly in semantic token definitions.</p>
        <ScaleBar items={greyScale} prefix="grey" />
        <PaletteGrid items={greyScale} prefix="grey" />
      </div>

      <hr style={S.hr} />

      <div style={S.section}>
        <h2 style={S.h2}>Primitives — Green</h2>
        <p style={S.h2sub}>16-step green scale. Powers the brand palette and success states.</p>
        <ScaleBar items={greenScale} prefix="green" />
        <PaletteGrid items={greenScale} prefix="green" />
      </div>

      <hr style={S.hr} />

      <div style={S.section}>
        <h2 style={S.h2}>Primitives — Red</h2>
        <p style={S.h2sub}>16-step red scale. Powers error and destructive states.</p>
        <ScaleBar items={redScale} prefix="red" />
        <PaletteGrid items={redScale} prefix="red" />
      </div>

      <hr style={S.hr} />

      <div style={S.section}>
        <h2 style={S.h2}>Primitives — Yellow (Warning)</h2>
        <p style={S.h2sub}>16-step amber/orange scale. Powers warning and caution states.</p>
        <ScaleBar items={yellowScale} prefix="yellow" />
        <PaletteGrid items={yellowScale} prefix="yellow" />
      </div>
    </div>
  );
}

/* ─── Story config ───────────────────────────────────────────────────────── */

const meta: Meta = {
  title: 'Tokens/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete color system — primitives, semantic aliases, and brand theme tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Docs: Story = {
  name: 'Colors',
  render: () => <ColorsDoc />,
};
