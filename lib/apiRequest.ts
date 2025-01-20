type MakeApiRequestParams<T> = {
    setLoading: (loading: boolean) => void;
    url: string;
    data: T;
    resourceName: string;
    reset: () => void;
  };
  
  export async function makeApiRequest<T>({
    setLoading,
    url,
    data,
    resourceName,
    reset,
  }: MakeApiRequestParams<T>) {
    try {
      setLoading(true);
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "An unknown error occurred");
      }
  
      const responseData = await response.json();
      console.log(`${resourceName} created:`, responseData);
      reset();
      alert(`${resourceName} saved successfully!`);
    } catch (error) {
      console.error(`Error saving ${resourceName}:`, error);
      alert(error instanceof Error ? error.message : `Error saving ${resourceName}`);
    } finally {
      setLoading(false);
    }
  }
  