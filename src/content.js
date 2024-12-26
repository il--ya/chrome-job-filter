let employersBlacklist = Array.from([]);
let jobsBlacklist =  Array.from([]);
let jobNotes =  Array.from([]);

// Determine the current site based on the URL by returning `SITES` values directly
const currentSite = (() => {
    const hostname = window.location.hostname;
    if (hostname.includes(SITES.TOTALJOBS)) return SITES.TOTALJOBS;
    if (hostname.includes(SITES.INDEED)) return SITES.INDEED;
    if (hostname.includes(SITES.LINKEDIN)) return SITES.LINKEDIN;
    return null; // or another value if you want to handle unknown sites
})();

// Function to check if a job is blacklisted
function isBlacklisted(job) {
    // Check if the employer is blacklisted
    if (employersBlacklist.has(job.employer)) {
        return true;
    }

    // Check if the job ID is blacklisted
    if (jobsBlacklist.has(job.id)) {
        return true;
    }

    // If none of the checks match, return false
    return false;
}


// Function to handle "Filter Job" button click
function handleJobButtonClick(event) {
    event.stopPropagation(); // Prevents the underlying element from being clicked

    const button = event.target;
    const container = button.parentElement;
    const job = parser.scrapeJob(container);

    if (job) {
        // Disable the current job listing
        if (jobsBlacklist.has(job.id)) {
            jobsBlacklist.delete(job.id);
        } else {
            jobsBlacklist.add(job.id);
        }

        button.innerText = jobsBlacklist.has(job.id) ? 'Filter Job ❌': 'Filter Job ✅';

        if (isBlacklisted(job)) {
            disableJobListing(container);
        }
        else {
            enableJobListing(container);
        }
        saveJobsBlacklist();
    }
}

// Function to handle "Filter Employer" button click
function handleEmployerButtonClick(event) {
    event.stopPropagation(); // Prevents the underlying element from being clicked

    const button = event.target;
    const container = button.parentElement;
    const job = parser.scrapeJob(container);

    if (job) {
        // Toggle the current employer
        const isEmployerBlacklisted = !employersBlacklist.has(job.employer);
        if (isEmployerBlacklisted) {
            employersBlacklist.add(job.employer);
        } else {
            employersBlacklist.delete(job.employer);
        }

        saveEmployersBlacklist();

        // Update all listings on the page
        parser.iterateJobs((listedJob, container) => {
            if (listedJob.employer === job.employer) {
                if (isBlacklisted(listedJob)) {
                    disableJobListing(container);
                }
                else {
                    enableJobListing(container);
                }
                employerButton = container.querySelector('button.filteremployer');
                employerButton.innerText = isEmployerBlacklisted ? 'Filter Employer ❌': 'Filter Employer ✅';
    
            }
        });
    }
}

function handleNoteButtonClick(event) {
    event.stopPropagation(); // Prevents the underlying element from being clicked
    const button = event.target;
    const container = button.parentElement;
    const job = parser.scrapeJob(container);

    if (job === null) {
        console.log('No job data was found');
        return;
    }

    // Get the existing note text if it exists
    const existingNote = jobNotes.has(job.id) ? jobNotes.get(job.id) : '';

    // Prompt the user with the existing note text
    const noteText = prompt('Enter a note:', existingNote);

    // Check if the user cancelled the prompt
    if (noteText === null) {
        console.log('User cancelled the prompt');
        return;
    }
    
    console.log('User entered:', noteText);

    // Check if the entered text is empty
    if (noteText.trim() === '') {
        // Remove the note if the text is empty
        jobNotes.delete(job.id);
        button.innerText = '✎'; // Clear the note from the button
    } else {
        // Set or update the note in the Map
        jobNotes.set(job.id, noteText);
        button.innerText = '✎ ' + noteText; // Add text to the button
    }

    saveJobNotes(); // Save the updated job notes
}

// Function to handle listing click
function handleListingClick(event) {
    const container = event.currentTarget;
    const job = parser.scrapeJob(container);
    if (isBlacklisted(job)) {
        event.stopPropagation(); // Prevent interaction with the parent if it's disabled
    }
}

function disableJobListing(container) {
    container.style.opacity = '0.5';
    //container.style.pointerEvents = 'none';

    // Disable pointer events for all links within the container
    const links = container.querySelectorAll('a');
    links.forEach(link => link.style.pointerEvents = 'none');
}

