import { useRef, useEffect } from "react";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { animate, stagger } from "animejs";
import { prefersReducedMotion } from "@/hooks/useScrollAnimation";
import ScrambleHeading from "./ScrambleHeading";

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  price: string;
  links: {
    buy: string;
    demo: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    title: "Noir & Brew",
    category: "Premium Astro Template",
    description:
      "Premium Astro cafe template with 3 themes, Tailwind v4, Framer Motion animations, and responsive layouts.",
    tags: ["Astro", "Tailwind v4", "Framer Motion", "Responsive", "3 Themes"],
    price: "$29",
    links: {
      buy: "https://aardnsyhs.gumroad.com/l/noir-and-brew-cafe-template",
      demo: "https://cafe-template-sigma.vercel.app",
    },
  },
  {
    id: 2,
    title: "MONO",
    category: "Minimal Company Template",
    description:
      "Minimal company profile template focused on typography and clean layouts.",
    tags: ["Astro", "Tailwind", "Minimal", "Responsive"],
    price: "$19",
    links: {
      buy: "https://aardnsyhs.gumroad.com/l/mono-company-profile",
      demo: "https://mono-profile-alpha.vercel.app",
    },
  },
];

const ProductsSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;

    const cards = grid.querySelectorAll<HTMLElement>(".product-card");
    cards.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "scale(0.85) translateY(20px)";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animate(cards, {
            opacity: [0, 1],
            scale: [0.85, 1],
            translateY: [20, 0],
            duration: 550,
            delay: stagger(80, { from: "center" }),
            ease: "outBack(1.2)",
          });
        }
      },
      { threshold: 0.08 },
    );

    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      className="section-padding"
      aria-labelledby="products-heading"
    >
      <div className="container-portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <ScrambleHeading
              as="h2"
              text="Products"
              id="products-heading"
              className="portfolio-subheading mb-4"
              duration={650}
            />
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="portfolio-body max-w-2xl mx-auto">
              Templates and digital products available for purchase.
            </p>
          </div>
          <div
            ref={gridRef}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="product-card portfolio-card group h-full flex flex-col relative"
              >
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
                  {product.price}
                </div>
                <div className="space-y-4 flex-1 flex flex-col pt-2">
                  <div>
                    <span className="portfolio-label text-primary">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300 mb-2">
                      {product.title}
                    </h3>
                    <p className="portfolio-body">{product.description}</p>
                  </div>
                  <div
                    className="flex flex-wrap gap-2"
                    role="list"
                    aria-label="Technologies used"
                  >
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                        role="listitem"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4 mt-auto">
                    <a
                      href={product.links.buy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                      aria-label={`Buy ${product.title} template`}
                    >
                      <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                      <span>Buy Template</span>
                    </a>
                    <a
                      href={product.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-muted text-muted-foreground rounded-lg text-sm font-medium transition-all duration-300 hover:bg-muted/80 hover:text-foreground hover:scale-[1.02]"
                      aria-label={`View live demo of ${product.title}`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
