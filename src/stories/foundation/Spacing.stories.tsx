import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/* ─── All positive spacing tokens (0–99px + 9999px) ─────────────────────── */

const positiveTokens: { token: string; px: string; variable: string }[] = [
  { token: '0',    px: '0px',    variable: '--astral-units-pos-0'    },
  { token: '1',    px: '1px',    variable: '--astral-units-pos-1'    },
  { token: '2',    px: '2px',    variable: '--astral-units-pos-2'    },
  { token: '3',    px: '3px',    variable: '--astral-units-pos-3'    },
  { token: '4',    px: '4px',    variable: '--astral-units-pos-4'    },
  { token: '5',    px: '5px',    variable: '--astral-units-pos-5'    },
  { token: '6',    px: '6px',    variable: '--astral-units-pos-6'    },
  { token: '7',    px: '7px',    variable: '--astral-units-pos-7'    },
  { token: '8',    px: '8px',    variable: '--astral-units-pos-8'    },
  { token: '9',    px: '9px',    variable: '--astral-units-pos-9'    },
  { token: '10',   px: '10px',   variable: '--astral-units-pos-10'   },
  { token: '11',   px: '11px',   variable: '--astral-units-pos-11'   },
  { token: '12',   px: '12px',   variable: '--astral-units-pos-12'   },
  { token: '13',   px: '13px',   variable: '--astral-units-pos-13'   },
  { token: '14',   px: '14px',   variable: '--astral-units-pos-14'   },
  { token: '15',   px: '15px',   variable: '--astral-units-pos-15'   },
  { token: '16',   px: '16px',   variable: '--astral-units-pos-16'   },
  { token: '17',   px: '17px',   variable: '--astral-units-pos-17'   },
  { token: '18',   px: '18px',   variable: '--astral-units-pos-18'   },
  { token: '19',   px: '19px',   variable: '--astral-units-pos-19'   },
  { token: '20',   px: '20px',   variable: '--astral-units-pos-20'   },
  { token: '21',   px: '21px',   variable: '--astral-units-pos-21'   },
  { token: '22',   px: '22px',   variable: '--astral-units-pos-22'   },
  { token: '23',   px: '23px',   variable: '--astral-units-pos-23'   },
  { token: '24',   px: '24px',   variable: '--astral-units-pos-24'   },
  { token: '25',   px: '25px',   variable: '--astral-units-pos-25'   },
  { token: '26',   px: '26px',   variable: '--astral-units-pos-26'   },
  { token: '27',   px: '27px',   variable: '--astral-units-pos-27'   },
  { token: '28',   px: '28px',   variable: '--astral-units-pos-28'   },
  { token: '29',   px: '29px',   variable: '--astral-units-pos-29'   },
  { token: '30',   px: '30px',   variable: '--astral-units-pos-30'   },
  { token: '32',   px: '32px',   variable: '--astral-units-pos-32'   },
  { token: '36',   px: '36px',   variable: '--astral-units-pos-36'   },
  { token: '40',   px: '40px',   variable: '--astral-units-pos-40'   },
  { token: '44',   px: '44px',   variable: '--astral-units-pos-44'   },
  { token: '48',   px: '48px',   variable: '--astral-units-pos-48'   },
  { token: '52',   px: '52px',   variable: '--astral-units-pos-52'   },
  { token: '56',   px: '56px',   variable: '--astral-units-pos-56'   },
  { token: '60',   px: '60px',   variable: '--astral-units-pos-60'   },
  { token: '64',   px: '64px',   variable: '--astral-units-pos-64'   },
  { token: '68',   px: '68px',   variable: '--astral-units-pos-68'   },
  { token: '72',   px: '72px',   variable: '--astral-units-pos-72'   },
  { token: '80',   px: '80px',   variable: '--astral-units-pos-80'   },
  { token: '88',   px: '88px',   variable: '--astral-units-pos-88'   },
  { token: '96',   px: '96px',   variable: '--astral-units-pos-96'   },
  { token: '99',   px: '99px',   variable: '--astral-units-pos-99'   },
  { token: '9999', px: '9999px', variable: '--astral-units-pos-9999' },
];

const negativeTokens: { token: string; px: string; variable: string }[] = [
  { token: '-1',  px: '-1px',  variable: '--astral-units-neg-1'  },
  { token: '-2',  px: '-2px',  variable: '--astral-units-neg-2'  },
  { token: '-3',  px: '-3px',  variable: '--astral-units-neg-3'  },
  { token: '-4',  px: '-4px',  variable: '--astral-units-neg-4'  },
  { token: '-5',  px: '-5px',  variable: '--astral-units-neg-5'  },
  { token: '-6',  px: '-6px',  variable: '--astral-units-neg-6'  },
  { token: '-7',  px: '-7px',  variable: '--astral-units-neg-7'  },
  { token: '-8',  px: '-8px',  variable: '--astral-units-neg-8'  },
  { token: '-9',  px: '-9px',  variable: '--astral-units-neg-9'  },
  { token: '-10', px: '-10px', variable: '--astral-units-neg-10' },
];

/* ─── Shared table column layout ─────────────────────────────────────────── */

const COL = '120px 80px 280px 1fr';

/* ─── Row component ──────────────────────────────────────────────────────── */

