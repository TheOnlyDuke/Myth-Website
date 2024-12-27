const makeRequest = async (endpoint, options = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };

  if (options.token) {
    defaultHeaders.Authorization = `Bearer ${options.token}`;
    delete options.token;
  }

  const response = await fetch(endpoint, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }

  return data;
};

export const apiClient = {
  login: (credentials) =>
    makeRequest("/api/accounts/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),

  register: (userData) =>
    makeRequest("/api/accounts/register", {
      method: "POST",
      body: JSON.stringify(userData),
    }),

  verify: (verifyData) =>
    makeRequest("/api/accounts/verify", {
      method: "POST",
      body: JSON.stringify(verifyData),
    }),

  getProfile: (token) =>
    makeRequest("/api/accounts/profile", {
      method: "GET",
      token,
    }),

  getQuestions: () => makeRequest("/api/questions"),

  getQuestionStage: (questionId, stage) =>
    makeRequest(`/api/questions/${questionId}/${stage}`),

  submitAnswer: (questionId, stage, option) =>
    makeRequest(`/api/questions/${questionId}/${stage}`, {
      method: "POST",
      body: JSON.stringify({ option: String(option) }),
    }),
};
