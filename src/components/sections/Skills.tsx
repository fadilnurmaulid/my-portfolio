import SectionTitle from "../ui/SectionTitle"
import { skills } from "@/data/skills"

export default function Skills(){

return(

<section className="py-24 container mx-auto px-6">

<SectionTitle
title="Skills & Research Interests"
subtitle="Technical expertise"
/>

<div className="space-y-10 max-w-4xl mx-auto">

{Object.entries(skills).map(([category, list]) => (

<div key={category}>

<h3 className="text-lg font-semibold mb-4 capitalize text-indigo-400">
{category.replace("_"," ")}
</h3>

<div className="flex flex-wrap gap-4">

{list.map((skill,i)=>(
<div
key={i}
className="glass px-5 py-2 rounded-lg hover:bg-indigo-500/20 transition"
>
{skill}
</div>
))}

</div>

</div>

))}

</div>

</section>

)

}