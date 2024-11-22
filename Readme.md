# Next.js

## 초기화

```bash
npx create-next-app@latest
```

## 로그인

필수 패키지

`npm install jsonwebtoken bcryptjs cookie classnames`

- jsonwebtoken: JWT(JSON Web Token) 생성 및 검증
- bcryptjs: 비밀번호 해싱 및 검증
- cookie: HTTP 쿠키 처리
- classnames: 동적 클래스 네임 관리 (선택 사항)

## 패키지

### headlessui

`npm install @headlessui/react`

### prisma

`npm install prisma --save-dev` 개발 환경에서만 의존성에 추가, 프로덕션 환경에서는 없음

- Prisma CLI(Command Line Interface) 도구.
- 명령어를 통해 Prisma 설정파일과 환경변수를 생성 <br>
  `npx init`
- 데이터베이스 스키마 변경 사항을 마이그레이션 파일로 관리 <br>
  `npx prisma migrate dev`
- 데이터베이스 스키마 기반의 TypeScript 클라이언트를 생성 <br>
  `npx prisma generate`

### @prisma/cleint

`npm install @prisma/client`

Prisma 클라이언트 라이브러리.

- 애플리케이션 코드에서 데이터베이스와 상호작용
- Prisma 클라이언트는 데이터베이스의 스키마를 기반으로 자동 생성되는 타입 안전한 ORM
- 설치 후, npx prisma generate 명령어를 통해 Prisma 클라이언트를 생성합니다.
  데이터베이스 쿼리를 TypeScript를 사용하여 안전하고 편리하게 작성할 수 있습니다.

## 데이터베이스 Prisma 초기화

```bash
npx prisma init # 프리스마 프로젝트 초기화
```

`.env`에 데이터 베이스 url을 정의할 수 있다. `/my-app/prisma/`에 스키마를

스키마 마이그레이션

```bash
npx prisma migrate dev --name init # 모델링을 데이터베이스에 반영.
```
