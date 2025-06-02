const hits = { total: 0 };

function countMiddleware(req, res, next) {
    const url = req.url;
    hits.total++;
    hits[url] = (hits[url]||0) + 1;
    next();
}

export default {countMiddleware, hits};