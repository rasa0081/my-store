import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/database';

export async function POST(request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}