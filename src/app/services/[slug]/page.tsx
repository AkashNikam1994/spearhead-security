import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import { pageMetadata, serviceSchema } from "@/lib/seo";
import { activeServices, getService } from "@/config/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return activeServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const service = getService(params.slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} Services`,
    description: service.summary,
    path: `/services/${service.slug}`,
    ogImage: service.image,
  });
}

export default async function ServicePage({ params }: { params: Params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${service.title} | Professional Security Solutions`}
        title={service.title}
        description={service.summary}
        image={service.image}
        compact
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({
            title: service.title,
            description: service.summary,
            slug: service.slug,
          })),
        }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
