
window.watsonAssistantChatOptions = {
    integrationID: "1cedf7d3-a46b-44cc-b3d9-57ccd88eb826", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "9e4588e4-a91b-493c-bf06-ec3008283804", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
    });
  