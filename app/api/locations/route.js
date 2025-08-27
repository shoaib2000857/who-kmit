import { NextResponse } from "next/server";

const locations = [
  { name: 'B - Block', coords: [17.396682179756525, 78.48997064971536] },
  { name: 'Basket ball court', coords: [17.397279785317313, 78.48994918895518] },
  { name: 'Bhavishya Dwar', coords: [17.397536318799695, 78.48988376943426] },
  { name: 'Canteen', coords: [17.397329638533396, 78.49100962665318] },
  { name: 'Auditorium', coords: [17.397632300268608, 78.49066697445483] },
  { name: 'D-Block', coords: [17.397522881381963, 78.49035248545331] },
  { name: 'Library', coords: [17.39754591694445, 78.49019825843526] },
  { name: 'Foot Ball Ground', coords: [17.396971306863716, 78.49026129034559] },
];

export async function GET() {
  return NextResponse.json(locations);
}