function enableJobListing(container) {
    container.style.opacity = '1.0';
    //container.style.pointerEvents = 'auto';

    // Re-enable pointer events for all links within the container
    const links = container.querySelectorAll('a');
    links.forEach(link => link.style.pointerEvents = 'auto');
}


// Function to create and inject buttons
function addButtonOverListings() {
    parser.iterateJobs((job, container) => {
        const buttonStyle = {
            position: 'absolute',
            top: '5px',
            zIndex: '1000',
            backgroundColor: 'skyblue',
            color: 'black',
            border: 'none',
            borderRadius: '3px',
            padding: '2px 2px',
            cursor: 'pointer',
            fontSize: '10px'
        };

        if (job === null) {
            return; // no valid job scraped from this container, skip for now
        }

        if (container.querySelector('button.filterjob') !== null)
        {
            return; // button already attached
        }

        // Set the parent element to relative position if not already set
        container.style.position = 'relative';

        const jobButton = document.createElement('button');
        Object.assign(jobButton.style, buttonStyle);
        jobButton.style.right = '10px'; // Distance from the right
        jobButton.innerText = jobsBlacklist.has(job.id) ? 'Filter Job ❌': 'Filter Job ✅';
        jobButton.classList.add('filterjob');
        container.appendChild(jobButton);

        const employerButton = document.createElement('button');
        Object.assign(employerButton.style, buttonStyle);
        employerButton.style.right = (20 + jobButton.offsetWidth) + 'px'; // Adjusted position for employerButton
        employerButton.innerText = employersBlacklist.has(job.employer) ? 'Filter Employer ❌': 'Filter Employer ✅';
        employerButton.classList.add('filteremployer');
        container.appendChild(employerButton);

        const noteButton = document.createElement('button');
        Object.assign(noteButton.style, buttonStyle);
        noteButton.style.left = '10px'; // Distance from the left
        noteButton.innerText = jobNotes.has(job.id) ? '✎ ' + jobNotes.get(job.id) : '✎ ';
        noteButton.classList.add('note');
        container.appendChild(noteButton);

        if (isBlacklisted(job)) {
            disableJobListing(container);
        }

        jobButton.addEventListener('click', handleJobButtonClick);
        employerButton.addEventListener('click', handleEmployerButtonClick);
        noteButton.addEventListener('click', handleNoteButtonClick);
        container.addEventListener('click', handleListingClick); // Add named function for container click
    });
}

// Retrieve blacklists and notes from chrome local storage
async function loadData() {
    try {
        const result = await chrome.storage.local.get([
            'employersBlacklist-' + currentSite,
            'jobsBlacklist-' + currentSite,
            'jobNotes-' + currentSite
        ]);
        employersBlacklist = new Set(result['employersBlacklist-' + currentSite] || employersBlacklistDefault);
        jobsBlacklist = new Set(result['jobsBlacklist-' + currentSite] || []);

        const storedNotes = result['jobNotes-' + currentSite] || [];
        jobNotes = new Map(storedNotes);
        console.log('Retrieved data:', employersBlacklist, jobsBlacklist, jobNotes);
    } catch (error) {
        console.error('Failed to retrieve stored data:', error);
    }
}

// Save blacklisted employers into local storage
async function saveEmployersBlacklist() {
    try {
        const dataToStore = {};
        dataToStore['employersBlacklist-' + currentSite] = Array.from(employersBlacklist);
        await chrome.storage.local.set(dataToStore);
        console.log('Blacklisted employers stored successfully:', dataToStore);
    } catch (error) {
        console.error('Failed to store blacklist of employers:', error);
    }
}

// Save blacklisted jobs into local storage
async function saveJobsBlacklist() {
    try {
        const dataToStore = {};
        dataToStore['jobsBlacklist-' + currentSite] = Array.from(jobsBlacklist);
        await chrome.storage.local.set(dataToStore);
        console.log('Blacklisted jobs stored successfully:', dataToStore);
    } catch (error) {
        console.error('Failed to store blacklist of jobs:', error);
    }
}

// Save job notes into local storage
async function saveJobNotes() {
    try {
        const dataToStore = {};
        dataToStore['jobNotes-' + currentSite] = Array.from(jobNotes.entries());
        await chrome.storage.local.set(dataToStore);
        console.log('Job notes stored successfully:', dataToStore);
    } catch (error) {
        console.error('Failed to store job notes:', error);
    }
}

// initialization
async function initialise() {
    await loadData();
    parser.observeListChanges(() => {
        addButtonOverListings();
    });
    //saveBlacklists();

}

const parser = createParser(currentSite);
initialise();
