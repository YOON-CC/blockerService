export async function handlePostMethod(url: string, data: any) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}
