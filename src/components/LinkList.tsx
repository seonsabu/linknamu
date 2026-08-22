"use client";

import { useEffect, useState, type ComponentType } from "react";
import { links } from "@/lib/links";
import {
  InstagramIcon,
  YoutubeIcon,
  BlogIcon,
  GithubIcon,
  EmailIcon,
} from "./icons";

const iconMap: Record<string, ComponentType> = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  blog: BlogIcon,
  github: GithubIcon,
  email: EmailIcon,
};

export default function LinkList() {
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data) => setClicks(data))
      .catch(() => setClicks({}));
  }, []);

  function handleClick(id: string) {
    setClicks((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {});
  }

  return (
    <div className="links">
      {links.map((link) => {
        const Icon = iconMap[link.id];
        const isExternal = link.href.startsWith("http");
        return (
          <a
            key={link.id}
            className="link-card"
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            onClick={() => handleClick(link.id)}
          >
            <span className="link-icon">
              <Icon />
            </span>
            <span className="link-label">{link.label}</span>
            <span className="link-clicks">{clicks[link.id] || 0}회 클릭</span>
          </a>
        );
      })}
    </div>
  );
}
