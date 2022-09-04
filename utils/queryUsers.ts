export const loginUser = async (data: any) => {
  try {
    const response = await fetch(`http://localhost:4000/api/v1/login`, {
      mode: 'cors',
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    return { message: 'Error to response information', error };
  }
};
