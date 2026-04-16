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
  tableHeader: { display: 'grid', gridTemplateColumns: '80px 80px 1fr 200px', gap: '0 16px', padding: '8px 0', borderBottom: '2px solid #eeeeee', marginBottom: '2px' },
  tableHeaderCell: { fontSize: '11px', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#8a8a8a' },
  tableRow: { display: 'grid', gridTemplateColumns: '80px 80px 1fr 200px', gap: '0 16px', padding: '14px 0', borderBottom: '1px solid #f4f4f4', alignItems: 'center' },
  token: { fontSize: '12px', fontFamily: '"Geist Mono", monospace', color: '#8a8a8a' },
  valueCell: { fontSize: '13px', fontFamily: '"Geist Mono", monospace', color: '#191919', fontWeight: 600 },
  varCell: { fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: '#0029CC', wordBreak: 'break-all' as const },
  usageCell: { fontSize: '12px', color: '#8a8a8a' },
  code: { backgroundColor: '#f4f4f4', padding: '2px 7px', borderRadius: '4px', fontSize: '12px', fontFamily: '"Geist Mono", monospace', color: '#191919' },
  tip: { backgroundColor: '#f2f7f4', border: '1px solid #b8e3c8', borderRadius: '10px', padding: '16px 20px', fontSize: '13px', color: '#056c1d', marginTop: '24px', lineHeight: 1.6 },
};

const radii = [
  { token: 'none', px: '0px',    variable: '--astral-border-radius-none', usage: 'Sharp edges — data tables, code blocks.' },
  { token: 'xxs',  px: '4px',    variable: '--astral-border-radius-xxs',  usage: 'Badges, tags, small chips.' },
  { token: 'xs',   px: '8px',    variable: '--astral-border-radius-xs',   usage: 'Inputs, small buttons, tooltips.' },
  { token: 's',    px: '12px',   variable: '--astral-border-radius-s',    usage: 'Dropdowns, selects, menus.' },
  { token: 'm',    px: '16px',   variable: '--astral-border-radius-m',    usage: 'Default buttons, cards, dialogs.' },
  { token: 'l',    px: '20px',   variable: '--astral-border-radius-l',    usage: 'Large cards, panels, drawers.' },
  { token: 'xl',   px: '24px',   variable: '--astral-border-radius-xl',   usage: 'Feature cards, modals.' },
  { token: '2xl',  px: '28px',   variable: '--astral-border-radius-2xl',  usage: 'Large containers, banners.' },
  { token: '3xl',  px: '32px',   variable: '--astral-border-radius-3xl',  usage: 'Hero sections, image containers.' },
  { token: '4xl',  px: '40px',   variable: '--astral-border-radius-4xl',  usage: 'Extra-large containers.' },
  { token: 'full', px: '9999px', variable: '--astral-border-radius-full', usage: 'Pills, avatars, fully-round elements.' },
];

