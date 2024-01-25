const Session = [];
const StoreSession = async () => {};

const RestoreSession = async () => {
    let PreviousSession = document.cookie
};

const OnWindowLoad = async () => { await restoreSession(); };

if (document.readyState === "complete" || document.readyState === "interactive"){ OnWindowLoad() };
window.addEventListener("load", OnWindowLoad);