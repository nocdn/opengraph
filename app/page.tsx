export default function Home() {
  return (
    <div className="grid h-svh w-full place-content-center">
      <div id="square-grid" className="flex flex-col gap-1">
        {/* 5 rows */}
        {/* each square has size 4px by 4px */}
        <div className="mx-auto flex gap-2.5">
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
        </div>
        <div className="mx-auto flex gap-2.5">
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
        </div>
        <div className="mx-auto flex gap-2.5">
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
        </div>
        <div className="mx-auto flex gap-2.5">
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
        </div>
        <div className="mx-auto flex gap-2.5">
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
          <div className="size-2 rounded-[1px] bg-[#6a8f7c]"></div>
        </div>
      </div>
    </div>
  )
}
