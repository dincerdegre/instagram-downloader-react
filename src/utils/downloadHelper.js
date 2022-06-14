export const urlChecker = (url) => {
    const reg = new RegExp("(https:\/\/www\.instagram\.com\/(?:p|reel|tv)\/[a-zA-Z0-9_-]{11}\/)");
    const match = url.match(reg);
    if(match){
        return match[0];
    } else {
        return null;
    }
};