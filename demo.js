// Mara Memory Coach - PUBLIC DEMO ONLY - JS
// Real core logic is PRIVATE and runs only on Railway.
// This file only calls the public API.

const URL = "https://mara-memory-coach-v07-production.up.railway.app/v1/web_check_multi";

async function checkMemory() {
  const payload = {
    memory: "openai/gpt-4o price",
    sources: ["openrouter", "tavily"]
  };

  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  console.log(data);
  // Expected: USE / ABSTAIN / DEFERRED + SHA-256 proof
}

checkMemory();
