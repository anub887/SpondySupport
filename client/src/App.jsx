import React from "react";

const resources = [
  {
    type: "article",
    title: "How to Prevent Pain and Long‑Term Damage From Ankylosing Spondylitis",
    url: "https://www.verywellhealth.com/ankylosing-spondylitis-prevention-6827129",
    description: "Learn about the roles of posture, exercise, and early treatment in preventing long-term damage from AS.",
    image: "https://www.verywellhealth.com/thmb/1fPvdK_bROgJzQVb7LQ7d-PNhtw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1419080980-f4b19e05c81240de8d4c562cca9d3e19.jpg",
  },
  {
    type: "article",
    title: "What Is Ankylosing Spondylitis (AS)?",
    url: "https://www.health.com/ankylosing-spondylitis-overview-7099547",
    description: "An overview of AS, a type of inflammatory arthritis that primarily affects the spine, covering its symptoms, causes, and diagnosis.",
    image: "https://www.health.com/thmb/sIn4pZmxiKCA8gePALLev-w2VoI=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-ankylosing-spondylitis-overview-7099547-desktop-2000x420-final-ff6aa58085264f4e8a44479312e16d76.jpg",
  },
  {
    type: "article",
    title: "What Are Your Treatment Options for Ankylosing Spondylitis?",
    url: "https://www.health.com/ankylosing-spondylitis-treatment-7098969",
    description: "A guide to the various treatment approaches for AS, including medications, physical therapy, and lifestyle adjustments to manage symptoms.",
    image: "https://www.health.com/thmb/Y1shSvlhll9jy2yrtPaD4G4oMjk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ankylosingtreatment-GettyImages-1135761958-a2eb9162b04c40faae61442ee778a9f1.jpg",
  },
  {
    type: "video",
    title: "Morning Mobility Routine for AS",
    url: "https://www.youtube.com/embed/Dso5p9RoyWM?si=jU8zIbB_e9IS6J2K",
  },
  {
    type: "video",
    title: "Beginner Stretch for Ankylosing Spondylitis",
    url: "https://www.youtube.com/embed/c0iOhl1Hqdo?si=2rRx30-gSKbTtzOK",
  },
  {
    type: "video",
    title: "Exercise Tips for AS Patients",
    url: "https://www.youtube.com/embed/5oBw3frF9m0?si=JEv90IeKzq8CeyLT",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="flex justify-between items-center p-4 border-b shadow-sm">
        <h1 className="text-2xl font-bold">SpondySupport</h1>
        <a href="#resources" className="text-blue-600 hover:underline font-medium">
          Resources
        </a>
      </header>

      <main className="flex flex-col items-center mt-20 px-4">
        <div className="w-full max-w-2xl p-8 rounded-2xl shadow-lg text-center bg-gradient-to-br from-gray-50 to-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="sr-only">Typing...</span>
            <div className="h-2.5 w-2.5 bg-gray-500 rounded-full animate-bounce-slow [animation-delay:-0.3s]"></div>
            <div className="h-2.5 w-2.5 bg-gray-500 rounded-full animate-bounce-slow [animation-delay:-0.15s]"></div>
            <div className="h-2.5 w-2.5 bg-gray-500 rounded-full animate-bounce-slow"></div>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Chat with SpondySupport AI</h2>
          <p className="mb-6 text-gray-600">
            Get instant, specialized advice for Ankylosing Spondylitis.
          </p>
          <a
            href="https://chatgpt.com/g/g-687d074ea6ac8191a3e15cc7c3465fb3-spondysupport"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-3 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            title="SpondySupport Chatbot"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            Open Chat
          </a>
        </div>

        <section id="resources" className="mt-16 w-full max-w-4xl mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((res, i) => (
              <div key={i} className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border overflow-hidden">
                {res.type === "video" ? (
                  <div className="aspect-video">
                    <iframe
                      src={res.url}
                      title={res.title}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <a href={res.url} target="_blank" rel="noopener noreferrer" className="block h-full bg-white hover:bg-gray-50 transition-colors duration-300">
                    <img src={res.image} alt={res.title} className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900">{res.title}</h3>
                      <p className="text-gray-700 text-sm mt-2">{res.description}</p>
                    </div>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
