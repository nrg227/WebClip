document.addEventListener('DOMContentLoaded', () => {
    const docNameInput = document.getElementById('docName');
    const urlInput = document.getElementById('url');
    const categorySelect = document.getElementById('category');
    const companySelect = document.getElementById('company');
    const statusSelect = document.getElementById('status');
    const saveButton = document.getElementById('saveButton');
  
    // Get the current tab's URL and title
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      docNameInput.value = tab.title;
      urlInput.value = tab.url;
    });
  
    saveButton.addEventListener('click', () => {
      const data = {
        docName: docNameInput.value,
        url: urlInput.value,
        category: categorySelect.value,
        company: companySelect.value,
        status: statusSelect.value
      };
  
      // Send data to background script
      chrome.runtime.sendMessage({ action: 'saveToNotion', data });
    });
  });
  