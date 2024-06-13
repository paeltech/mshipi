export default defineNitroPlugin(() => {
  // Only run migrations in development
  if (import.meta.dev) {
    onHubReady(async () => {
      await hubDatabase().exec(
        `
          CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            completed INTEGER NOT NULL DEFAULT 0
          )
        `.replace(/\n/g, "")
      );
    });
  }
});
