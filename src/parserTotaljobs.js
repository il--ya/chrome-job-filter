class ParserTotaljobs extends ParserBase {
    scrapeJob(container) {
        console.log('Totaljobs-specific scrapeJob');

        // Extract the job ID using regex
        const idMatch = container.id.match(/^job-item-(\d+)$/);
        if (idMatch === null) {
            return null;
        }

        const job = {};
        job.id = idMatch[1];

        const jobLink = container.querySelector('a[data-at="job-item-title"]'); // Find the <a> element
        job.url = jobLink ? jobLink.href : 'N/A'; // Extract href
        job.title = jobLink ? jobLink.innerText.trim() : 'N/A'; // Extract job title

        const employerElement = container.querySelector('span[data-at="job-item-company-name"]');
        job.employer = employerElement ? employerElement.innerText.trim() : 'N/A'; // Extract employer name

        const locationElement = container.querySelector('span[data-at="job-item-location"]'); // Assuming the location is still in this element
        job.location = locationElement ? locationElement.innerText.trim() : 'N/A'; // Extract job location

        return job;
    }

    // Define the target node for observation which is specific to Totaljobs website
    getListNode() {
        return document.querySelector('div[data-resultlist-offers-numbers]');
    }

    getJobNodes() {
        return document.querySelectorAll('article[data-at="job-item"]');
    }
}


