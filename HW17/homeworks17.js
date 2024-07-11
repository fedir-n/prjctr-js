'use strict';

async function retry(func, count) {
  const retries = count?.retries ?? 1;
  for (let i = 1; i <= retries; i++) {
    try {
      return await func();
    } catch (error) {
      if (i === retries) {
        throw new Error(error);
      }
    }
  }
}

const getUserInfo = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  const userInfo = await response.json();

  return userInfo;
};

retry(getUserInfo, { retries: 3 });
