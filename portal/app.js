const log = document.getElementById("log");
const metricsEl = document.getElementById("metrics");
const btn = document.getElementById("send");
const promptEl = document.getElementById("prompt");

let history = [];

function fmt(x) {
  if (typeof x !== "number") return "—";
  return x.toFixed(2);
}

btn.onclick = async () => {
  const text = promptEl.value.trim();
  if (!text) return;

  promptEl.value = "";
  history.push({ role: "user", content: text });
  log.textContent += `\n\nYou: ${text}\n\nHER2NI: `;
  let assistant = "";

  const res = await fetch("http://localhost:8787/api/chat/stream", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: history })
  });

  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buf = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });

    const events = buf.split("\n\n");
    buf = events.pop() ?? "";

    for (const ev of events) {
      const lines = ev.split("\n");
      const eventLine = lines.find(l => l.startsWith("event:"));
      const dataLine = lines.find(l => l.startsWith("data:"));
      if (!eventLine || !dataLine) continue;

      const event = eventLine.slice(6).trim();
      const data = JSON.parse(dataLine.slice(5));

      if (event === "delta") {
        assistant += data.delta;
        log.textContent += data.delta;
      } else if (event === "metrics") {
metricsEl.innerHTML =
  `Cs ≈ <span class="val">${fmt(data.Cs)}</span> · ` +
  `Ss ≈ <span class="val">${fmt(data.Ss)}</span> · ` +
  `Hs ≈ <span class="val">${fmt(data.Hs)}</span>`;
      } else if (event === "done") {
        history.push({ role: "assistant", content: assistant });
      }
    }
  }
};
