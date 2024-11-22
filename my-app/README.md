This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

1. ShadCN은 코드 생성 도구
   ShadCN은 필요한 UI 컴포넌트를 프로젝트로 가져오고, 컴포넌트의 소스 코드를 프로젝트에 추가합니다.
   가져온 컴포넌트는 더 이상 ShadCN 자체에 의존하지 않고 프로젝트의 코드로 동작합니다.
   결과적으로, ShadCN 자체는 빌드 단계 이후에는 필요하지 않습니다.

# type과 interface

type과 interface도 아주 비슷해보인다. 공통점과 차이점은 무엇일까?

## 공통점

- 매개변수의 타입을 `type` 또는 `interface`로 정의할 수 있다.
- 함수의 타입도 정의할 수 있다.
- 함수의 반환 타입 정의할 수 있다.

```typescript
// 타입 별칭 정의
type User = {
  name: string;
  age: number;
};

// 인터페이스 정의
interface User {
  name: string;
  age: number;
}

// 매개변수에 타입 별칭 사용
function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```

```typescript
// 매개변수에 인터페이스 사용
function greet(user: User): string {
  return `Hello, ${user.name}!`;
}
```

##

그렇다면 차이점은 무엇일까?
type 구조가 필요한 타입에 사용하고, interface는 객체의 타입에 사용하는것을 권장한다고 한다.
그런데 type이라고 해서 객체의 구조를 정의할 수 없는것은 아니라고 한다.

```typescript
type BirdType = {
  body: string;
  head: string;
};

class Bird {
  body: string;
  head: string;

  constructor(body: string, head: string) {
    this.body = body;
    this.head = head;
  }
}

const sparrow: BirdType = new Bird('small', 'round');
```

```typescript
interface BirdInterface {
  body: string;
  head: string;
}

class Bird implements BirdInterface {
  body: string;
  head: string;

  constructor(body: string, head: string) {
    this.body = body;
    this.head = head;
  }
}

const sparrow: BirdInterface = new Bird('small', 'round');
```

interface는 extends 등의 키워드를 사용하여 객체지향 코드와 유사하게 확장을 할 수 있어서 객체 중심의 코드에 더 적합하다.

```
npm install react-hook-form zod @hookform/resolvers
```