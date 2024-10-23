import Link from "next/link";
import Map from "@/components/map/latency";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export default function LatencyPage() {
  return (
    <ContentLayout title="Latency">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>latency</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="bg-[rgb(212,218,220)] py-24 sm:py-3">
        {" "}
        <div className="m-4 grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-8  gap-4">
          <div className="sm:col-span-9 sm:row-span-4 min-h-[100px] rounded-lg">
            <Map center={[-6.155158139563846, 105.50465998162689]} zoom={7} />
          </div>
          <div className="sm:col-span-3 min-h-[100px] rounded-lg bg-yellow-500"></div>
          <div className="sm:col-span-3 min-h-[100px] rounded-lg bg-orange-500"></div>
          <div className="sm:col-span-3 min-h-[100px] rounded-lg bg-orange-500"></div>
          <div className="sm:col-span-3 sm:row-span-3 min-h-[100px] rounded-lg bg-teal-500"></div>
          <div className="sm:col-span-3 sm:row-span-2 min-h-[100px] rounded-lg bg-yellow-500"></div>
          <div className="sm:col-span-6 sm:row-span-4 min-h-[100px] rounded-lg bg-teal-500"></div>
          <div className="sm:col-span-3 sm:row-span-2 min-h-[100px] rounded-lg bg-teal-500"></div>
          <div className="sm:col-span-3 sm:row-span-2 min-h-[100px] rounded-lg bg-yellow-500"></div>
        </div>
      </div>
    </ContentLayout>
  );
}
