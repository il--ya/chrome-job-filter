class ParserBase {
    constructor(siteName) {
        this.siteName = siteName;
    }

    scrapeJob(container) {
        throw new Error('Derived class must implement scrapeJob method');
    }

    // Abstract getters to be implemented in derived classes
    getListNode() {
        throw new Error('Derived class must implement getListNode method');
    }
    getJobNodes() {
        throw new Error('Derived class must implement getJobNodes method');
    }

    iterateJobs(callback) {
        const items = Array.from(this.getJobNodes());
    
        items.forEach(item => {
            const job = this.scrapeJob(item);
            if (job !== null) {
                callback(job, item);
            }
        });
    }

    observeListChanges(callback) {
        // Get the target node using the derived class's implementation
        const targetNode = this.getListNode();

        // Ensure the target node exists
        if (targetNode) {
            let debounceTimer; // Timer for debouncing

            const observer = new MutationObserver(() => {
                // Clear the timer to debounce the callback
                clearTimeout(debounceTimer);

                // Set a timeout to execute the callback after the mutations settle
                debounceTimer = setTimeout(callback, 100);
            });

            // Start observing the target node for changes in li elements
            observer.observe(targetNode, {
                childList: true,
                subtree: true
            });
        } else {
            console.error('Target element not found!');
        }
    }
}

