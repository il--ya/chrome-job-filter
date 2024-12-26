class ParserLinkedin extends ParserBase {
    scrapeJob(container) {
        console.log('Linkedin-specific scrapeJob');

        const job = {};

        const jobLink = container.querySelector('a'); // Find the <a> element
        if (jobLink === null) {
            return null; // this is not a valid listing
        }
        job.url = jobLink ? jobLink.href.split('?')[0] : 'N/A'; // Extract href

        // Extract the job ID using regex
        const idMatch = job.url.match(/jobs\/view\/(\d*)\//);
        if (idMatch === null) {
            return null; // Not a valid listing
        }
        job.id = idMatch[1]; // Assigns the ID or null if not found
    
        const jobTitleElement = jobLink ? jobLink.querySelector('strong') : null; // Find <strong> inside <a>
        job.title = jobTitleElement ? jobTitleElement.innerText.trim() : 'N/A'; // Extract job title
    
        const employerLocationElement = container.querySelector('div.artdeco-entity-lockup__subtitle span');
        if (employerLocationElement) {
            const textContent = employerLocationElement.innerText.trim();
            const [employer, location] = textContent.split('·').map(part => part.trim());

            job.employer = employer || 'N/A'; // Extract employer name
            job.location = location || 'N/A'; // Extract location
        } else {
            job.employer = 'N/A';
            job.location = 'N/A';
        }
        const locationElement = container.querySelector('div.artdeco-entity-lockup__caption span'); // Assuming the location is still in this element
        job.location = locationElement ? locationElement.innerText.trim() : 'N/A'; // Extract job location
    
        return job;
    }

    // Define the target node for observation which is specific to linkedin website
    getListNode() {
        return document.querySelector('.scaffold-layout__list');
    }

    getJobNodes() {
        return document.querySelectorAll('li.scaffold-layout__list-item');
    }
}