function BorderRadiusDoc() {
  return (
    <div style={S.page}>
      <div style={S.eyebrow}>Tokens</div>
      <h1 style={S.h1}>Border Radius</h1>
      <p style={S.lead}>
        11 named steps from sharp (<code style={S.code}>none</code>) to fully circular (<code style={S.code}>full</code>).
        Each token has a defined intended usage to keep corner-rounding consistent across components.
      </p>

      {/* Visual showcase */}
      <div style={S.section}>
        <h2 style={S.h2}>Visual Scale</h2>
        <p style={S.h2sub}>Each box below is rendered at its actual border-radius value.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '16px' }}>
          {radii.map(({ token, px, variable }) => (
            <div key={token} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '88px',
                  height: '88px',
                  backgroundColor: '#0029CC',
                  borderRadius: px,
                  opacity: 0.9,
                  flexShrink: 0,
                }}
              />
              <div style={{ textAlign: 'center' as const }}>
                <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#191919', marginBottom: '3px' }}>{token}</div>
                <div style={{ fontSize: '11px', fontFamily: '"Geist Mono", monospace', color: '#8a8a8a', marginBottom: '3px' }}>{px}</div>
                <div style={{ fontSize: '10px', fontFamily: '"Geist Mono", monospace', color: '#a0a0a0', wordBreak: 'break-all' as const }}>{`var(${variable})`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr style={S.hr} />

      {/* Table */}
      <div style={S.section}>
        <h2 style={S.h2}>Token Reference</h2>
        <p style={S.h2sub}>Full list of tokens with values, CSS variables, and recommended usage.</p>
        <div style={S.tableHeader}>
          <div style={S.tableHeaderCell}>Token</div>
          <div style={S.tableHeaderCell}>Value</div>
          <div style={S.tableHeaderCell}>Variable</div>
          <div style={S.tableHeaderCell}>Usage</div>
        </div>
        {radii.map((item) => (
          <div key={item.token} style={S.tableRow}>
            <div style={S.token}>{item.token}</div>
            <div style={S.valueCell}>{item.px}</div>
            <div style={S.varCell}>{`var(${item.variable})`}</div>
            <div style={S.usageCell}>{item.usage}</div>
          </div>
        ))}
      </div>

      <hr style={S.hr} />

      {/* Usage guidance */}
      <div style={S.section}>
        <h2 style={S.h2}>Usage in Code</h2>
        <p style={S.h2sub}>Use the CSS variable, never a raw pixel value.</p>
        <div style={{ backgroundColor: '#141414', color: '#f4f4f4', borderRadius: '10px', padding: '20px 24px', fontFamily: '"Geist Mono", "SFMono-Regular", Consolas, monospace', fontSize: '12.5px', lineHeight: 1.9 }}>
          <div style={{ color: '#5e5e5e' }}>{'/* ✅ Correct */'}</div>
          <div>{'.card { '}<span style={{ color: '#95deaf' }}>border-radius</span>{': var(--astral-border-radius-m); }'}</div>
          <div>{'.pill { '}<span style={{ color: '#95deaf' }}>border-radius</span>{': var(--astral-border-radius-full); }'}</div>
          <br />
          <div style={{ color: '#5e5e5e' }}>{'/* ⛔ Avoid */'}</div>
          <div style={{ color: '#747474' }}>{'/* .card { border-radius: 16px; } — breaks if token value changes */'}</div>
        </div>
        <div style={S.tip}>
          <strong>Tip:</strong> When building a new component, pick the radius that matches its size and visual weight.
          Small dense elements (<em>badges, tags</em>) → <code style={{ fontFamily: '"Geist Mono", monospace' }}>xxs</code> or <code style={{ fontFamily: '"Geist Mono", monospace' }}>xs</code>.
          Standard UI elements (<em>buttons, inputs, cards</em>) → <code style={{ fontFamily: '"Geist Mono", monospace' }}>m</code>.
          Pill-shaped elements → <code style={{ fontFamily: '"Geist Mono", monospace' }}>full</code>.
        </div>
      </div>

      {/* Compound radius demo */}
      <div style={S.section}>
        <h2 style={S.h2}>Compound Examples</h2>
        <p style={S.h2sub}>How tokens combine in real UI elements.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '16px', alignItems: 'flex-end' }}>
          {/* Badge */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '10px' }}>
            <span style={{ padding: '4px 12px', borderRadius: '4px', backgroundColor: '#0029CC', color: '#fff', fontSize: '12px', fontWeight: 600, display: 'inline-block' }}>Badge</span>
            <span style={{ fontSize: '10.5px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace' }}>radius: xxs (4px)</span>
          </div>
          {/* Button */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '10px' }}>
            <button style={{ padding: '10px 20px', borderRadius: '16px', backgroundColor: '#0029CC', color: '#fff', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'default' }}>Button</button>
            <span style={{ fontSize: '10.5px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace' }}>radius: m (16px)</span>
          </div>
          {/* Input */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '10px' }}>
            <input readOnly value="Input field" style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #eeeeee', fontSize: '14px', backgroundColor: '#fff', color: '#191919', outline: 'none', width: '140px' }} />
            <span style={{ fontSize: '10.5px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace' }}>radius: xs (8px)</span>
          </div>
          {/* Card */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '100px', height: '68px', borderRadius: '16px', backgroundColor: '#fafafa', border: '1px solid #eeeeee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#8a8a8a' }}>Card</div>
            <span style={{ fontSize: '10.5px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace' }}>radius: m (16px)</span>
          </div>
          {/* Pill */}
          <div style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '10px' }}>
            <span style={{ padding: '8px 20px', borderRadius: '9999px', backgroundColor: '#f2f7f4', border: '1px solid #b8e3c8', color: '#056c1d', fontSize: '13px', fontWeight: 600, display: 'inline-block' }}>Pill tag</span>
            <span style={{ fontSize: '10.5px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace' }}>radius: full (9999px)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const meta: Meta = {
  title: 'Tokens/Border Radius',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '11-step border radius scale from 0px (none) to 9999px (full).',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Docs: Story = {
  name: 'Border Radius',
  render: () => <BorderRadiusDoc />,
};
