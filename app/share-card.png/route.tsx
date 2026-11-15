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
        backgroundColor: "#111625",
        color: "#f7f8ff",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ color: "#d7f970", fontSize: 24, letterSpacing: "0.16em" }}>
        {profile.title.toUpperCase()}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: "-0.06em" }}>
          {profile.name}
        </div>
        <div style={{ color: "#c1c8da", fontSize: 30 }}>
          {profile.shareImageDescription}
        </div>
      </div>
      <div style={{ color: "#d7f970", fontSize: 22 }}>{profile.siteUrl}</div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  )
}
