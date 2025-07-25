import React from "react";

const resources = [
  {
    type: "article",
    title: "How to Prevent Pain and Long‑Term Damage From Ankylosing Spondylitis",
    url: "https://www.verywellhealth.com/ankylosing-spondylitis-prevention-6827129",
  },
  {
    type: "article",
    title: "What Is Ankylosing Spondylitis (AS)?",
    url: "https://www.health.com/ankylosing-spondylitis-overview-7099547",
  },
  {
    type: "article",
    title: "What Are Your Treatment Options for Ankylosing Spondylitis?",
    url: "https://www.health.com/ankylosing-spondylitis-treatment-7098969",
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
      {/* Replace the iframe with a link/button */}
      <div className="w-full max-w-2xl p-8 border rounded-xl shadow-md text-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Chat with SpondySupport AI</h2>
      <p className="mb-6 text-gray-600">
      Get personalized advice and answers to your questions about Ankylosing Spondylitis.
      </p>
      <a
      href="https://chatgpt.com/g/g-687d074ea6ac8191a3e15cc7c3465fb3-spondysupport"
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer"
      className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
      title="SpondySupport Chatbot"
    >
      Open Chat
    </a>
  </div>
        <section id="resources" className="mt-16 w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((res, i) => (
              <div key={i} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
                {res.type === "video" ? (
                  <div className="aspect-video">
                    <iframe
                      src={res.url}
                      title={res.title}
                      className="w-full h-full rounded"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {res.title}
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
