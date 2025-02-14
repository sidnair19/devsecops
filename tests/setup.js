afterAll(async () => {
    console.log("Closing database connections...");
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Ensure all async tasks complete
  });