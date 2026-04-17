import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

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
    <div
      style={{
        fontFamily: 'var(--astral-font-family-sans)',
        padding: '40px 48px',
        maxWidth: '860px',
        color: '#191919',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Header */}
      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a8a8a', marginBottom: '10px' }}>
        Tokens
      </div>
      <h1 style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-0.6px', margin: '0 0 10px 0', lineHeight: 1.2 }}>
        Border Radius
      </h1>
      <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#5e5e5e', margin: '0 0 48px 0', maxWidth: '520px' }}>
        11 named steps from sharp (
        <code style={{ fontFamily: '"Geist Mono", monospace', fontSize: '13px', backgroundColor: '#f4f4f4', padding: '1px 6px', borderRadius: '4px' }}>none</code>
        ) to fully circular (
        <code style={{ fontFamily: '"Geist Mono", monospace', fontSize: '13px', backgroundColor: '#f4f4f4', padding: '1px 6px', borderRadius: '4px' }}>full</code>
        ). Always use the CSS variable, never a raw pixel value.
      </p>

      {/* Token list */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {radii.map(({ token, px, variable, usage }, i) => {
          const clampedRadius = Math.min(parseFloat(px), 44);
          const isEven = i % 2 === 1;

          return (
            <div
              key={token}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 20px',
                backgroundColor: isEven ? '#f7f7f7' : '#ffffff',
                borderRadius: '8px',
                gap: '24px',
              }}
            >
              {/* Left: token info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '14px', color: '#191919', marginBottom: '4px', fontFamily: 'var(--astral-font-family-sans)' }}>
                  {`--astral-border-radius-${token}`}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: '"Geist Mono", monospace',
                    color: '#8a8a8a',
                    backgroundColor: '#eeeeee',
                    padding: '2px 7px',
                    borderRadius: '4px',
                  }}>
                    {px}
                  </span>
                  <span style={{ fontSize: '12px', color: '#a0a0a0' }}>{usage}</span>
                </div>
              </div>

              {/* Right: preview box */}
              <div
                style={{
                  width: '96px',
                  height: '72px',
                  flexShrink: 0,
                  backgroundColor: 'var(--astral-color-grey-3)',
                  borderRadius: `${clampedRadius}px`,
                  border: '1px solid #e0e0e0',
                }}
              />
            </div>
          );
        })}
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
