import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'tournaments.json');

// Helper to get tournaments
function getTournaments() {
  if (!fs.existsSync(dataFilePath)) {
    // Make sure directory exists
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, '[]');
    return [];
  }
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  try {
    return JSON.parse(fileContent);
  } catch (e) {
    return [];
  }
}

// Helper to save tournaments
function saveTournaments(data: any) {
  const dir = path.dirname(dataFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
  const tournaments = getTournaments();
  return NextResponse.json(tournaments);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const tournaments = getTournaments();
    
    const newTournament = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    tournaments.push(newTournament);
    saveTournaments(tournaments);
    
    return NextResponse.json({ success: true, tournament: newTournament });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create tournament' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    
    const tournaments = getTournaments();
    const index = tournaments.findIndex((t: any) => t.id === id);
    
    if (index === -1) return NextResponse.json({ success: false, error: 'Tournament not found' }, { status: 404 });
    
    tournaments[index] = { ...tournaments[index], ...updateData };
    saveTournaments(tournaments);
    
    return NextResponse.json({ success: true, tournament: tournaments[index] });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update tournament' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    
    let tournaments = getTournaments();
    const initialLength = tournaments.length;
    tournaments = tournaments.filter((t: any) => t.id !== id);
    
    if (tournaments.length === initialLength) {
      return NextResponse.json({ success: false, error: 'Tournament not found' }, { status: 404 });
    }
    
    saveTournaments(tournaments);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete tournament' }, { status: 500 });
  }
}
