import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/* ─── Shared style helpers ──────────────────────────────────────────────── */
const S = {
  page: { fontFamily: 'var(--astral-font-family-sans)', padding: '40px 48px', maxWidth: '1120px', color: '#191919' },
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

  // Side-by-side compare grid: Token name | Light cell | Dark cell
  compareHead: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '16px', padding: '10px 12px', borderBottom: '2px solid #eeeeee', marginBottom: '4px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#8a8a8a', fontFamily: '"Geist Mono", monospace' },
  compareRow: { display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: '16px', padding: '10px 12px', borderBottom: '1px solid #f4f4f4', alignItems: 'center' },
  compareCell: { display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 },
  compareSwatchLight: (hex: string) => ({ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: hex, border: '1px solid rgba(0,0,0,0.08)', flexShrink: 0 }),
  compareSwatchDark: (hex: string) => ({ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: hex, border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 0 0 1px rgba(0,0,0,0.04)', flexShrink: 0 }),
  compareMeta: { display: 'flex', flexDirection: 'column' as const, minWidth: 0, gap: '2px' },
  compareHex: { fontSize: '13px', color: '#191919', fontFamily: 'var(--astral-font-family-sans)', fontWeight: 500 },
  compareRef: { fontSize: '12px', color: '#a0a0a0', fontFamily: '"Geist Mono", monospace' },
  compareName: { fontSize: '13px', fontWeight: 600, color: '#191919', margin: 0, lineHeight: 1.3 },
  compareVar: { fontSize: '10.5px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace', wordBreak: 'break-all' as const },
  darkBand: { backgroundColor: '#191919', borderRadius: '8px', padding: '2px 8px', display: 'inline-flex' },
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

type CompareItem = {
  name: string;
  variable: string;
  light: { hex: string; ref: string };
  dark: { hex: string; ref: string };
};

const semanticText: CompareItem[] = [
  { name: 'Text Default',           variable: '--astral-color-text-default',           light: { hex: '#191919', ref: 'Grey.15' }, dark: { hex: '#fafafa', ref: 'Grey.2'  } },
  { name: 'Text Secondary',         variable: '--astral-color-text-secondary',         light: { hex: '#5e5e5e', ref: 'Grey.12' }, dark: { hex: '#e5e5e5', ref: 'Grey.5'  } },
  { name: 'Text Tertiary',          variable: '--astral-color-text-tertiary',          light: { hex: '#8a8a8a', ref: 'Grey.10' }, dark: { hex: '#d9d9d9', ref: 'Grey.6'  } },
  { name: 'Text Disabled',          variable: '--astral-color-text-disabled',          light: { hex: '#b5b5b5', ref: 'Grey.8'  }, dark: { hex: '#b5b5b5', ref: 'Grey.8'  } },
  { name: 'Text Inverse Default',   variable: '--astral-color-text-inverse-default',   light: { hex: '#ffffff', ref: 'Grey.1'  }, dark: { hex: '#141414', ref: 'Grey.16' } },
  { name: 'Text Inverse Secondary', variable: '--astral-color-text-inverse-secondary', light: { hex: '#fafafa', ref: 'Grey.2'  }, dark: { hex: '#191919', ref: 'Grey.15' } },
  { name: 'Text Inverse Tertiary',  variable: '--astral-color-text-inverse-tertiary',  light: { hex: '#eeeeee', ref: 'Grey.4'  }, dark: { hex: '#424242', ref: 'Grey.13' } },
  { name: 'Text Brand Default',     variable: '--astral-color-text-brand-default',     light: { hex: '#00ae35', ref: 'Brand.9'  }, dark: { hex: '#00ae35', ref: 'Brand.9'  } },
  { name: 'Text Brand Secondary',   variable: '--astral-color-text-brand-secondary',   light: { hex: '#054210', ref: 'Brand.14' }, dark: { hex: '#b8e3c8', ref: 'Brand.3'  } },
  { name: 'Text Success',           variable: '--astral-color-text-success-default',   light: { hex: '#055716', ref: 'Green.13' }, dark: { hex: '#95deaf', ref: 'Green.4'  } },
  { name: 'Text Error',             variable: '--astral-color-text-error-default',     light: { hex: '#940023', ref: 'Red.11'   }, dark: { hex: '#f1979f', ref: 'Red.6'    } },
  { name: 'Text Warning',           variable: '--astral-color-text-warning-default',   light: { hex: '#8d3200', ref: 'Yellow.10' }, dark: { hex: '#d19942', ref: 'Yellow.7' } },
];

const semanticStroke: CompareItem[] = [
  { name: 'Stroke Subtle',        variable: '--astral-color-stroke-subtle',       light: { hex: '#f4f4f4', ref: 'Grey.3'  }, dark: { hex: '#2c2c2c', ref: 'Grey.14' } },
  { name: 'Stroke Default',       variable: '--astral-color-stroke-default',      light: { hex: '#eeeeee', ref: 'Grey.4'  }, dark: { hex: '#424242', ref: 'Grey.13' } },
  { name: 'Stroke Medium',        variable: '--astral-color-stroke-medium',       light: { hex: '#c9c9c9', ref: 'Grey.7'  }, dark: { hex: '#8a8a8a', ref: 'Grey.10' } },
  { name: 'Stroke Hover',         variable: '--astral-color-stroke-hover',        light: { hex: '#d9d9d9', ref: 'Grey.6'  }, dark: { hex: '#747474', ref: 'Grey.11' } },
  { name: 'Stroke Pressed',       variable: '--astral-color-stroke-pressed',      light: { hex: '#eeeeee', ref: 'Grey.4'  }, dark: { hex: '#424242', ref: 'Grey.13' } },
  { name: 'Stroke Disabled',      variable: '--astral-color-stroke-disabled',     light: { hex: '#d9d9d9', ref: 'Grey.6'  }, dark: { hex: '#747474', ref: 'Grey.11' } },
  { name: 'Stroke White',         variable: '--astral-color-stroke-white',        light: { hex: '#ffffff', ref: 'Grey.1'  }, dark: { hex: '#141414', ref: 'Grey.16' } },
  { name: 'Stroke Brand',         variable: '--astral-color-stroke-brand',        light: { hex: '#d7ebdf', ref: 'Brand.2'  }, dark: { hex: '#042f0b', ref: 'Brand.15' } },
  { name: 'Stroke Brand Active',  variable: '--astral-color-stroke-brand-active', light: { hex: '#02972c', ref: 'Brand.10' }, dark: { hex: '#02972c', ref: 'Brand.10' } },
  { name: 'Stroke Success',       variable: '--astral-color-stroke-success',      light: { hex: '#00ae35', ref: 'Green.9'  }, dark: { hex: '#00ae35', ref: 'Green.9'  } },
  { name: 'Stroke Error',         variable: '--astral-color-stroke-error',        light: { hex: '#ec0033', ref: 'Red.9'    }, dark: { hex: '#ec0033', ref: 'Red.9'    } },
  { name: 'Stroke Warning',       variable: '--astral-color-stroke-warning',      light: { hex: '#cd4b00', ref: 'Yellow.9' }, dark: { hex: '#cd4b00', ref: 'Yellow.9' } },
];

const semanticSurface: CompareItem[] = [
  { name: 'Surface Background',              variable: '--astral-color-surface-background',                 light: { hex: '#fafafa', ref: 'Grey.2'  }, dark: { hex: '#191919', ref: 'Grey.15' } },
  { name: 'Surface Default',                 variable: '--astral-color-surface-default',                    light: { hex: '#ffffff', ref: 'Grey.1'  }, dark: { hex: '#141414', ref: 'Grey.16' } },
  { name: 'Surface Hover',                   variable: '--astral-color-surface-hover',                      light: { hex: '#f4f4f4', ref: 'Grey.3'  }, dark: { hex: '#2c2c2c', ref: 'Grey.14' } },
  { name: 'Surface Pressed',                 variable: '--astral-color-surface-pressed',                    light: { hex: '#e5e5e5', ref: 'Grey.5'  }, dark: { hex: '#5e5e5e', ref: 'Grey.12' } },
  { name: 'Surface Selected',                variable: '--astral-color-surface-selected',                   light: { hex: '#eeeeee', ref: 'Grey.4'  }, dark: { hex: '#424242', ref: 'Grey.13' } },
  { name: 'Surface Disabled',                variable: '--astral-color-surface-disabled',                   light: { hex: '#f4f4f4', ref: 'Grey.3'  }, dark: { hex: '#2c2c2c', ref: 'Grey.14' } },

  { name: 'Surface Secondary Default',       variable: '--astral-color-surface-secondary-default',          light: { hex: '#fafafa', ref: 'Grey.2'  }, dark: { hex: '#191919', ref: 'Grey.15' } },
  { name: 'Surface Secondary Hover',         variable: '--astral-color-surface-secondary-hover',            light: { hex: '#eeeeee', ref: 'Grey.4'  }, dark: { hex: '#424242', ref: 'Grey.13' } },
  { name: 'Surface Secondary Pressed',       variable: '--astral-color-surface-secondary-pressed',          light: { hex: '#d9d9d9', ref: 'Grey.6'  }, dark: { hex: '#747474', ref: 'Grey.11' } },
  { name: 'Surface Secondary Selected',      variable: '--astral-color-surface-secondary-selected',         light: { hex: '#e5e5e5', ref: 'Grey.5'  }, dark: { hex: '#5e5e5e', ref: 'Grey.12' } },
  { name: 'Surface Secondary Disabled',      variable: '--astral-color-surface-secondary-disabled',         light: { hex: '#eeeeee', ref: 'Grey.4'  }, dark: { hex: '#424242', ref: 'Grey.13' } },

  { name: 'Surface Tertiary Default',        variable: '--astral-color-surface-tertiary-default',           light: { hex: '#eeeeee', ref: 'Grey.4'  }, dark: { hex: '#424242', ref: 'Grey.13' } },
  { name: 'Surface Tertiary Hover',          variable: '--astral-color-surface-tertiary-hover',             light: { hex: '#e5e5e5', ref: 'Grey.5'  }, dark: { hex: '#5e5e5e', ref: 'Grey.12' } },
  { name: 'Surface Tertiary Pressed',        variable: '--astral-color-surface-tertiary-pressed',           light: { hex: '#c9c9c9', ref: 'Grey.7'  }, dark: { hex: '#8a8a8a', ref: 'Grey.10' } },
  { name: 'Surface Tertiary Selected',       variable: '--astral-color-surface-tertiary-selected',          light: { hex: '#d9d9d9', ref: 'Grey.6'  }, dark: { hex: '#747474', ref: 'Grey.11' } },
  { name: 'Surface Tertiary Disabled',       variable: '--astral-color-surface-tertiary-disabled',          light: { hex: '#e5e5e5', ref: 'Grey.5'  }, dark: { hex: '#5e5e5e', ref: 'Grey.12' } },

  { name: 'Surface Brand Default',           variable: '--astral-color-surface-brand-default',              light: { hex: '#f2f7f4', ref: 'Brand.1'  }, dark: { hex: '#031c06', ref: 'Brand.16' } },
  { name: 'Surface Brand Hover',             variable: '--astral-color-surface-brand-hover',                light: { hex: '#d7ebdf', ref: 'Brand.2'  }, dark: { hex: '#042f0b', ref: 'Brand.15' } },
  { name: 'Surface Brand Pressed',           variable: '--astral-color-surface-brand-pressed',              light: { hex: '#95deaf', ref: 'Brand.4'  }, dark: { hex: '#055716', ref: 'Brand.13' } },
  { name: 'Surface Brand Selected',          variable: '--astral-color-surface-brand-selected',             light: { hex: '#f2f7f4', ref: 'Brand.1'  }, dark: { hex: '#031c06', ref: 'Brand.16' } },
  { name: 'Surface Brand Disabled',          variable: '--astral-color-surface-brand-disabled',             light: { hex: '#b8e3c8', ref: 'Brand.3'  }, dark: { hex: '#054210', ref: 'Brand.14' } },

  { name: 'Surface Brand Secondary Default', variable: '--astral-color-surface-brand-secondary-default',    light: { hex: '#d7ebdf', ref: 'Brand.2'  }, dark: { hex: '#042f0b', ref: 'Brand.15' } },
  { name: 'Surface Brand Secondary Hover',   variable: '--astral-color-surface-brand-secondary-hover',      light: { hex: '#b8e3c8', ref: 'Brand.3'  }, dark: { hex: '#054210', ref: 'Brand.14' } },
  { name: 'Surface Brand Secondary Pressed', variable: '--astral-color-surface-brand-secondary-pressed',    light: { hex: '#6fdd95', ref: 'Brand.5'  }, dark: { hex: '#056c1d', ref: 'Brand.12' } },
  { name: 'Surface Brand Secondary Selected',variable: '--astral-color-surface-brand-secondary-selected',   light: { hex: '#d7ebdf', ref: 'Brand.2'  }, dark: { hex: '#042f0b', ref: 'Brand.15' } },
  { name: 'Surface Brand Secondary Disabled',variable: '--astral-color-surface-brand-secondary-disabled',   light: { hex: '#95deaf', ref: 'Brand.4'  }, dark: { hex: '#055716', ref: 'Brand.13' } },

  { name: 'Surface Brand Tertiary Default',  variable: '--astral-color-surface-brand-tertiary-default',     light: { hex: '#00ae35', ref: 'Brand.9'  }, dark: { hex: '#00ae35', ref: 'Brand.9'  } },
  { name: 'Surface Brand Tertiary Hover',    variable: '--astral-color-surface-brand-tertiary-hover',       light: { hex: '#056c1d', ref: 'Brand.12' }, dark: { hex: '#95deaf', ref: 'Brand.4'  } },
  { name: 'Surface Brand Tertiary Pressed',  variable: '--astral-color-surface-brand-tertiary-pressed',     light: { hex: '#054210', ref: 'Brand.14' }, dark: { hex: '#b8e3c8', ref: 'Brand.3'  } },
  { name: 'Surface Brand Tertiary Selected', variable: '--astral-color-surface-brand-tertiary-selected',    light: { hex: '#00ae35', ref: 'Brand.9'  }, dark: { hex: '#00ae35', ref: 'Brand.9'  } },
  { name: 'Surface Brand Tertiary Disabled', variable: '--astral-color-surface-brand-tertiary-disabled',    light: { hex: '#6fdd95', ref: 'Brand.5'  }, dark: { hex: '#056c1d', ref: 'Brand.12' } },

  { name: 'Surface Brand Quaternary Default',variable: '--astral-color-surface-brand-quaternary-default',   light: { hex: '#056c1d', ref: 'Brand.12' }, dark: { hex: '#6fdd95', ref: 'Brand.5'  } },

  { name: 'Surface Neutral Default',         variable: '--astral-color-surface-neutral-default',            light: { hex: '#e5e5e5', ref: 'Grey.5'  }, dark: { hex: '#5e5e5e', ref: 'Grey.12' } },
  { name: 'Surface Neutral Secondary',       variable: '--astral-color-surface-neutral-secondary',          light: { hex: '#5e5e5e', ref: 'Grey.12' }, dark: { hex: '#e5e5e5', ref: 'Grey.5'  } },
  { name: 'Surface Neutral Tertiary',        variable: '--astral-color-surface-neutral-tertiary',           light: { hex: '#2c2c2c', ref: 'Grey.14' }, dark: { hex: '#2c2c2c', ref: 'Grey.14' } },

  { name: 'Surface Success Default',         variable: '--astral-color-surface-success-default',            light: { hex: '#d7ebdf', ref: 'Green.2'  }, dark: { hex: '#042f0b', ref: 'Green.15' } },
  { name: 'Surface Success Secondary',       variable: '--astral-color-surface-success-secondary',          light: { hex: '#00ae35', ref: 'Green.9'  }, dark: { hex: '#00ae35', ref: 'Green.9'  } },
  { name: 'Surface Success Tertiary',        variable: '--astral-color-surface-success-tertiary',           light: { hex: '#056c1d', ref: 'Green.12' }, dark: { hex: '#95deaf', ref: 'Green.4'  } },

  { name: 'Surface Error Default',           variable: '--astral-color-surface-error-default',              light: { hex: '#fce9ea', ref: 'Red.2'  }, dark: { hex: '#1d0004', ref: 'Red.15' } },
  { name: 'Surface Error Secondary',         variable: '--astral-color-surface-error-secondary',            light: { hex: '#ec0033', ref: 'Red.9'  }, dark: { hex: '#ec0033', ref: 'Red.9'  } },
  { name: 'Surface Error Tertiary',          variable: '--astral-color-surface-error-tertiary',             light: { hex: '#740018', ref: 'Red.12' }, dark: { hex: '#f4b4b9', ref: 'Red.5'  } },

  { name: 'Surface Warning Default',         variable: '--astral-color-surface-warning-default',            light: { hex: '#f6ede0', ref: 'Yellow.2'  }, dark: { hex: '#150500', ref: 'Yellow.15' } },
  { name: 'Surface Warning Secondary',       variable: '--astral-color-surface-warning-secondary',          light: { hex: '#cd4b00', ref: 'Yellow.9'  }, dark: { hex: '#cd4b00', ref: 'Yellow.9'  } },
  { name: 'Surface Warning Tertiary',        variable: '--astral-color-surface-warning-tertiary',           light: { hex: '#541700', ref: 'Yellow.12' }, dark: { hex: '#eacc9f', ref: 'Yellow.5'  } },

  { name: 'Surface Inverse Default',         variable: '--astral-color-surface-inverse-default',            light: { hex: '#141414', ref: 'Grey.16' }, dark: { hex: '#ffffff', ref: 'Grey.1'  } },
  { name: 'Surface Inverse Hover',           variable: '--astral-color-surface-inverse-hover',              light: { hex: '#2c2c2c', ref: 'Grey.14' }, dark: { hex: '#f4f4f4', ref: 'Grey.3'  } },
  { name: 'Surface Inverse Pressed',         variable: '--astral-color-surface-inverse-pressed',            light: { hex: '#424242', ref: 'Grey.13' }, dark: { hex: '#f4f4f4', ref: 'Grey.3'  } },
  { name: 'Surface Inverse Selected',        variable: '--astral-color-surface-inverse-selected',           light: { hex: '#5e5e5e', ref: 'Grey.12' }, dark: { hex: '#e5e5e5', ref: 'Grey.5'  } },
  { name: 'Surface Inverse Disabled',        variable: '--astral-color-surface-inverse-disabled',           light: { hex: '#747474', ref: 'Grey.11' }, dark: { hex: '#d9d9d9', ref: 'Grey.6'  } },

  { name: 'Surface Inverse Secondary Default',  variable: '--astral-color-surface-inverse-secondary-default',  light: { hex: '#191919', ref: 'Grey.15' }, dark: { hex: '#fafafa', ref: 'Grey.2'  } },
  { name: 'Surface Inverse Secondary Hover',    variable: '--astral-color-surface-inverse-secondary-hover',    light: { hex: '#424242', ref: 'Grey.13' }, dark: { hex: '#eeeeee', ref: 'Grey.4'  } },
  { name: 'Surface Inverse Secondary Pressed',  variable: '--astral-color-surface-inverse-secondary-pressed',  light: { hex: '#5e5e5e', ref: 'Grey.12' }, dark: { hex: '#e5e5e5', ref: 'Grey.5'  } },
  { name: 'Surface Inverse Secondary Selected', variable: '--astral-color-surface-inverse-secondary-selected', light: { hex: '#747474', ref: 'Grey.11' }, dark: { hex: '#e5e5e5', ref: 'Grey.5'  } },
  { name: 'Surface Inverse Secondary Disabled', variable: '--astral-color-surface-inverse-secondary-disabled', light: { hex: '#8a8a8a', ref: 'Grey.10' }, dark: { hex: '#c9c9c9', ref: 'Grey.7'  } },

  { name: 'Surface Inverse Tertiary Default',   variable: '--astral-color-surface-inverse-tertiary-default',   light: { hex: '#424242', ref: 'Grey.13' }, dark: { hex: '#eeeeee', ref: 'Grey.4'  } },
  { name: 'Surface Inverse Tertiary Hover',     variable: '--astral-color-surface-inverse-tertiary-hover',     light: { hex: '#5e5e5e', ref: 'Grey.12' }, dark: { hex: '#e5e5e5', ref: 'Grey.5'  } },
  { name: 'Surface Inverse Tertiary Pressed',   variable: '--astral-color-surface-inverse-tertiary-pressed',   light: { hex: '#747474', ref: 'Grey.11' }, dark: { hex: '#d9d9d9', ref: 'Grey.6'  } },
  { name: 'Surface Inverse Tertiary Selected',  variable: '--astral-color-surface-inverse-tertiary-selected',  light: { hex: '#8a8a8a', ref: 'Grey.10' }, dark: { hex: '#c9c9c9', ref: 'Grey.7'  } },
  { name: 'Surface Inverse Tertiary Disabled',  variable: '--astral-color-surface-inverse-tertiary-disabled',  light: { hex: '#a0a0a0', ref: 'Grey.9'  }, dark: { hex: '#b5b5b5', ref: 'Grey.8'  } },
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

function SemanticCompareTable({ items }: { items: CompareItem[] }) {
  return (
    <div>
      <div style={S.compareHead}>
        <span>Token</span>
        <span>Light</span>
        <span>Dark</span>
      </div>
      {items.map((item) => (
        <div key={item.variable} style={S.compareRow}>
          <div style={S.compareMeta}>
            <p style={S.compareName}>{item.name}</p>
            <span style={S.compareVar}>{`var(${item.variable})`}</span>
          </div>
          <div style={S.compareCell}>
            <div style={S.compareSwatchLight(item.light.hex)} />
            <div style={S.compareMeta}>
              <span style={S.compareHex}>{item.light.hex}</span>
              <span style={S.compareRef}>→ {item.light.ref}</span>
            </div>
          </div>
          <div style={S.compareCell}>
            <div style={S.compareSwatchDark(item.dark.hex)} />
            <div style={S.compareMeta}>
              <span style={S.compareHex}>{item.dark.hex}</span>
              <span style={S.compareRef}>→ {item.dark.ref}</span>
            </div>
          </div>
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
        <h2 style={S.h2}>Semantic Colors — Light &amp; Dark</h2>
        <p style={S.h2sub}>
          Always use semantic tokens in components. Each row shows the same variable resolved against Light (default) and Dark (<code style={{ fontFamily: '"Geist Mono", monospace' }}>[data-theme="dark"]</code>) modes.
        </p>

        <div style={S.groupLabel}>Text</div>
        <SemanticCompareTable items={semanticText} />

        <div style={S.groupLabel}>Stroke / Border</div>
        <SemanticCompareTable items={semanticStroke} />

        <div style={S.groupLabel}>Surface</div>
        <SemanticCompareTable items={semanticSurface} />
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
