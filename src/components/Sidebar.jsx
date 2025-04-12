// src/components/Sidebar.jsx
import { X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const conversations = [
    { id: 1, name: "Project Ideas" },
    { id: 2, name: "React Interview Prep " },
    { id: 3, name: "Resume Feedback" },
    { id: 4, name: "API Integration Help" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#121212] text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b border-[#6F4E37]">
        <h2 className="text-2xl font-bold text-[#6F4E37]">Conversations</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5 text-white" />
        </button>
      </div>
      <ul className="p-4 space-y-2">
        {conversations.map((conv) => (
          <li
            key={conv.id}
            className="hover:bg-[#1c1c1c] px-3 py-2 rounded cursor-pointer text-sm md:text-base border border-transparent hover:border-[#6F4E37]"
          >
            {conv.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
