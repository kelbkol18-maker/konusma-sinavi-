@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:ital,wght@0,700;1,700&family=JetBrains+Mono&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", serif;
  --font-mono: "JetBrains Mono", monospace;
}

@layer base {
  body {
    @apply bg-[#0a0a0a] text-white overflow-hidden;
  }
}

.glass {
  @apply bg-white/5 backdrop-blur-xl border border-white/10;
}

.slide-container {
  @apply h-screen w-screen flex items-center justify-center p-4 md:p-12;
}
