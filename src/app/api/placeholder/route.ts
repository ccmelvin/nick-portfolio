import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const width = searchParams.get('width') || '300';
  const height = searchParams.get('height') || '300';
  
  // Generate a random hex color for the background
  const bgColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  
  // Create a lighter text color for contrast
  const textColor = 'ffffff';
  
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#${bgColor}" />
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="24" 
        fill="#${textColor}" 
        text-anchor="middle" 
        dominant-baseline="middle"
      >
        ${width} × ${height}
      </text>
    </svg>
  `;
  
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
