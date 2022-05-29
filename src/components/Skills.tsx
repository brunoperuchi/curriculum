import htmlImageUrl from '../assets/html.svg'
import cssImageUrl from '../assets/css.svg'
import javascriptImageUrl from '../assets/javascript.svg'
import rubyImageUrl from '../assets/ruby.svg'
import rubyOnRailsImageUrl from '../assets/ruby-on-rails.svg'
import reactJsImageUrl from '../assets/react-js.svg'
import tailwindCssImageUrl from '../assets/tailwind-css.svg'

const techSkills = [
  {
    name: 'HTML',
    src: htmlImageUrl,
    alt: 'HTML logo',
  },
  {
    name: 'CSS',
    src: cssImageUrl,
    alt: 'CSS logo',
  },
  {
    name: 'Javascript',
    src: javascriptImageUrl,
    alt: 'Javascript logo',
  },
  {
    name: 'Ruby',
    src: rubyImageUrl,
    alt: 'Ruby logo',
  },
  {
    name: 'Ruby on Rails',
    src: rubyOnRailsImageUrl,
    alt: 'Ruby on rails logo',
  },
  {
    name: 'React.js',
    src: reactJsImageUrl,
    alt: 'React.js logo',
  },
  {
    name: 'Tailwind CSS',
    src: tailwindCssImageUrl,
    alt: 'Tailwind CSS logo',
  },
]

export function Skills() {
  return (
    <section
      id="skills"
      className="pt-12 md:pt-20"
    >
      <h1 className='text-center text-zinc-100 md:text-2xl font-bold mt-2 mb-4'>
        Tech Skills
      </h1>
      <div className='m-auto w-[90%] grid gap-3 md:gap-6 grid-cols-3 justify-items-center'>
        { techSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-zinc-800 w-full p-2 md:p-5 grid gap-2 md:gap-4 grid-row-2 justify-items-center transition-all rounded-md border-2 border-purple-800 shadow-md"
          >
            <img
              src={skill.src}
              alt={skill.alt}
              className="h-10 md:h-28 transition-all"
            />
            <p className="text-zinc-100 font-semibold text-xs md:text-lg text-center border-t-2 border-purple-800">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
