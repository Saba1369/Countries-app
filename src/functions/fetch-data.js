const fetchData = async (url,setState) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("get information failed!");
    }
    const info = await response.json();
    setState(info);
  } catch (error) {
    console.error("Failed to get information", error);
  } finally {
    console.log("Fetch finished");
  }
};

export default fetchData;