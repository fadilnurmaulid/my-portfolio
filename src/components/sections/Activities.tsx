import SectionTitle from "../ui/SectionTitle"
import { activities } from "@/data/activities"

export default function Activities(){

return(

<section className="py-24 container mx-auto px-6">

<SectionTitle
title="Activities"
subtitle="Organizations and professional experience"
/>

<div className="space-y-8 max-w-3xl mx-auto">

{activities.map((a,i)=>(

<div key={i} className="glass p-6 rounded-xl">

<h3 className="text-xl font-semibold">
{a.role}
</h3>

<p className="text-indigo-400">
{a.organization}
</p>

<p className="text-gray-400 text-sm mb-3">
{a.location} • {a.date}
</p>

<p className="text-gray-300 leading-relaxed">
{a.description}
</p>

</div>

))}

</div>

</section>

)

}