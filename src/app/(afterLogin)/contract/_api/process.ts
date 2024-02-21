const fetchPosts = async () => {
    const response = await fetch("https://url", {
      cache: "no-store",
    });
    return response.json();
};