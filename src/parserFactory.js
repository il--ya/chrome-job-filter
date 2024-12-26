function createParser(site) {
    switch (site) {
        case SITES.LINKEDIN: return new ParserLinkedin(site);
        case SITES.TOTALJOBS: return new ParserTotaljobs(site);
        case SITES.INDEED: return new ParserIndeed(site);
        default: throw new Error(`Unsupported site: ${siteName}`);
    }
}
