type SignupForm = {
  email: string;
  name: string;
  password: string;
};

export const registerUser = async (data: SignupForm) => {
  const response = await fetch('/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error('회원가입 실패:', await response.text());
  } else {
    console.log('회원가입 성공');
  }
};
