import { ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { blogPosts, blogTagStyles } from "../data/blogContent";

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

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== slug).slice(0, 6);

  return (
    <div className="bg-[#111111] text-white">
      <Seo
        title={post.detailTitle}
        description={post.description}
        path={`/blogs/${post.slug}`}
        type="article"
        keywords={post.tags.join(", ")}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.detailTitle,
          description: post.description,
          datePublished: post.date,
          image: post.image,
          author: {
            "@type": "Organization",
            name: "Alondra",
          },
          publisher: {
            "@type": "Organization",
            name: "Alondra",
          },
        }}
      />
      <section className="border-y border-white/10 bg-[#424242] px-6 py-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            BLOG Details
          </h1>
        </div>
      </section>

      <section className="px-6 py-8 sm:px-10 lg:px-16 lg:py-14 xl:px-20">
        <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:items-stretch lg:gap-12">
          <aside className="hide-scrollbar lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] lg:overflow-y-auto lg:pr-3">
            <div className="space-y-8">
            {relatedPosts.map((item, index) => (
              <article key={item.slug} className="reveal" data-reveal data-delay={(index % 4) + 1}>
                <Link to={`/blogs/${item.slug}`} className="block overflow-hidden bg-[#1d1d1d]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[210px] w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </Link>

                <div className="pt-4">
                  <p className="text-xs font-medium text-[#d4a514]">{item.date}</p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <Link to={`/blogs/${item.slug}`} className="block">
                      <h3 className="text-[1.9rem] font-medium leading-[1.18] tracking-[-0.04em] text-white">
                        {item.title}
                      </h3>
                    </Link>
                    <Link to={`/blogs/${item.slug}`} aria-label={item.title}>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white" />
                    </Link>
                  </div>
                  <p className="mt-3 text-base leading-7 text-white/62">{item.description}</p>
                  <BlogTags tags={item.tags} />
                </div>
              </article>
            ))}
            </div>
          </aside>

          <article className="mt-12 lg:mt-0">
            <p className="reveal text-xs font-medium text-[#d4a514]" data-reveal>
              {post.date}
            </p>
            <h2
              className="reveal mt-3 max-w-3xl text-[2.5rem] font-medium leading-[1.1] tracking-[-0.05em] text-white sm:text-[3rem]"
              data-reveal
              data-delay="1"
            >
              {post.detailTitle}
            </h2>

            <div className="reveal mt-6 overflow-hidden bg-[#1d1d1d]" data-reveal data-delay="2">
              <img
                src={post.image}
                alt={post.title}
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[420px]"
              />
            </div>

            <div className="reveal mt-6 space-y-5 text-[1.02rem] leading-8 text-white/70" data-reveal data-delay="3">
              <p>{post.intro}</p>

              {post.sections.map((section) => (
                <section key={section.heading} className="space-y-3">
                  <h3 className="text-[1.25rem] font-semibold text-white">{section.heading}</h3>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.heading}-${index}`}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <p>{post.closing}</p>
            </div>

            <div className="reveal" data-reveal data-delay="4">
              <BlogTags tags={post.tags} />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
