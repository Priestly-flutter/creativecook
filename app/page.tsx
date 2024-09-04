/**
 * v0 by Vercel.
 * @see https://v0.dev/t/puib5m2fM5N
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"


export default function Component() {
  return (
    
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Delicious Recipes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Explore a world of culinary inspiration with our generative cooking platform. Unlock endless recipe
                    possibilities tailored to your tastes.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.jpg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="flex flex-col bg-background rounded-lg overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  width="400"
                  height="300"
                  alt="Recipe"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Creamy Mushroom Risotto</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    A rich and creamy risotto made with fresh mushrooms and Parmesan cheese.
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-background rounded-lg overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  width="400"
                  height="300"
                  alt="Recipe"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Grilled Salmon with Lemon</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Perfectly grilled salmon fillets with a bright lemon garlic sauce.
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-background rounded-lg overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  width="400"
                  height="300"
                  alt="Recipe"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Vegetable Stir-Fry</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    A colorful and flavorful stir-fry with fresh vegetables and a savory sauce.
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-background rounded-lg overflow-hidden">
                <img
                  src="/placeholder.jpg"
                  width="400"
                  height="300"
                  alt="Recipe"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-bold">Chocolate Lava Cake</h3>
                  <p className="text-muted-foreground line-clamp-2">
                    A decadent and indulgent chocolate cake with a molten center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Featured Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col bg-background rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.jpg"
                      width="400"
                      height="300"
                      alt="Recipe"
                      className="aspect-[4/3] object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">Creamy Chicken Alfredo</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        A rich and creamy pasta dish with tender chicken and a garlic Parmesan sauce.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col bg-background rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.jpg"
                      width="400"
                      height="300"
                      alt="Recipe"
                      className="aspect-[4/3] object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">Roasted Vegetable Medley</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        A colorful and flavorful mix of roasted vegetables tossed in a balsamic glaze.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col bg-background rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.jpg"
                      width="400"
                      height="300"
                      alt="Recipe"
                      className="aspect-[4/3] object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">Grilled Steak Fajitas</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        Tender grilled steak, sautéed peppers and onions, and all the fajita fixings.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col bg-background rounded-lg overflow-hidden">
                    <img
                      src="/placeholder.jpg"
                      width="400"
                      height="300"
                      alt="Recipe"
                      className="aspect-[4/3] object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">Baked Ziti</h3>
                      <p className="text-muted-foreground line-clamp-2">
                        A classic Italian casserole with layers of pasta, cheese, and a rich tomato sauce.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-bold">Popular Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:underline underline-offset-4"
                      prefetch={false}
                    >
                      Appetizers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:underline underline-offset-4"
                      prefetch={false}
                    >
                      Entrees
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:underline underline-offset-4"
                      prefetch={false}
                    >
                      Desserts
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:underline underline-offset-4"
                      prefetch={false}
                    >
                      Vegetarian
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:underline underline-offset-4"
                      prefetch={false}
                    >
                      Gluten-Free
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-muted-foreground hover:underline underline-offset-4"
                      prefetch={false}
                    >
                      Healthy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Generative Cooking. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
// props
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