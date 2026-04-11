import { startTransition, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import {
  blogPosts,
  blogPostsPerPage,
  blogTagStyles,
} from "../data/blogContent";

function BlogTags({ tags }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className={`rounded-full px-3 py-1 text-xs font-medium ${blogTagStyles[index % blogTagStyles.length]}`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function BlogMeta({ date }) {
  return <p className="text-sm font-medium text-[#d4a514]">{date}</p>;
}

function BlogTitle({ children, className = "" }) {
  return (
    <h3
      className={`text-[2rem] font-medium leading-[1.18] tracking-[-0.04em] text-white ${className}`}
    >
      {children}
    </h3>
  );
}

function BlogCard({ post, compact = false, horizontal = false }) {
  const imageClassName = horizontal
    ? "h-[220px] w-full object-cover transition duration-500 hover:scale-[1.03] sm:h-[205px]"
    : compact
      ? "h-[240px] w-full object-cover transition duration-500 hover:scale-[1.03]"
      : "h-[250px] w-full object-cover transition duration-500 group-hover:scale-[1.03] sm:h-[340px]";

  const wrapperClassName = horizontal
    ? "grid gap-5 sm:grid-cols-[0.88fr_1fr] sm:items-start"
    : "group";

  return (
    <article className={wrapperClassName}>
      <Link to={`/blogs/${post.slug}`} className="block overflow-hidden bg-[#1d1d1d]">
        <img src={post.image} alt={post.title} className={imageClassName} />
      </Link>

      <div className={horizontal ? "pt-1" : "pt-6"}>
        <BlogMeta date={post.date} />
        <div className="mt-3 flex items-start justify-between gap-4">
          <Link to={`/blogs/${post.slug}`} className="block">
            {compact || horizontal ? (
              <h3 className="text-[1.9rem] font-medium leading-[1.2] tracking-[-0.04em] text-white line-clamp-1">
                {post.title}
              </h3>
            ) : (
              <BlogTitle className="max-w-[34rem]">{post.title}</BlogTitle>
            )}
          </Link>
          <Link to={`/blogs/${post.slug}`} aria-label={post.title}>
            <ArrowUpRight className="mt-2 h-5 w-5 shrink-0 text-white sm:h-6 sm:w-6" />
          </Link>
        </div>
        <p className={`mt-3 ${compact ? "text-lg" : "text-lg"} leading-8 text-white/68 line-clamp-3`}>
          {post.description}
        </p>
        <BlogTags tags={post.tags} />
      </div>
    </article>
  );
}

export default function Blogs() {
  const [heroPost, sidePostOne, sidePostTwo, spotlightPost, ...allPosts] = blogPosts;
  const totalPages = Math.max(1, Math.ceil(allPosts.length / blogPostsPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const paginatedPosts = allPosts.slice(
    (currentPage - 1) * blogPostsPerPage,
    currentPage * blogPostsPerPage,
  );

  const changePage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    startTransition(() => setCurrentPage(page));
  };

  return (
    <div className="bg-[#111111] text-white">
      <Seo
        title="Blog"
        description="Read articles from Alondra on UX, design systems, APIs, collaboration, product thinking, and digital delivery."
        path="/blogs"
        keywords="Alondra blog, UX articles, design systems, product thinking, API strategy"
      />
      <section className="border-y border-white/10 bg-[#424242] px-6 py-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            THE BLOG
          </h1>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="reveal text-[2rem] font-medium tracking-[-0.04em] text-white" data-reveal>
            Recent blog posts
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="reveal" data-reveal data-delay="1">
              <BlogCard post={heroPost} />
            </div>

            <div className="space-y-6">
              {[sidePostOne, sidePostTwo].map((post, index) => (
                <div key={post.id} className="reveal" data-reveal data-delay={index + 2}>
                  <BlogCard post={post} horizontal />
                </div>
              ))}
            </div>
          </div>

          <article className="reveal mt-12 bg-[#1d1d1d] px-6 py-6 sm:px-8 sm:py-8" data-reveal>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <Link to={`/blogs/${spotlightPost.slug}`} className="block overflow-hidden bg-[#111111]">
                <img
                  src={spotlightPost.image}
                  alt={spotlightPost.title}
                  className="h-[230px] w-full object-cover sm:h-[300px]"
                />
              </Link>

              <div>
                <BlogMeta date={spotlightPost.date} />
                <div className="mt-3 flex items-start justify-between gap-4">
                  <Link to={`/blogs/${spotlightPost.slug}`} className="block">
                    <BlogTitle className="max-w-[32rem]">{spotlightPost.title}</BlogTitle>
                  </Link>
                  <Link to={`/blogs/${spotlightPost.slug}`} aria-label={spotlightPost.title}>
                    <ArrowUpRight className="mt-2 h-6 w-6 shrink-0 text-white" />
                  </Link>
                </div>
                <p className="mt-4 text-lg leading-8 text-white/68">
                  {spotlightPost.description}
                </p>
                <BlogTags tags={spotlightPost.tags} />
              </div>
            </div>
          </article>

          <section className="reveal mt-16 bg-[#1b1b1b] px-6 py-8 sm:px-8 sm:py-10 lg:px-12" data-reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-[2rem] font-medium tracking-[-0.04em] text-white">
                All blog posts
              </h2>
              <p className="text-sm text-white/58">
                Page {currentPage} of {totalPages}
              </p>
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {paginatedPosts.map((post, index) => (
                <div key={post.id} className="reveal" data-reveal data-delay={(index % 4) + 1}>
                  <BlogCard post={post} compact />
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/16 pt-6">
              <div className="flex flex-col gap-5 text-white/86 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={() => changePage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="inline-flex items-center gap-2 text-base transition hover:text-white disabled:cursor-not-allowed disabled:text-white/30"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => changePage(page)}
                      className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm transition ${
                        page === currentPage
                          ? "bg-white text-black"
                          : "text-white/72 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => changePage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="inline-flex items-center gap-2 text-base transition hover:text-white disabled:cursor-not-allowed disabled:text-white/30"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