function SpacingRow({
  token,
  px,
  variable,
  isNegative = false,
}: {
  token: string;
  px: string;
  variable: string;
  isNegative?: boolean;
}) {
  const pxNum = Math.abs(parseFloat(px));
  // Cap bar width at 320px for 9999px token
  const barWidth = Math.min(pxNum, 320);
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: COL,
        gap: '0 16px',
        alignItems: 'center',
        padding: '10px 16px',
        borderBottom: '1px solid #f2f2f2',
        backgroundColor: hovered ? '#fafafa' : 'transparent',
        borderRadius: '6px',
        transition: 'background 0.1s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Token */}
      <span style={{ fontSize: '12.5px', fontFamily: '"Geist Mono", monospace', color: '#191919', fontWeight: 600 }}>
        {token}
      </span>

      {/* Value */}
      <span style={{ fontSize: '12px', fontFamily: '"Geist Mono", monospace', color: '#5e5e5e' }}>
        {px}
      </span>

      {/* Visual preview bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {pxNum === 0 ? (
          <div style={{ width: '2px', height: '16px', backgroundColor: '#e0e0e0', borderRadius: '1px' }} />
        ) : pxNum > 320 ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '120px', height: '16px', backgroundColor: 'var(--astral-color-grey-3)', borderRadius: '4px', border: '1px solid #e0e0e0' }} />
            <span style={{ fontSize: '11px', color: '#8a8a8a', fontFamily: '"Geist Mono", monospace' }}>→ {px}</span>
          </div>
        ) : (
          <div
            style={{
              width: `${barWidth}px`,
              height: '16px',
              backgroundColor: 'var(--astral-color-grey-3)',
              borderRadius: '4px',
              border: '1px solid #e0e0e0',
              opacity: 1,
              flexShrink: 0,
            }}
          />
        )}
      </div>

      {/* Variable */}
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          width: 'fit-content',
          backgroundColor: '#EBF3FF',
          borderRadius: '6px',
          padding: '3px 8px',
          fontSize: '11px',
          fontFamily: '"Geist Mono", monospace',
          color: '#00AE35',
          whiteSpace: 'nowrap',
        }}
      >
        {`var(${variable})`}
      </span>
    </div>
  );
}

/* ─── Table header ────────────────────────────────────────────────────────── */

function TableHead() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: COL,
        gap: '0 16px',
        padding: '8px 16px 10px',
        borderBottom: '2px solid #eeeeee',
        marginBottom: '4px',
      }}
    >
      {['Token', 'Value', 'Preview', 'Variable'].map((h) => (
        <span
          key={h}
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: '#8a8a8a',
            fontFamily: '"Geist Mono", monospace',
          }}
        >
          {h}
        </span>
      ))}
    </div>
  );
}

/* ─── Main page ──────────────────────────────────────────────────────────── */

function SpacingDoc() {
  return (
    <div
      style={{
        fontFamily: 'var(--astral-font-family-sans)',
        padding: '40px 48px',
        maxWidth: '960px',
        color: '#191919',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Header */}
      <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8a8a8a', marginBottom: '10px' }}>
        Tokens
      </div>
      <h1 style={{ fontSize: '30px', fontWeight: 700, letterSpacing: '-0.6px', margin: '0 0 12px 0', lineHeight: 1.2 }}>
        Spacing
      </h1>
      <p style={{ fontSize: '14px', lineHeight: 1.8, color: '#5e5e5e', margin: '0 0 48px 0', maxWidth: '560px' }}>
        A 0–99px unit scale (plus negative offsets) from the Astral primitives.
        Each value is a CSS variable — use them for <code style={{ fontFamily: '"Geist Mono", monospace', fontSize: '13px', backgroundColor: '#f4f4f4', padding: '1px 6px', borderRadius: '4px' }}>padding</code>,{' '}
        <code style={{ fontFamily: '"Geist Mono", monospace', fontSize: '13px', backgroundColor: '#f4f4f4', padding: '1px 6px', borderRadius: '4px' }}>margin</code>,{' '}
        <code style={{ fontFamily: '"Geist Mono", monospace', fontSize: '13px', backgroundColor: '#f4f4f4', padding: '1px 6px', borderRadius: '4px' }}>gap</code>, and layout sizing.
      </p>

      {/* ── Positive tokens ──────────────────────────────────────────────── */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.3px', color: '#191919', margin: '0 0 4px 0' }}>
          Positive Units
        </h2>
        <p style={{ fontSize: '13px', color: '#8a8a8a', margin: '0 0 20px 0', lineHeight: 1.5 }}>
          100 steps from 0 to 99px, plus a 9999px utility token for full-bleed layouts.
        </p>

        <TableHead />
        {positiveTokens.map((t) => (
          <SpacingRow key={t.token} {...t} />
        ))}
      </div>

      {/* Divider */}
      <div style={{ border: 'none', borderTop: '1px solid #eeeeee', margin: '0 0 48px 0' }} />

      {/* ── Negative tokens ──────────────────────────────────────────────── */}
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.3px', color: '#191919', margin: '0 0 4px 0' }}>
          Negative Units
        </h2>
        <p style={{ fontSize: '13px', color: '#8a8a8a', margin: '0 0 20px 0', lineHeight: 1.5 }}>
          −1 to −10px for overlaps, border insets, and pull-back offsets.
        </p>

        <TableHead />
        {negativeTokens.map((t) => (
          <SpacingRow key={t.token} {...t} isNegative />
        ))}
      </div>

    </div>
  );
}

/* ─── Story config ───────────────────────────────────────────────────────── */

const meta: Meta = {
  title: 'Tokens/Spacing',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '0–99px unit scale with negative steps, derived from export.json primitives.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const Docs: Story = {
  name: 'Spacing',
  render: () => <SpacingDoc />,
};
