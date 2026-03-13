import Image from "next/image"
import SectionTitle from "../ui/SectionTitle"
import { certifications } from "@/data/certifications"

export default function Certifications(){

return(

<section className="py-24 container mx-auto px-6">

<SectionTitle
title="Certifications"
subtitle="Professional certifications"
/>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{certifications.map((cert,i)=>(
<div key={i} className="glass rounded-xl overflow-hidden">

<Image
src={cert.image}
alt={cert.title}
width={600}
height={400}
/>

<div className="p-4 text-center">

<h3 className="font-semibold">
{cert.title}
</h3>

<p className="text-gray-400 text-sm">
{cert.organization}
</p>

</div>

</div>
))}

</div>

</section>

)

}