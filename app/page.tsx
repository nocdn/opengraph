import { CheckerDiamond } from "@/lib/components/checker-diamond"

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-start justify-center gap-24 px-128">
      <div
        className="flex items-center justify-center gap-24 text-9xl font-medium antialiased"
        style={{ fontFamily: "SF Pro Text" }}
      >
        <CheckerDiamond seed={42} />
        <p>Best Easing curves</p>
      </div>
      <div
        className="flex items-center justify-center gap-24 text-9xl font-medium antialiased"
        style={{ fontFamily: "SF Pro Text" }}
      >
        <CheckerDiamond seed={114} />
        <p>Good article on animations</p>
      </div>
    </div>
  )
}
