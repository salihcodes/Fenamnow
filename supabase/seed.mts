// You can use @snaplet/copycat to generate fake data for a field, for example:
// ```
// await seed.users([{ email: ({ seed }) => copycat.email(seed) }])
// ```
// More on this in our docs: https://docs.snaplet.dev/core-concepts/seed#inside-the-snapletseed-workflow
// import { copycat } from "@snaplet/copycat";
import { createSeedClient } from "@snaplet/seed";

// This is a basic example generated by Snaplet to start you off, check out the docs for where to go from here
// * For more on getting started with @snaplet/seed: https://docs.snaplet.dev/getting-started/quick-start/seed
// * For a more detailed reference: https://docs.snaplet.dev/core-concepts/seed

const seed = await createSeedClient({
  dryRun: process.env.DRY !== "0",
});

await seed.profiles((x) => x(10));

// Clears all existing data in the database, but keep the structure
await seed.$resetDatabase();

// This will create 3 records in the HttpResponses table
// it reads HttpResponses times(x) 3
await seed.HttpResponses((x) => x(3));

// Run it with: DRY=0 npx tsx seed.mts
