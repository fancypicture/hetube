export const home = (req, res) => res.render("Home", {pageTitle:"Home"});

export const search = (req, res) => {
     const {
         query:{term:searchingBy}
    } = req;
    res.render("Search", {pageTitle:"Search", searchingBy:searchingBy});

        
    /* 위와 같은 의미 코드임
    const searchingBy = req.query.term;
    res.render("serach", {pageTitle:"Search", searchingBy:searchingBy})
    */
};



export const upload = (req, res) => res.render("Upload", {pageTitle:"Upload"});

export const videos = (req, res) => res.render("videos", {pageTitle:"videos"});

export const videoDetail = (req, res) => res.render("Video Detail", {pageTitle:"VideoDetail"});

export const editVideo = (req, res) => res.render("Edit Video", {pageTitle:"Edit Video"});

export const deleteVideo = (req, res) => res.render("Delete Video", {pageTitle:"Delete Video"});
