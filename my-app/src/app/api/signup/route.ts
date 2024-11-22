import { signupSchema } from '@/schemas/user';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 입력 데이터 검증
    const parseData = signupSchema.parse(body);

    // 회원가입 로직 (예: 데이터베이스에 사용자 저장)
    const user = await signupApi(value);

    return NextResponse.json(
      { message: '회원가입 성공', user },
      { status: 201 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: '회원가입에 실패했습니다.' },
      { status: 500 },
    );
  }
}
