import Link from 'next/link'
import Image from 'next/image'

const LINK_TEXT = 'See All'

const CategoryCard = ({ imageSrc, name }) => {
  return (
    <div className="group hover:text-link relative transition-colors">
      <Image className="object-cover border group-hover:scale-125 transition-transform" src={imageSrc} height={700} width={1300} alt="" />

      <h3>{name}</h3>
      <p aria-hidden="true" className="uppercase">{LINK_TEXT}</p>

      <Link href={`/category/${name.toLowerCase()}`}>
        <a className="absolute h-full left-0 top-0 w-full">
          <div className="sr-only">{LINK_TEXT}</div>
        </a>
      </Link>
    </div>
  )
}

export default CategoryCard