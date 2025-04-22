console.log("✅ WebClip background script loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("📩 Received message in background:", request);

  if (request.action === 'saveToNotion') {
    fetch('https://9f5a1bcf-beac-45bd-8ee6-b9de7e452ec7-00-1yb3sfo418sjv.worf.replit.dev/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request.data)
    })
    .then(response => response.json())
    .then(data => console.log('✅ Saved via proxy:', data))
    .catch(error => console.error('❌ Proxy error:', error));
  }
});
