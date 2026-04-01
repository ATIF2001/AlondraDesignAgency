import { ArrowRight } from "lucide-react";
import { CartoonButton } from "./ui/cartoon-button";

export default function BlogCardsSection({ posts }) {
  return (
    <section className="bg-black px-6 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <div
          className="reveal mb-12 flex flex-col gap-6 text-left sm:flex-row sm:items-center sm:justify-between"
          data-reveal
        >
          <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Latest From the <span className="text-[#d4a514]">Blog</span>
          </h2>
          <CartoonButton
            label="Our Blog"
            color="bg-[#d4a514]"
            textClassName="text-black"
            borderClassName="border-[#111]"
            hoverShadow="#8a6700"
            className="gold-pulse hover-lift w-fit"
            buttonClassName="px-8 text-sm font-semibold uppercase tracking-[0.14em]"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={`${post.title}-${index}`}
              data-reveal
              data-delay={index + 1}
              className="reveal hover-lift soft-panel flex h-full flex-col overflow-hidden bg-[#1d1d1d] shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="aspect-[4/2.35] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col px-8 py-7 text-left">
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-white/48">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#ff7a1a]" />
                  <span>{post.date}</span>
                </div>

                <h3
                  className="mt-6 max-w-[18rem] text-3xl font-semibold leading-[1.22] text-white"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                    overflow: "hidden",
                  }}
                >
                  {post.title}
                </h3>

                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-white/12" />

                  <div className="mt-7">
                    <CartoonButton
                      label="Read More"
                      color="bg-[#d4a514]"
                      textClassName="text-black"
                      borderClassName="border-[#111]"
                      hoverShadow="#8a6700"
                      trailingIcon={ArrowRight}
                      className="w-fit"
                      buttonClassName="px-5 text-sm font-semibold uppercase tracking-[0.16em]"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
