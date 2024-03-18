let objMaker = (name, link) => {
    return {
        name: name, 
        link: link
    }
}

let fetchSiteList = () => {
    let fetchList = [];
    fetchList.push(objMaker('Sign Up Form', 'https://moienheydari.github.io/sign-up-form/index.html'))
    return fetchList;
}

let myLsit = fetchSiteList();
export default myLsit;