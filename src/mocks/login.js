const delay = ms => new Promise(res => setTimeout(res, ms));

export const loginMock = async ({username, password}) => {
  await delay(3000);
  if(username === "pranav" && password === "pranav") {
    return true;
  }
  return false;
}

