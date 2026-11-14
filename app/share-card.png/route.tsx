import { ImageResponse } from "next/og"
import { profile } from "@/content/profile"

export const dynamic = "force-static"

export function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        backgroundColor: "#15221f",
        color: "#f5efe0",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ color: "#e2bd73", fontSize: 24, letterSpacing: "0.16em" }}>
        {profile.title.toUpperCase()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: "-0.06em" }}>
          {profile.name}
        </div>
        <div style={{ color: "#d5d0c3", fontSize: 30 }}>
          {profile.shareImageDescription}
        </div>
      </div>
      <div style={{ color: "#e2bd73", fontSize: 22 }}>{profile.siteUrl}</div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
