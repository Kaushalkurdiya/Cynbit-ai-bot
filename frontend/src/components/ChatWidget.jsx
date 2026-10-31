import { useEffect, useRef, useState } from "react";

const GREETING = { role: "assistant", content: "Hi! Ask me anything about Cynbit or BitElevate." };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [messages, loading, open]);

  async function send(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // drop the greeting: most LLM APIs require the first message to be from the user
        body: JSON.stringify({ messages: next.slice(1) }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        { role: "assistant", content: "Sorry, the assistant isn't available right now." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open && (
        <div className="w-80 sm:w-96 h-[28rem] mb-3 bg-white border border-slate-300 rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-brand text-white px-4 py-3 flex items-center justify-between">
            <span className="font-semibold">Cynbit assistant</span>
            <button onClick={() => setOpen(false)} className="text-sm underline">Close</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <p className={
                  "max-w-[80%] px-3 py-2 rounded-lg text-sm whitespace-pre-wrap " +
                  (m.role === "user" ? "bg-brand text-white" : "bg-white border border-slate-200 text-slate-800")
                }>
                  {m.content}
                </p>
              </div>
            ))}
            {loading && <p className="text-xs text-slate-500">Typing...</p>}
            <div ref={bottomRef} />
          </div>

          <form onSubmit={send} className="flex border-t border-slate-200 bg-white">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question"
              className="flex-1 px-3 py-3 text-sm outline-none"
            />
            <button type="submit" disabled={loading} className="px-4 text-sm font-medium text-brand disabled:text-slate-400">
              Send
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="ml-auto block bg-brand hover:bg-brand-dark text-white px-5 py-3 rounded-full shadow-lg text-sm font-medium"
      >
        {open ? "Hide chat" : "Chat with us"}
      </button>
    </div>
  );
}


