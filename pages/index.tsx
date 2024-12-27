import Image from 'next/image';

export default function Home() {
  return (
    <div className="text-center">
      <Image
        src="/profile.jpg"
        alt="Profile"
        width={128}
        height={128}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-pink text-4xl font-bold mb-2">Liam Toye</h1>
      <p className="text-gray mb-6">Software Developer</p>
      <div className="space-x-4 mb-6">
        <a
          href="https://github.com/lctoye"
          className="text-green hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/liamtoye/"
          className="text-green hover:underline"
        >
          LinkedIn
        </a>
      </div>

      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <ul className="space-y-4">
        <li className="border p-4 rounded shadow-sm">
          <h3 className="text-lg text-pink font-semibold">
            Seneca Polytechnic
          </h3>
          <p className="text-white">Computer Programming and Analysis</p>
          <p className="text-sm text-gray-500">
            GPA 4.0 - President&apos;s Honours
          </p>
          <p className="text-gray-400">2021 - 2024</p>
        </li>
      </ul>
    </div>
  );
}
