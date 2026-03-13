import SectionTitle from "../ui/SectionTitle"
import { profile } from "@/data/profile"

export default function Contact(){

return(

<section className="py-24 container mx-auto px-6 text-center">

<SectionTitle
title="Contact"
subtitle="Let's collaborate"
/>

<p className="text-gray-300 mb-6">
{profile.email}
</p>

<div className="flex justify-center gap-6">

<a
href={profile.github}
className="glass px-6 py-2 rounded-lg hover:scale-105 transition"
>
GitHub
</a>

<a
href={profile.linkedin}
className="glass px-6 py-2 rounded-lg hover:scale-105 transition"
>
LinkedIn
</a>

</div>

</section>

)

}