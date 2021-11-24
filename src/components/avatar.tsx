import Image from 'next/image'

export default function Avatar({ name, picture }: { name?: any[], picture?: any } = {}) {
  return (
    <section className="avatar">
      <div className="inner">
        <Image
          src={picture.url}
          layout="fill"
          className="rounded-full"
          alt={name[0].text}
        />
      </div>
      <div className="name">{name}</div>
    </section>
  )
}

