import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// Mock data for your app:
const mockData = {
  "/api/products": [
    { id: 1, name: "Product A", price: 19.99 },
    { id: 2, name: "Product B", price: 29.99 },
  ],
  "/api/users": [
    { id: 1, username: "Gokul" },
    { id: 2, username: "Alice" },
  ],
  // add more mock endpoints as needed
};

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Simulate network latency (optional)
  await new Promise(res => setTimeout(res, 200));

  if (method === "GET" && url in mockData) {
    const body = JSON.stringify(mockData[url]);
    return new Response(body, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  // For other methods or unknown endpoints, just return 200 OK empty
  return new Response(null, { status: 200 });
}

type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const url = queryKey[0] as string;

    // Simulate network latency (optional)
    await new Promise(res => setTimeout(res, 200));

    if (url in mockData) {
      return mockData[url] as unknown as T;
    }

    if (unauthorizedBehavior === "returnNull") {
      return null as unknown as T;
    }

    // If endpoint unknown, throw error
    throw new Error(`Mock API: Endpoint not found: ${url}`);
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
