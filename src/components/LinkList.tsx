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

const STORAGE_CLICKS = "linknamu_clicks";

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
    try {
      setClicks(JSON.parse(localStorage.getItem(STORAGE_CLICKS) || "{}"));
    } catch {
      setClicks({});
    }
  }, []);

  function handleClick(id: string) {
    setClicks((prev) => {
      const next = { ...prev, [id]: (prev[id] || 0) + 1 };
      localStorage.setItem(STORAGE_CLICKS, JSON.stringify(next));
      return next;
    });
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
