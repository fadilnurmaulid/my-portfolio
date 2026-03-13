import Image from "next/image"
import SectionTitle from "../ui/SectionTitle"
import { projects } from "@/data/projects"

export default function Projects(){

return(

<section className="py-24 container mx-auto px-6">

<SectionTitle
title="Projects"
subtitle="Research and engineering work"
/>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{projects.map((p,i)=>(

<div
key={i}
className="glass rounded-xl overflow-hidden hover:scale-[1.03] transition"
>

<Image
src={p.image}
alt={p.title}
width={600}
height={400}
/>

<div className="p-5 space-y-3">

<h3 className="text-xl font-semibold">
{p.title}
</h3>

<p className="text-gray-300 text-sm leading-relaxed">
{p.description}
</p>

<div className="flex flex-wrap gap-2 pt-2">

{p.tech.map((t,j)=>(
<span
key={j}
className="text-xs px-3 py-1 bg-indigo-500/20 rounded-md text-indigo-300"
>
{t}
</span>
))}

</div>

</div>

</div>

))}

</div>

</section>

)

}