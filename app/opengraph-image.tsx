import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Bartosz Bak — Design Engineer"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  const ppNeueMontrealData = await readFile(
    join(process.cwd(), "app/fonts/PPNeueMontreal-Semibold.otf")
  )
  const ioskeleyMonoBoldData = await readFile(
    join(process.cwd(), "app/fonts/IoskeleyMono-Bold.ttf")
  )

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        padding: "0",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FEF5E2",
          // backgroundColor: "#3257D1",
          padding: "38px",
        }}
      >
        {/* BARTOSZ */}
        <div
          style={{
            display: "flex",
            fontFamily: "PPNeueMontreal",
            fontSize: 140,
            fontWeight: 600,
            letterSpacing: "0.04em",
            // color: "#FEF5E2",
            color: "#3257D1",
            lineHeight: 1,
          }}
        >
          BARTOSZ
        </div>

        {/* BAK */}
        <div
          style={{
            display: "flex",
            width: "100%",
            fontFamily: "PPNeueMontreal",
            fontSize: 140,
            fontWeight: 600,
            letterSpacing: "0.04em",
            // color: "#FEF5E2",
            color: "#3257D1",
            lineHeight: 1,
          }}
        >
          BAK
        </div>

        {/* DESIGN - right aligned */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            fontFamily: "IoskeleyMono",
            fontSize: 140,
            fontWeight: 700,
            // color: "#FEF5E2",
            color: "#3257D1",
            lineHeight: 1,
          }}
        >
          DESIGN
        </div>

        {/* Bottom row: UOY STUDENT + ENGINEER */}
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          {/* UOY STUDENT */}
          <div
            style={{
              display: "flex",
              fontFamily: "IoskeleyMono",
              fontSize: 40,
              fontWeight: 700,
              // color: "#FEF5E2",
              color: "#3257D1",
              opacity: 0.7,
              marginBottom: 8,
              marginLeft: 4,
            }}
          >
            UOY STUDENT
          </div>

          {/* ENGINEER */}
          <div
            style={{
              display: "flex",
              fontFamily: "IoskeleyMono",
              fontSize: 140,
              fontWeight: 700,
              // color: "#FEF5E2",
              color: "#3257D1",
              lineHeight: 1,
            }}
          >
            ENGINEER
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "PPNeueMontreal",
          data: ppNeueMontrealData,
          style: "normal",
          weight: 600,
        },
        {
          name: "IoskeleyMono",
          data: ioskeleyMonoBoldData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  )
}
