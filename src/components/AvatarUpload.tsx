"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_AVATAR = "linknamu_avatar";
const DEFAULT_AVATAR = "/profile.png";

export default function AvatarUpload() {
  const [avatar, setAvatar] = useState<string | null>(DEFAULT_AVATAR);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_AVATAR);
    if (saved) setAvatar(saved);
  }, []);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setAvatar(dataUrl);
      localStorage.setItem(STORAGE_AVATAR, dataUrl);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className="avatar-wrap">
      <button
        type="button"
        className="avatar"
        style={avatar ? { backgroundImage: `url(${avatar})` } : undefined}
        onClick={() => inputRef.current?.click()}
        aria-label="프로필 사진 변경"
      >
        {!avatar && "김"}
      </button>
      <span className="avatar-edit-badge">
        <svg viewBox="0 0 24 24">
          <path d="M9 3 7.17 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      </span>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="avatar-input"
      />
    </div>
  );
}
