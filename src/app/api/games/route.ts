import { NextResponse, NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'games.json');

function getGames() {
  if (!fs.existsSync(dataFilePath)) {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(dataFilePath, '[]');
    return [];
  }
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  try { return JSON.parse(fileContent); } catch (e) { return []; }
}

function saveGames(data: any) {
  const dir = path.dirname(dataFilePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
  return NextResponse.json(getGames());
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const games = getGames();
    
    const newGame = {
      ...body,
      id: body.id || Date.now().toString(),
    };
    
    games.push(newGame);
    saveGames(games);
    
    return NextResponse.json({ success: true, game: newGame });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create game' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    
    const games = getGames();
    const index = games.findIndex((g: any) => g.id === id);
    if (index === -1) return NextResponse.json({ success: false, error: 'Game not found' }, { status: 404 });
    
    games[index] = { ...games[index], ...updateData };
    saveGames(games);
    
    return NextResponse.json({ success: true, game: games[index] });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update game' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    if (!id) return NextResponse.json({ success: false, error: 'ID is required' }, { status: 400 });
    
    let games = getGames();
    const initialLength = games.length;
    games = games.filter((g: any) => g.id !== id);
    
    if (games.length === initialLength) return NextResponse.json({ success: false, error: 'Game not found' }, { status: 404 });
    
    saveGames(games);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete game' }, { status: 500 });
  }
}
