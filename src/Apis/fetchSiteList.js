let objMaker = (name, link) => {
    return {
        name: name,
        link: link
    }
}

let fetchSiteList = async () => {
    let fetchList = [];
    const data = await fetch('https://api.github.com/repos/moienheydari/moienheydari.github.io/contents')
    const jsonData = await data.json();
    jsonData.map((el) => {
        fetchList.push(objMaker(el.name, `https://moienheydari.github.io/${el.name}/index.html`))
    })
    return fetchList;
}

export default fetchSiteList;