export function About() {
  return(
    <section className="w-full">
      <h1 className='text-center text-zinc-100 md:text-2xl font-bold mt-2'>
        About
      </h1>
      <div className='flex flex-col gap-1 md:gap-4 p-2 md:p-4 items-center justify-center'>
        <p className="text-zinc-100 text-center">
          I have a degree in Information and Communication Technologies,
          I attended this course at Federal University of Santa Catarina.
          I have been passionate about technology since my first contact,
          and, I love the feeling of being able to solve any problem with,
          my knowlege and some internet searches 😅.
        </p>
        <h2 className='text-center text-zinc-100 md:text-xl font-bold mt-2'>
          Other Skills
        </h2>
        <p className="text-zinc-100 text-center">
        I have some skills as a designer, mainly with CorelDraw,
        As I have been working in IT, in a company with a large workflow,
        I know how to solve problems with computers and other technologies.
        </p>
      </div>
    </section>
  );
}
