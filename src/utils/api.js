const BASE_URL = 'http://localhost:10000/api/angel';

export const apiRequest = async (method, endpoint, data = {}, token = null) => {
  const url = `${BASE_URL}${endpoint}`;
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (method !== 'GET' && method !== 'HEAD') {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || 'Something went wrong');
  }

  return responseData;
};