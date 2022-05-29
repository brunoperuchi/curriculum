const textsAbout = [
  {
    title: 'Me',
    text: `I have a degree in Information and Communication Technologies,
    I attended this course at Federal University of Santa Catarina.
    I have been passionate about technology since my first contact,
    and, I love the feeling of being able to solve any problem with,
    my knowlege and some internet searches 😅.`
  },
  {
    title: 'Other Skills',
    text: `I have some skills as a designer, mainly with CorelDraw,
    As I have been working in IT, in a company with a large workflow,
    I know how to solve problems with computers and other technologies.`
  }
]

export function About() {
  return(
    <section>
      <h1 className='text-center text-zinc-100 md:text-2xl font-bold mb-4'>
        About
      </h1>
      <div className='m-auto w-[90%] grid gap-3 md:gap-6 sm:grid-cols-2 justify-items-center'>
        { textsAbout.map((info) => (
          <div
            key={info.title}
            className="bg-zinc-800 w-full p-2 md:p-5 flex flex-col items-center transition-all rounded-md border-2 border-purple-800 shadow-md"
          >
            <h2 className='text-zinc-100 text-sm md:text-lg font-bold mb-2 border-b-2 border-purple-800'>
              {info.title}
            </h2>
            <p className="text-zinc-100 text-xs md:text-sm text-justify">
              {info.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
