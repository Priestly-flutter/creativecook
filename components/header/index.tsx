//import { ClerkProvider,SignedOut, SignedIn, UserButton, SignInButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Header () {
    return <div>
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <CookingPotIcon className="h-6 w-6" /> <div className="font-semibold p-5">CreativeCook</div>
            <span className="sr-only">Generative Cooking</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Recipes
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Categories
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              About
            </Link>
            <div className="font-semibold">
              {/* <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton showName/>
              </SignedIn> */}
            </div>
            </nav>
        </header>
    </div>
}


interface IconProps {
    className?: string;
  
  }
  
  function CookingPotIcon(props: IconProps) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12h20" />
        <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
        <path d="m4 8 16-4" />
        <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
      </svg>
    )
  }