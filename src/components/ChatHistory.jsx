import React from "react";

function DownloadChatHistory() {
  const handleDownload = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/download-chat-history"
      );
      if (!response.ok) throw new Error("File not found");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "chat_history.pkl";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the chat history:", error);
      alert(
        "Error downloading the chat history. Check the console for details."
      );
    }
  };

  return (
    <div>
      <h1>JusticePal - Download Chat History</h1>
      <button onClick={handleDownload}>Download Chat History (.pkl)</button>
    </div>
  );
}

export default DownloadChatHistory;
