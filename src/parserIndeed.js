class ParserIndeed extends ParserBase {
    scrapeJob(container) {
        console.log('Indeed-specific scrapeJob');

        const job = {};

        const titleElement = container.querySelector('h2.jobTitle');
        if (titleElement === null) {
            return null;
        }

        const jobLink = titleElement.querySelector('a');
        if (jobLink === null) {
            return null;
        }

        const id = jobLink.getAttribute('data-jk');
        if (id === null) {
            return null;
        }

        job.url = jobLink.href;
        job.id = id.trim();
        job.title = titleElement.innerText.trim();

        const employerElement = container.querySelector('span[data-testid="company-name"]');
        job.employer = employerElement ? employerElement.innerText.trim() : 'N/A';

        const locationElement = container.querySelector('span[data-testid="text-location"]');
        job.location = locationElement ? locationElement.innerText.trim() : 'N/A';

        return job;
    }

    // Define the target node for observation which is specific to Totaljobs website
    getListNode() {
        return document.querySelector('#mosaic-provider-jobcards');
    }

    getJobNodes() {
        return document.querySelectorAll('#mosaic-provider-jobcards > ul > li');
    }
}