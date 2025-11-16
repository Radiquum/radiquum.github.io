"use client";

function getContrastYIQ(hex: string) {
  const hexValue = hex.replace("#", "");
  const r = parseInt(`0x${hexValue.slice(0, 2)}`, 16);
  const g = parseInt(`0x${hexValue.slice(2, 4)}`, 16);
  const b = parseInt(`0x${hexValue.slice(4, 6)}`, 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}

function copyColor(hex: string) {
  if (navigator.share) {
    navigator
      .share({ text: hex })
      .catch(() => console.error("Не удалось скопировать"));
  } else if (navigator.clipboard) {
    navigator.clipboard
      .writeText(hex)
      .catch(() => console.error("Не удалось скопировать"));
  } else {
    console.error("Действие не поддерживается вашим браузером");
  }
}

export const CharacterColor = ({ color }: { color: string }) => {
  return (
    <div
      className="bg-[var(--bg-color)] px-8 py-4 text-2xl rounded-xl border-1 border-white/5"
      style={{ "--bg-color": color } as React.CSSProperties}
    >
      <div
        className="flex gap-2 justify-between items-center"
        style={{ "--text-color": getContrastYIQ(color) } as React.CSSProperties}
      >
        <p className="text-[var(--text-color)]">{color}</p>
        <button className="cursor-pointer" onClick={() => copyColor(color)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--text-color)"
              d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
