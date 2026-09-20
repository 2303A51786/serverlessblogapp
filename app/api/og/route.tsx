import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Aether — Serverless Editorial Platform';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#FBFBFA',
            color: '#1A1A1A',
            padding: '60px 80px',
            fontFamily: 'serif',
          }}
        >
          {/* Top Brand Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#86937D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: '24px',
              }}
            >
              Æ
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '28px', fontWeight: 'bold' }}>Aether</span>
              <span style={{ fontSize: '14px', color: '#86937D', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Editorial Platform
              </span>
            </div>
          </div>

          {/* Article Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px' }}>
            <h1
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                lineHeight: 1.2,
                color: '#1A1A1A',
                margin: 0,
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '2px solid #EAEAE8',
              paddingTop: '24px',
            }}
          >
            <span style={{ fontSize: '18px', color: '#5C5B57' }}>
              Aether Editorial • Modern Infrastructure & Edge AI
            </span>
            <span style={{ fontSize: '18px', color: '#86937D', fontWeight: 'bold' }}>
              aether-editorial.vercel.app
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the OG image`, {
      status: 500,
    });
  }
}
