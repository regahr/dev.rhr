import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <a className="
              flex
              gap-2
              flex-col 
              justify-between
              z-10 
              items-center 
              font-mono 
              text-sm
              rounded-xl 
              border
              border-transparent
              transition-colors
            hover:border-neutral-700 
            hover:bg-neutral-800/30
              p-6"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:dev.rhr@gmail.com">
        <p>
          Our codename is&nbsp;
          <code className="font-mono font-bold">dev.rhr</code>
        </p>
        <p>
            Need us?
        </p>
      </a>
    </main>
  )
}
