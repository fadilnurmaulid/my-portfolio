type Props = {
  title: string
  subtitle: string
}

export default function SectionTitle({title,subtitle}:Props){

return(

<div className="mb-12 text-center">

<h2 className="text-4xl font-bold gradient-text">
{title}
</h2>

<div className="w-24 h-1 bg-indigo-500 mx-auto mt-3 mb-3"/>

<p className="text-gray-400">
{subtitle}
</p>

</div>

)

}