import { cn } from '@/lib/utils'

export function GridBackground() {
  return (
    <div className="absolute z-0 top-0 left-0 flex h-screen w-full items-center justify-center">
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:80px_80px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          '[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]'
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black-100" />
    </div>
  )
}
