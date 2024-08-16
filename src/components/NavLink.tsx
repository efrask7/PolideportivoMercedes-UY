interface INavLinkProps {
  name: string
  url: string
  isActive?: boolean
}

export default function NavLink({ name, url, isActive}: INavLinkProps) {
  return (
    <a href={url} className={`${isActive ? 'after:w-full' : 'after:w-0'} relative after:absolute after:block after:transition-all after:mt-2 after:h-px after:bg-cyan-500`}>
      {name}
    </a>
  )
}
