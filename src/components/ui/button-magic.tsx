type ButtonMagic = {
  title: string
  position: string
  icon: React.ReactNode
  otherClasses?: string
  handleClick?: () => void
}

export default function ButtonMagic({ title, position, handleClick, icon, otherClasses }: ButtonMagic) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-52 md:mt-5">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white dark:bg-slate-950 px-6 py-1 gap-2 text-sm font-medium text-black-default dark:text-white backdrop-blur-3xl">
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  )
}
