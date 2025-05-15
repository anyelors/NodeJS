console.log("📌 Plataforma:", process.platform);
console.log("🚑 Plataforma:", process.arch);
console.log("📁 Directorio:", __dirname);
console.log("🧠 Versión Node:", process.version);
console.log("🔄 Tiempo activo:", process.uptime(), "segundos");
setTimeout(()=>
    console.log("🔃 Tiempo activo:", process.uptime(), "segundos")
, 2000);
