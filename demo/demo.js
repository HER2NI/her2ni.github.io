const transcriptEl = document.getElementById("transcript");
const eventTextEl = document.getElementById("eventText");
const eventMetaEl = document.getElementById("eventMeta");

const barCs = document.getElementById("barCs");
const barSs = document.getElementById("barSs");
const barHs = document.getElementById("barHs");

const valCs = document.getElementById("valCs");
const valSs = document.getElementById("valSs");
const valHs = document.getElementById("valHs");

const btnRestart = document.getElementById("btnRestart");
const btnPause = document.getElementById("btnPause");

let run = [];
let idx = 0;
let timer = null;
let paused = false;

function clamp01(x){
  if (typeof x !== "number") return 0;
  return Math.max(0, Math.min(1, x));
}

function fmt(x){
  if (typeof x !== "number") return "—";
  return x.toFixed(2);
}

function setBar(fillEl, val){
  fillEl.style.width = `${Math.round(clamp01(val) * 100)}%`;
}

function setEventLines(item){
  const eventText = `Event: ${escapeHtml(item.event)}`;

const metaText =
  `Step: ${String(item.step).padStart(2, "0")}` +
  ` · Cs≈ ${fmt(item.Cs)}` +
  ` · Ss≈ ${fmt(item.Ss)}` +
  ` · Hs≈ ${fmt(item.Hs)}`;

eventTextEl.textContent = eventText;
eventMetaEl.textContent = metaText;

eventTextEl.title = `${eventText} · ${metaText}`;
eventMetaEl.title = `${eventText} · ${metaText}`;
}

function setTranscript(item){
  const lines = item.transcript || [];
  transcriptEl.textContent = lines.slice(-2).join("\n");
}

function render(item){
  setTranscript(item);

  setBar(barCs, item.Cs);
  setBar(barSs, item.Ss);
  setBar(barHs, item.Hs);

  valCs.textContent = fmt(item.Cs);
  valSs.textContent = fmt(item.Ss);
  valHs.textContent = fmt(item.Hs);

setEventLines(item);
}

function tick(){
  if (paused) return;
  if (!run.length) return;

  render(run[idx]);

idx += 1;
if (idx >= run.length) {
  idx = 0;
}
}

function start(){
  stop();
  paused = false;
  btnPause.textContent = "Pause";
  idx = 0;
  tick();
  timer = setInterval(tick, 900);
}

function stop(){
  if (timer){
    clearInterval(timer);
    timer = null;
  }
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

async function init(){
  const res = await fetch("./telemetry.json", { cache: "no-store" });
  const json = await res.json();
  run = json.run || [];
  start();
}

btnRestart.addEventListener("click", () => start());

btnPause.addEventListener("click", () => {
  paused = !paused;
  btnPause.textContent = paused ? "Resume" : "Pause";
});

init().catch((e) => {
  transcriptEl.textContent = "Failed to load telemetry.json. If you're opening as file://, serve the folder with a local web server.";
  console.error(e);
});
